import { Outlet, useLocation, useNavigate } from "react-router-dom";
import Icon from "../../components/Icon";
import Question from "../../components/Question";
import QuestionSection from "../../components/QuestionChapter";
import { useLayoutStore, useQuestionStore } from "../../hooks/useStore";
import Popup from "../../components/Popup";
import { useState } from "react";
import PopupT from "../../types/popup";
import data from "../../../mockData/questions";
// @ts-expect-error No types on the npm package
import SlideButton from "react-slide-button";

function QuizLayout() {
  const [popupState, setPopupState] = useState<PopupT>();
  const { current, setCurrent, completed } = useQuestionStore((state) => state);
  const { side, popupOpen, switchSides, openPopup } = useLayoutStore(
    (state) => state
  );
  const groups = [...new Set(data.map((obj) => obj.group))];
  const progress = {
    completed: completed.length,
    total: data.length,
  };

  const navigate = useNavigate();
  const { pathname } = useLocation();

  const open = (ctx: "exit" | "finish") => {
    ctx === "exit"
      ? setPopupState({
          title: "Exit without saving",
          description:
            "You are exiting without saving your progress, it will be lost.",
          primaryButtonLabel: "Confirm Exit",
          accentColor: "red",
          onClick: () => navigate("/"),
        })
      : setPopupState({
          title: "Terminer le test",
          description:
            "Les réponses non enregistrées seront comptées comme fausses.",
          primaryButtonLabel: "Terminer",
          accentColor: "black",
          onClick: () => navigate("/"),
        });
    openPopup();
  };

  return (
    <>
      {popupOpen && popupState && (
        <Popup
          title={popupState?.title}
          description={popupState?.description}
          primaryButtonLabel={popupState?.primaryButtonLabel}
          accentColor={popupState?.accentColor}
          onClick={popupState?.onClick}
        />
      )}
      <div className="w-full w- min-h-dvh grid grid-cols-5 grid-rows-1 bg-fixed bg-gradient-to-b from-zinc-50 to-stone-300">
        <div
          className={`min-h-dvh bg-blue-gray-2 ${
            side === "right" ? "col-start-5" : "col-start-1"
          } font-manrope text-white overflow-y-auto`}
        >
          <div className="shadow-2xl px-6 pt-6 pb-4 bg-light-blue-gray">
            <div className="flex gap-3">
              <button
                className="bg-zinc-700 flex items-center justify-center p-4 aspect-square rounded-full"
                onClick={() => open("exit")}
              >
                <Icon.Home
                  sx={{
                    width: 16,
                    filter:
                      "invert(100%) sepia(0%) saturate(0%) hue-rotate(93deg) brightness(103%) contrast(103%)",
                  }}
                />
              </button>
              <button className="bg-zinc-700 flex items-center justify-center p-4 aspect-square rounded-full">
                <Icon.Collapse sx={{ width: 16 }} />
              </button>
            </div>
            <div className="mt-8">
              <h5 className="opacity-70">Create a test</h5>
              <h6 className="font-bold">Pneumologie</h6>
            </div>
            <div className="mt-6">
              <h5>Progress</h5>
              <div className="flex items-center gap-3 mt-2">
                {progress.completed !== 0 && (
                  <div
                    className="bg-gradient-to-b from-white to-transparent border-black border-2 rounded-full h-3"
                    style={{
                      width: `${(progress.completed * 100) / progress.total}%`,
                    }}
                  ></div>
                )}
                <p className="text-lg">
                  {progress.completed}/{progress.total}
                </p>
              </div>
            </div>
            <div className="flex justify-between gap-4 mt-4">
              <button
                className="bg-zinc-700 w-full flex items-center justify-center rounded-lg py-2"
                onClick={switchSides}
              >
                <Icon.ToggleRight
                  sx={{
                    width: 24,
                    transform: side === "left" ? "scaleX(-1)" : "",
                  }}
                />
              </button>
              <button className="bg-zinc-700 w-full flex items-center justify-center rounded-lg py-2">
                <Icon.Save sx={{ width: 24 }} />
              </button>
            </div>
          </div>
          <div className="px-6 pb-12">
            {groups.map((group) => (
              <QuestionSection title={group}>
                {data
                  .filter((f) => f.group === group)
                  .map(({ id }, idx: number) => (
                    <Question
                      label={`Question ${idx + 1}`}
                      id={id}
                      state={
                        current.id === id
                          ? "current"
                          : completed.find((f) => f.id === id)?.state
                      }
                      onClick={() => setCurrent(id, `Question ${idx + 1}`)}
                    />
                  ))}
              </QuestionSection>
            ))}
          </div>
          <div className="py-10 px-6 bg-light-blue-gray w-full flex justify-center">
            <SlideButton
              mainText="Terminer"
              classList="slide"
              caretClassList="carret"
              overlayClassList="overlay"
              caret={<Icon.Arrow />}
              reset={pathname}
              onSlideDone={() => navigate(`${pathname}/finalized`)}
            />
          </div>
        </div>
        <div
          className={`flex justify-center col-span-4 row-start-1 ${
            side === "right" ? "col-start-1" : "col-start-2"
          } self-start px-10 py-20 overflow-y-hidden`}
        >
          <Outlet />
        </div>
      </div>
    </>
  );
}

export default QuizLayout;
