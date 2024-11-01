import { useState } from "react";
import { AnswerT, Metadata } from "../types/question";
import Answer from "../components/Answer";
import Button from "../components/Button";
import Icon from "../components/Icon";
import moment from "moment";
import questions from "../../mockData/questions";
import {
  useAnswerStore,
  useLayoutStore,
  useQuestionStore,
} from "../hooks/useStore";
import data from "../../mockData/questions";

function Quiz() {
  const [metadata] = useState<Metadata>({
    subject: "Pneumologie",
    icon: <Icon.Lungs sx={{ width: 14 }} />,
    chapter: "Myasthénie",
    chapterID: 96,
  });
  const [lastTry] = useState<Date>(new Date("03/15/2024"));
  const [score] = useState({
    correct: 20,
    currentCorrect: 13,
    total: 20,
  });

  const [statsOpen, setStatsOpen] = useState(false);
  const [validated, setValidated] = useState(false);
  const {
    flagged,
    current,
    setAsCompleted,
    setCurrent,
    addToFlagged,
    removeFromFlagged,
  } = useQuestionStore((state) => state);
  const { selected, addToSelected, removeFromSelected, clearAnswers } =
    useAnswerStore();
  const { popupOpen } = useLayoutStore((state) => state);
  const currentAnswers = data.find((q) => q.id === current.id)!.answers;
  const correctAnswers = data
    .find((q) => q.id === current.id)
    ?.answers.filter((a) => a.state === "correct")
    .map((e) => e.id);

  const toggleStats = () => setStatsOpen((statsOpen) => !statsOpen);
  const toggleFlagged = () =>
    flagged.includes(current.id) ? removeFromFlagged() : addToFlagged();

  const validate = () => {
    setValidated(true);
    if (correctAnswers!.every((v, i) => v === selected[i])) {
      setAsCompleted("correct");
    } else if (selected.some((s) => correctAnswers!.includes(s))) {
      setAsCompleted("incomplete");
    } else {
      setAsCompleted("wrong");
    }
  };

  const nextQuestion = () => {
    setValidated(false);
    clearAnswers();
    const idx = questions.findIndex((x) => x.id === current.id) + 1;
    if (current.id !== questions[questions.length - 1].id)
      setCurrent(questions[idx].id, "Question " + (idx + 1));
  };

  const previousQuestion = () => {
    setValidated(false);
    clearAnswers();
    const idx = questions.findIndex((x) => x.id === current.id) - 1;
    if (current.id !== data[0].id)
      setCurrent(questions[idx].id, "Question " + (idx - 1));
  };

  return (
    <div
      className={`bg-white shadow-2xl w-full rounded-2xl py-3 font-manrope ${
        popupOpen ? "overflow-hidden" : "overflow-auto"
      }`}
    >
      <div className="">
        <div className={`flex justify-between pt-6 px-16`}>
          <div className="inline-flex self-center gap-2 px-3 py-2 rounded-xl border-2 bg-zinc-100 border-zinc-200">
            <div>{current.label}</div>
            <div className="bg-vibrant-blue px-2 rounded-md scale-90 text-white uppercase">
              {data.find((q) => q.id === current.id)!.category}
            </div>
          </div>
          {statsOpen && (
            <div className="flex">
              <div className="text-sm flex flex-col items-start justify-center gap-2">
                <div className="flex items-center gap-1">
                  {metadata.icon}
                  <small className="font-semibold">{metadata.subject}</small>
                </div>
                <div>
                  <small className="bg-zinc-100 border-zinc-200 border-[1px] px-2 py-[6px] rounded-full font-bold">
                    <span className="text-[8px] mr-1 bg-white rounded-md font-semibold align-middle py-[3px] px-1 shadow-md">
                      {metadata.chapterID}
                    </span>
                    {metadata.chapter}
                  </small>
                </div>
              </div>
              <hr className="w-[1.5px] h-full bg-zinc-600 mx-5" />
              <div className="flex flex-col justify-center">
                <p className="text-zinc-600">
                  Last try:{" "}
                  <span className="font-bold text-black">
                    {moment(lastTry).fromNow()}
                  </span>
                </p>
                <p className="text-zinc-600">
                  Last score:{" "}
                  <span className="font-bold text-black">
                    {score.correct}/{score.total}
                  </span>
                </p>
              </div>
              <hr className="w-[1.5px] h-full bg-zinc-600 mx-5" />
              <div className="">
                <div className="flex gap-3">
                  <Icon.Progress sx={{ width: 16 }} />
                  <span className="font-bold">
                    {(score.currentCorrect * 100) / score.total}%
                  </span>
                </div>
                <span className="text-zinc-600">Answered Correctly</span>
              </div>
            </div>
          )}
        </div>
        <div className="mt-8 px-16">
          <p>{data.find((q) => q.id === current.id)!.prompt}</p>
          <div className="flex flex-col gap-4 pt-5">
            {currentAnswers.map(({ id, text, state }: AnswerT, idx: number) => (
              <Answer
                id={id}
                text={text}
                key={idx}
                state={!validated ? "default" : state}
                checked={selected.includes(id)}
                validated={validated}
                onChange={() => {
                  if (!validated)
                    selected.includes(id)
                      ? removeFromSelected(id)
                      : addToSelected(id);
                }}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="px-10 mt-10 flex justify-between">
        <div className="flex gap-4 items-center">
          <Button
            type="icon-quiz"
            label={
              <Icon.Stats
                sx={{
                  filter: statsOpen
                    ? "invert(26%) sepia(91%) saturate(1032%) hue-rotate(222deg) brightness(114%) contrast(99%)"
                    : "none",
                }}
              />
            }
            onClick={toggleStats}
          />
          <Button
            type="icon-quiz"
            label={<Icon.Heart sx={{ fill: "#000" }} />}
            onClick={previousQuestion}
          />
          <Button
            type="icon-quiz"
            label={<Icon.Question />}
            onClick={nextQuestion}
          />
          <Button
            type="icon-quiz"
            label={
              <Icon.Flag
                sx={{
                  filter: flagged.includes(current.id)
                    ? "invert(26%) sepia(91%) saturate(1032%) hue-rotate(222deg) brightness(114%) contrast(99%)"
                    : "none",
                }}
              />
            }
            onClick={toggleFlagged}
          />
        </div>
        <div className="flex gap-4 items-stretch">
          <Button
            type="icon-quiz"
            label={<Icon.Arrow sx={{ transform: "scaleX(-1)" }} />}
            onClick={previousQuestion}
          />
          <Button
            type="icon-quiz"
            label={<Icon.Arrow />}
            onClick={nextQuestion}
          />
          <Button type="primary-quiz" label="Valider" onClick={validate} />
        </div>
      </div>
    </div>
  );
}

export default Quiz;
