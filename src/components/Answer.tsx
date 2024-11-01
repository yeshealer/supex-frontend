import { AnswerT } from "../types/question";

interface AnswerProps extends AnswerT {
  validated: boolean;
  checked: boolean;
  onChange: () => void;
}

const Answer = ({
  id,
  text,
  state,
  checked,
  validated,
  onChange,
}: AnswerProps) => {
  return (
    <label
      className={`flex items-center px-5 py-3 rounded-xl border-[3px] ${
        checked && state === "default"
          ? "border-[#4923B0] bg-violet-50"
          : validated && state === "correct" && checked
          ? "bg-emerald-50 border-emerald-500"
          : validated && state === "correct"
          ? "bg-emerald-50"
          : validated && state === "wrong" && checked
          ? "bg-rose-50 border-wrong-red"
          : validated && state === "wrong"
          ? "bg-rose-50"
          : "border-gray-200"
      } hover:bg-violet-50 cursor-pointer transition-colors`}
    >
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className="mr-5 inline-block accent-[#6f58f6]"
      />
      <small className="uppercase block bg-dark-gray text-xs text-white px-2 py-1 rounded-full mr-3">
        {id}
      </small>
      <p className="font-medium">{text}</p>
    </label>
  );
};

export default Answer;
