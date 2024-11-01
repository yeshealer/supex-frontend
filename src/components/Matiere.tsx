import { useState } from "react";
import Button from "./Button";
import Chip from "./Chip";
import ChipNumber from "./ChipNumber";
import Icon from "./Icon";

type Item = {
  id: number;
  title: string;
  status?: "Fait" | "À faire";
  questionsNumber: number;
  progress: number;
};

export interface MatiereProps {
  icon: JSX.Element;
  title: string;
  progress: number;
  questionsNumber: number;
  items: Item[];
}

const Matiere = ({
  icon,
  items,
  progress,
  questionsNumber,
  title,
}: MatiereProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-white shadow-lg rounded-xl font-manrope">
      <div className="flex items-center justify-end px-5 py-45">
        <div className="w-full flex gap-3">
          {icon}
          <div className="font-extrabold w-full">
            {title}
            <div className="bg-gray-50 mt-2 shadow-inner w-full rounded-full border-gray-200 border" style={{  }}>
              <div
                className="bg-gradient-to-b from-[#47B0FF] to-[#3587CB] rounded-full h-full"
                style={{ width: progress * 100 + "%" }}
              ></div>
            </div>
          </div>
        </div>
        <hr className="rotate-90 border-none bg-zinc-300 w-16 h-[1px]" />
        <div className="flex rounded-md" style={{ backgroundColor: "#FAFAFA" }}>
          <div className="flex flex-col items-center py-1.5 px-6 border-r">
            <Icon.Stats sx={{ height: 13, opacity: 0.21, margin: "3px 0 3px 0" }} />
            <span className="font-bold text-xs">{progress * 100}%</span>
            <span className="opacity-40 text-xs pb-1">completed</span>
          </div>
          {/* <hr className="rotate-90 border-none bg-zinc-300 w-16 h-[1px]" /> */}
          <div className="flex flex-col items-center py-1.5 px-6">
            <Icon.Vector sx={{ height: 13, opacity: 0.8, margin: "3px 0 3px 0" }} />
            <span className="font-bold text-xs">{questionsNumber}</span>
            <span className="opacity-40 text-xs pb-1">questions</span>
          </div>
        </div>
        <Button
          type="primary-start"
          label="Start"
          className="border-b-custom border-b-2 ml-8"
          onClick={() => null}
        />
      </div>
      {isOpen && (
        <div className="w-full overflow-hidden">
          <table className="table-auto w-full mt-3 text-sm">
            <tr className="mb-3">
              <th className="px-6 pb-3 text-left text-gray-500">
                <div className="flex items-center gap-2">
                  Items <Icon.ShortArrow sx={{ height: 10 }} />
                </div>
              </th>
              <th className="px-6 pb-3 text-gray-500" align="center">
                <div className="flex items-center justify-center gap-2">
                  Status <Icon.ShortArrow sx={{ height: 10 }} />
                </div>
              </th>
              <th className="px-6 pb-3 text-gray-500" align="center">
                <div className="flex items-center justify-center gap-2">
                  Questions <Icon.ShortArrow sx={{ height: 10 }} />
                </div>
              </th>
              <th className="px-6 pb-3 text-gray-500 text-left">
                <div className="flex items-center gap-2">
                  Progress <Icon.ShortArrow sx={{ height: 10 }} />
                </div>
              </th>
              <th></th>
              <th></th>
            </tr>
            <tbody>
              {items.map(({ id, progress, questionsNumber, title, status }) => (
                <tr
                  key={id}
                  className="border-t-[1px] border-zinc-300 w-full text-left"
                >
                  <td className="flex py-1.5 px-6">
                    <Chip icon={<ChipNumber number={id} />} label={title} />
                  </td>
                  <td className="py-0.5 px-6 text-center">
                    {status && (
                      <button type="button" className={`border-2 uppercase font-medium rounded-full text-xs px-3 py-1 text-center items-center justify-center font-extrabold leading-3 ${status === "À faire"
                      ? "text-red-900 border-red-600 bg-red-100"
                      : "text-green-900 border-green-600 bg-green-100"
                    }`}>
                    {status}</button>
                    )}
                  </td>
                  <td className="py-1.5 px-6 text-center text-xs">
                    {questionsNumber} questions
                  </td>
                  <td className="py-1.5 px-6 text-left gap-4 text-xs">
                    <div className="bg-gray-50 shadow-inner w-full min-w-[200px] h-2 rounded-full border-gray-200 border-2">
                      <div
                        className="bg-gradient-to-b from-[#848484] to-black rounded-full h-full"
                        style={{ width: progress * 100 + "%", height: "6px" }}
                      ></div>
                    </div>
                  </td>
                  <td className="py-1.5 cursor-pointer text-xs">
                    {progress * 100}%
                  </td>
                  <td className="py-1.5 px-6 cursor-pointer">
                    <Icon.Edit
                      sx={{
                        filter:
                          "invert(37%) sepia(60%) saturate(6737%) hue-rotate(239deg) brightness(108%) contrast(93%)",
                      }}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
      <hr className="border-none bg-zinc-300 w-full h-[1px]" />
      <div
        className="p-4 flex gap-4 opacity-40 cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <Icon.Hide sx={{ rotate: isOpen ? "180deg" : "0deg" }} />
        <span className="font-medium">Détails</span>
      </div>
    </div>
  );
};

export default Matiere;
