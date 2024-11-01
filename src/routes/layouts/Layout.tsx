import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import Icon from "../../components/Icon";
import Button from "../../components/Button";
import ChipNumber1 from "../../components/ChipNumber1";
import { useState } from "react";
import Chip1 from "../../components/Chip1";

type Favorite = {
  id: number;
  icon: JSX.Element;
  label: string;
};

export default function Layout() {
  const [favorites, setFavorites] = useState<Favorite[]>([
    { id: 401, icon: <Icon.Brain />, label: "Neurologie" },
    { id: 402, icon: <ChipNumber1 number={96} />, label: "Myasthénie" },
    { id: 403, icon: <ChipNumber1 number={268} />, label: "Hypercalcémie" },
    { id: 404, icon: <Icon.AnatomicHeart />, label: "Cardiologie" },
  ]);
  const navigate = useNavigate();
  const location = useLocation();
  const pathnames = location.pathname
    .split("/")
    .filter((x) => x)
    .map((a) => a.charAt(0).toUpperCase() + a.substring(1));

  const removeFavorite = (id: number) =>
    setFavorites((favorites) => favorites.filter((f) => f.id !== id));

  return (
    <>
      <div className="min-w-full min-h-dvh grid grid-cols-6">
        <div className="bg-blue-gray-1 col-span-1 min-h-dvh px-4 pt-9 pb-2 flex flex-col items-center font-manrope sidebar">
          <div className="flex pb-2">
            <Icon.Logo />
          </div>
          <div className="flex items-center justify-between bg-zinc-700 rounded-full w-full my-5 py-2 px-4 xl:px-4 border border-gray-500">
            <div className="relative flex items-center">
              <div className="absolute start-0 flex items-center">
                <Icon.Search sx={{ width: 13 }} />
              </div>
              <input
                type="text"
                placeholder="Search"
                className="bg-transparent pl-6 w-full focus:outline-none text-white max-w-32 xl:max-w-28 text-sm pr-2"
              />
            </div>
            <kbd className="flex bg-zinc-800 rounded-xl pr-3 pl-2 py-1 text-stone-300 text-sm xl:text-xs font-manrope font-bold">
              &#8984;&nbsp; +
            </kbd>
          </div>
          <ul className="w-full">
            <li>
              <Link
                to="/"
                className={`flex text-sm gap-4 px-3 py-3 rounded-xl ${location.pathname === "/"
                  ? "bg-zinc-800 text-white"
                  : "text-zinc-400"
                  }`}
              >
                <Icon.Home
                  sx={{
                    width: 15,
                    filter:
                      location.pathname === "/"
                        ? "invert(100%) sepia(0%) saturate(0%) hue-rotate(93deg) brightness(103%) contrast(103%)"
                        : "invert(87%) sepia(0%) saturate(498%) hue-rotate(273deg) brightness(85%) contrast(92%)",
                  }}
                />
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/library"
                className={`flex text-sm gap-4 px-3 py-3 rounded-xl ${location.pathname === "/library"
                  ? "bg-zinc-800 text-white"
                  : "text-zinc-400"
                  }`}
              >
                <Icon.Library
                  sx={{
                    width: 18,
                    filter:
                      location.pathname === "/library"
                        ? "invert(100%) sepia(0%) saturate(0%) hue-rotate(93deg) brightness(103%) contrast(103%)"
                        : "invert(87%) sepia(0%) saturate(498%) hue-rotate(273deg) brightness(85%) contrast(92%)",
                  }}
                />
                Library
              </Link>
            </li>
            <li>
              <Link
                to="annales"
                className="flex text-zinc-400 text-sm gap-4 px-3 py-3"
              >
                <Icon.Exams sx={{ width: 15 }} />
                Annales
              </Link>
            </li>
          </ul>
          <hr className="bg-zinc-800 border-none w-full h-[1px] my-2" />
          <ul className="w-full">
            <li>
              <Link
                to="/playlists"
                className="flex text-zinc-400 text-sm gap-4 px-3 py-3"
              >
                <Icon.Heart
                  sx={{
                    width: 15,
                    filter:
                      "invert(87%) sepia(0%) saturate(498%) hue-rotate(273deg) brightness(85%) contrast(92%)",
                  }}
                />
                Playlists
              </Link>
            </li>
            <li>
              <Link
                to="/planner"
                className="flex text-zinc-400 text-sm gap-4 px-3 py-3"
              >
                <Icon.Calendar sx={{ width: 15 }} />
                Planner
              </Link>
            </li>
            <li>
              <Link
                to="/history"
                className="flex text-zinc-400 text-sm gap-4 px-3 py-3"
              >
                <Icon.Recent sx={{ width: 15 }} />
                History
              </Link>
            </li>
          </ul>
          <hr className="bg-zinc-800 border-none w-full h-[1px] my-3" />
          <div className="py-6">
            <Button
              type="primary-main"
              label="Custom test"
              className="border-b-custom border-b-2"
              onClick={() => navigate("/quiz/create")}
            />
          </div>
          <div className="w-full">
            <h6 className="uppercase text-zinc-500 font-semibold mt-2 mb-3">
              Favorites
            </h6>
            <div className="flex flex-col items-start gap-2 bg-zinc-800 w-full py-4 px-4 rounded-xl overflow-hidden">
              {favorites.map(({ id, icon, label }) => (
                <div className="flex items-center gap-2" key={id}>
                  <Chip1 icon={icon} label={label} />
                  <button
                    className="bg-white py-1 px-2 text-xs font-semibold rounded-md"
                    onClick={() => removeFavorite(id)}
                  >
                    X
                  </button>
                </div>
              ))}
              {favorites.length === 0 && (
                <p className="text-zinc-500 text-sm">Nothing here</p>
              )}
            </div>
          </div>
          <ul className="w-full mt-8">
            <li>
              <Link
                to="/help"
                className="flex text-zinc-400 text-sm gap-3 px-4 py-[6px]"
              >
                <Icon.Chat
                  sx={{
                    width: 15,
                  }}
                />
                Help
              </Link>
            </li>
            <li className="flex text-zinc-400 text-sm gap-3 px-4 py-[6px] cursor-pointer">
              <Icon.Chat
                sx={{
                  width: 15,
                }}
              />
              Log out
            </li>
          </ul>
        </div>
        <div className="py-8 px-18 col-span-5 bg-gradient-to-b from-zinc-50 to-stone-300 rounded-tl-lg">
          <div className="flex items-center font-manrope py-4">
            {location.pathname === "/" ? null : (
              <Link
                to="/"
                className="opacity-30 hover:opacity-70 transition-opacity mr-5"
              >
                <Icon.Home />
              </Link>
            )}
            {pathnames.map((value, index) => {
              const to = `/${pathnames.slice(0, index + 1).join("/")}`;

              return (
                <div key={index}>
                  <span key={to} className="flex gap-7 font-semibold">
                    <Icon.Breadcrumb /> {value}
                  </span>
                </div>
              );
            })}
          </div>
          <div className="mt-4 w-full">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
}
