import { useState } from "react";
import Icon from "./Icon";
import Item, { ItemProps } from "./Item";

const Items = () => {
  const [items] = useState<ItemProps[]>([
    {
      id: 129,
      title: "Syndromes coronariens aigus",
      progress: 0.5,
      questionsNumber: 187,
      seen: false,
    },
    {
      id: 138,
      title: "Péricardite aiguë",
      progress: 0.67,
      questionsNumber: 187,
      seen: false,
    },
    {
      id: 165,
      title: "Insuffisance cardiaque",
      progress: 0.95,
      questionsNumber: 187,
      seen: true,
    },
    {
      id: 245,
      title: "Fibrillation atriale",
      progress: 0.12,
      questionsNumber: 187,
      seen: false,
    },
    {
      id: 336,
      title: "Myocardite ",
      progress: 0,
      questionsNumber: 187,
      seen: false,
    },
  ]);

  return (
    <>
      <div className="flex items-center font-manrope gap-3 bg-white rounded-full py-3 px-4 mt-5 border-2 border-gray-200">
        <Icon.Search
          sx={{ filter: "invert(100%)", height: 14, opacity: 0.4 }}
        />
        <input
          type="text"
          placeholder="Search an item"
          className="w-full focus:outline-none text-sm"
        />
      </div>
      <div className="flex flex-col gap-4 mt-4">
        {items.map((item) => (
          <Item
            id={item.id}
            progress={item.progress}
            questionsNumber={item.questionsNumber}
            seen={item.seen}
            title={item.title}
          />
        ))}
      </div>
    </>
  );
};

export default Items;
