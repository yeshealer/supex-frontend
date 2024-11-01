import { useState } from "react";
import Matieres from "../components/Matieres";
import Items from "../components/Items";

function Library() {
  const tabs = ["Matières", "Items"];
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="w-full">
      <h1 className="font-manrope font-extrabold text-4xl">Library</h1>
      <div className="mt-10">
        <ul className="flex gap-6 font-manrope">
          {tabs.map((tab, idx) => (
            <div className="flex flex-col gap-2" key={idx}>
              <li
                className="font-bold opacity-70 cursor-pointer"
                onClick={() => setActiveTab(idx)}
              >
                {tab}
              </li>
              {activeTab === idx && (
                <div className="bg-black rounded-tl-lg rounded-tr-lg h-1 w-full"></div>
              )}
            </div>
          ))}
        </ul>
        <hr className="border-none bg-zinc-300 w-full h-[1px]" />
      </div>
      {activeTab === tabs.findIndex((v) => v === "Matières") && <Matieres />}
      {activeTab === tabs.findIndex((v) => v === "Items") && <Items />}
    </div>
  );
}

export default Library;
