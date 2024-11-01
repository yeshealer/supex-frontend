import React from "react";
import Icon from "./Icon";

export interface ItemProps {
  id: number;
  title: string;
  progress: number;
  questionsNumber: number;
  seen: boolean;
}

const Item = ({ id, title, progress, questionsNumber, seen }: ItemProps) => {
  return (
    <div className="bg-white shadow-lg rounded-xl font-manrope flex items-center justify-end px-12 py-3">
      <div className="flex flex-col gap-3 w-full">
        <h3 className="font-bold">
          {id}. {title}
        </h3>
        <div className="bg-gray-50 shadow-inner w-full max-w-[600px] h-2 rounded-full">
          <div
            className="bg-gradient-to-b from-[#47B0FF] to-[#3587CB] rounded-full h-full border-gray-200 border-2"
            style={{ width: progress * 100 + "%" }}
          ></div>
        </div>
        <div className="flex gap-5">
          <div className="flex gap-2 text-sm items-center">
            <Icon.Stats
              sx={{
                filter:
                  "invert(90%) sepia(7%) saturate(128%) hue-rotate(193deg) brightness(91%) contrast(87%)",
                height: 12,
              }}
            />
            <span className="opacity-50">{progress * 100}% completed</span>
          </div>
          <div className="flex gap-2 text-sm items-center">
            <Icon.Quiz sx={{ height: 12 }} />
            <span className="opacity-50">{questionsNumber} questions</span>
          </div>
        </div>
      </div>
      <hr className="rotate-90 border-none bg-zinc-300 w-14 h-[1px]" />
      <div className="flex ">
        <Icon.Eye
          sx={{
            height: 24,
            filter: seen
              ? "invert(40%) sepia(27%) saturate(2651%) hue-rotate(218deg) brightness(94%) contrast(93%)"
              : "invert(100%) sepia(5%) saturate(2058%) hue-rotate(165deg) brightness(96%) contrast(95%)",
            marginRight: 24,
            marginLeft: 16
          }}
        />
        <Icon.Edit1
          sx={{
            height: 24,
          }}
        />
      </div>
    </div>
  );
};

export default Item;
