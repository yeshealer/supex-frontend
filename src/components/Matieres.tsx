import { useState } from "react";
import Icon from "./Icon";
import Matiere, { MatiereProps } from "./Matiere";

const Matieres = () => {
  const [matieres] = useState<MatiereProps[]>([
    {
      icon: <Icon.AnatomicHeart sx={{ height: 36 }} />,
      items: [
        {
          id: 701,
          title: "Test item 1",
          questionsNumber: 10,
          progress: 0.5,
          status: "Fait",
        },
        {
          id: 702,
          title: "Test item 2",
          questionsNumber: 10,
          progress: 0.25,
          status: "À faire",
        },
      ],
      progress: 0.87,
      questionsNumber: 12,
      title: "Cardiologie",
    },
    {
      icon: <Icon.Bone sx={{ height: 32 }} />,
      items: [
        {
          id: 126,
          title: "Trouble de l’érection",
          questionsNumber: 10,
          progress: 0.2,
        },
        {
          id: 96,
          title: "Myasthénie",
          questionsNumber: 10,
          progress: 0.78,
        },
        {
          id: 265,
          title: "Lithiase urinaire",
          questionsNumber: 10,
          progress: 0.12,
        },
        {
          id: 330,
          title: "Hémorragies méningées",
          questionsNumber: 10,
          progress: 0.46,
        },
        {
          id: 268,
          title: "Hypercalcémie",
          status: "À faire",
          questionsNumber: 10,
          progress: 0,
        },
        {
          id: 259,
          title:
            "Protéinurie et syndrome néphrotique chez l’adulte et l’enfant",
          status: "Fait",
          questionsNumber: 10,
          progress: 0,
        },
      ],
      progress: 0.53,
      questionsNumber: 89,
      title: "Chirurgie Orthopédique",
    },
    {
      icon: <Icon.Skin sx={{ height: 32 }} />,
      items: [
        {
          id: 801,
          title: "Test item 1",
          questionsNumber: 10,
          progress: 1,
          status: "Fait",
        },
        {
          id: 802,
          title: "Test item 2",
          questionsNumber: 10,
          progress: 0.39,
          status: "À faire",
        },
      ],
      progress: 0.1,
      questionsNumber: 45,
      title: "Dermatologie",
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
        {matieres.map((matiere) => (
          <Matiere
            key={matiere.title}
            icon={matiere.icon}
            items={matiere.items}
            progress={matiere.progress}
            questionsNumber={matiere.questionsNumber}
            title={matiere.title}
          />
        ))}
      </div>
    </>
  );
};

export default Matieres;
