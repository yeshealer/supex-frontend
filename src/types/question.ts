import { Char } from "./utils";

export type AnswerT = {
  id: Char;
  text: string;
  state: "default" | "correct" | "wrong";
};

export interface Question {
  id: number;
  prompt: string;
  category: Char;
  group: string;
  answers: AnswerT[];
}

export type QuestionState =
  | "unanswered"
  | "wrong"
  | "correct"
  | "incomplete"
  | "current";

export interface Metadata {
  subject: string;
  icon: JSX.Element;
  chapter: string;
  chapterID: number;
}
