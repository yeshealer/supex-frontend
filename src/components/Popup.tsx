import Icon from "./Icon";
import { useClickAway, useLockBodyScroll } from "@uidotdev/usehooks";
import { useLayoutStore } from "../hooks/useStore";
import PopupT from "../types/popup";

const Popup = ({
  title,
  description,
  primaryButtonLabel,
  accentColor,
  onClick,
}: PopupT) => {
  const { closePopup } = useLayoutStore((state) => state);
  const ref = useClickAway(() => closePopup());
  useLockBodyScroll();

  return (
    <div className="w-full h-dvh fixed grid place-items-center font-manrope z-10">
      <dialog
        className={`grid columns-3 gap-6 items-start z-20 bg-white rounded-3xl ${
          accentColor === "red" ? "border-red-400" : "border-yellow-400"
        } border-2 px-8 py-10`}
        // @ts-ignore
        ref={ref}
      >
        <button className="col-start-1">
          <Icon.Info
            sx={{
              width: 24,
              filter:
                accentColor === "red"
                  ? "invert(40%) sepia(52%) saturate(6251%) hue-rotate(343deg) brightness(108%) contrast(89%)"
                  : "none",
            }}
          />
        </button>
        <div className="col-start-2 flex flex-col gap-2">
          <h3 className="font-bold text-xl">{title}</h3>
          <p className="font-semibold max-w-72 text-neutral-600">
            {description}
          </p>
          <div className="flex gap-5 font-bold mt-4">
            <button
              className={`${
                accentColor === "red"
                  ? "text-red-500 bg-red-50 flex items-center gap-2"
                  : "text-inherit bg-zinc-100"
              } px-5 py-3 rounded-xl`}
              onClick={onClick}
            >
              {primaryButtonLabel}
              {accentColor === "red" && (
                <Icon.Arrow
                  sx={{
                    width: 16,
                    transform: "rotate(-45deg)",
                    filter:
                      accentColor === "red"
                        ? "invert(40%) sepia(52%) saturate(6251%) hue-rotate(343deg) brightness(108%) contrast(89%)"
                        : "none",
                  }}
                />
              )}
            </button>
            <button
              className="border-2 border-gray-200 px-4 py-3 rounded-xl"
              onClick={closePopup}
            >
              Cancel
            </button>
          </div>
        </div>
        <button className="col-start-3" onClick={closePopup}>
          <Icon.Close sx={{ width: 14 }} />
        </button>
      </dialog>
      <div className="w-full h-full bg-black opacity-40 absolute"></div>
    </div>
  );
};

export default Popup;
