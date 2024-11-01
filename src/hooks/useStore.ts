import { create } from "zustand";
import { Char } from "../types/utils";
import { QuestionState } from "../types/question";

interface QState {
  id: number;
  state: QuestionState;
}

interface QuestionStoreState {
  current: {
    id: number;
    label: string;
  };
  flagged: number[];
  completed: QState[];
  setAsCompleted: (completionState: QuestionState) => void;
  setCurrent: (id: number, label: string) => void;
  addToFlagged: () => void;
  removeFromFlagged: () => void;
}

interface LayoutStoreState {
  side: "left" | "right";
  popupOpen: boolean;
  switchSides: () => void;
  openPopup: () => void;
  closePopup: () => void;
}

interface AnswerStoreState {
  selected: Char[];
  addToSelected: (id: Char) => void;
  removeFromSelected: (id: Char) => void;
  clearAnswers: () => void;
}

const useQuestionStore = create<QuestionStoreState>()((set) => ({
  current: {
    id: 101,
    label: "Question 1",
  },
  state: "correct",
  flagged: [],
  completed: [],
  setAsCompleted: (completionState) =>
    set((state) => ({
      completed: [
        ...state.completed,
        { id: state.current.id, state: completionState },
      ],
    })),
  setCurrent: (id, label) => set({ current: { id, label } }),
  addToFlagged: () =>
    set((state) => ({
      flagged: [...state.flagged, state.current.id],
    })),
  removeFromFlagged: () =>
    set((state) => ({
      flagged: state.flagged.filter((f) => f !== state.current.id),
    })),
}));

const useAnswerStore = create<AnswerStoreState>()((set) => ({
  selected: [],
  addToSelected: (id: Char) =>
    set((state) => ({
      selected: [...state.selected, id],
    })),
  removeFromSelected: (id: Char) =>
    set((state) => ({
      selected: state.selected.filter((f) => f !== id),
    })),
  clearAnswers: () => set(() => ({ selected: [] })),
}));

const useLayoutStore = create<LayoutStoreState>()((set) => ({
  side: "right",
  popupOpen: true,
  switchSides: () =>
    set((state) => ({
      side: state.side === "right" ? "left" : "right",
    })),
  openPopup: () => set(() => ({ popupOpen: true })),
  closePopup: () => set(() => ({ popupOpen: false })),
}));

export { useQuestionStore, useAnswerStore, useLayoutStore };
