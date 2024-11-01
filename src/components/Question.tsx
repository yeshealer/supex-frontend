import { useQuestionStore } from "../hooks/useStore";
import { QuestionState } from "../types/question";
import Icon from "./Icon";

interface QuestionProps {
  state?: QuestionState;
  label: string;
  id: number;
  onClick: () => void;
}

const Question = ({
  state = "unanswered",
  label,
  onClick,
  id,
}: QuestionProps) => {
  const { flagged } = useQuestionStore((state) => state);

  return (
    <button
      className={`${
        state === "current"
          ? "bg-white text-gray-900"
          : "bg-zinc-700 text-white border-zinc-600 border-2"
      } py-2 px-4 rounded-xl w-full flex justify-between items-center`}
      onClick={onClick}
    >
      <div className="flex gap-3">
        {state === "unanswered" ? (
          <Icon.QuestionUnanswered sx={{ width: 16 }} />
        ) : state === "current" ? (
          <Icon.QuestionCurrent sx={{ width: 16 }} />
        ) : state === "correct" ? (
          <Icon.QuestionCorrect sx={{ width: 16 }} />
        ) : state === "incomplete" ? (
          <Icon.Incomplete sx={{ width: 16 }} />
        ) : (
          <Icon.QuestionWrong sx={{ width: 16 }} />
        )}
        <p className="font-semibold">{label}</p>
      </div>
      {flagged.includes(id) && (
        <div className="mr-2">
          <Icon.Flagged sx={{ width: 20 }} />
        </div>
      )}
    </button>
  );
};

export default Question;
