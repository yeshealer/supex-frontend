import React from "react";
import anatomic_heart from "../assets/icons/anatomic_heart.svg";
import arrow from "../assets/icons/arrow.svg";
import bone from "../assets/icons/bone.png";
import brain from "../assets/icons/brain.svg";
import breadcrumb from "../assets/icons/breadcrumb_icon.svg";
import calendar from "../assets/icons/calendar.svg";
import chat from "../assets/icons/chat.svg";
import close from "../assets/icons/close.svg";
import collapse from "../assets/icons/collapse.svg";
import edit from "../assets/icons/edit.svg";
import edit1 from "../assets/icons/edit1.svg";
import exams from "../assets/icons/exams.svg";
import eye from "../assets/icons/eye.svg";
import flag from "../assets/icons/flag.svg";
import flagged from "../assets/icons/flagged.svg";
import heart from "../assets/icons/heart.svg";
import hide from "../assets/icons/hide.svg";
import home from "../assets/icons/home.svg";
import incomplete from "../assets/icons/incomplete_dot.svg";
import info from "../assets/icons/info.svg";
import question from "../assets/icons/question.svg";
import library from "../assets/icons/library.svg";
import logo from "../assets/supex_logo.svg";
import lungs from "../assets/icons/lungs.svg";
import progress from "../assets/icons/progress.svg";
import toggleLeft from "../assets/icons/toggle_left.svg";
import toggleRight from "../assets/icons/toggle_right.svg";
import recent from "../assets/icons/recent.svg";
import save from "../assets/icons/save.svg";
import search from "../assets/icons/search.svg";
import shortArrow from "../assets/icons/short_arrow.svg";
import skin from "../assets/icons/skin.png";
import stats from "../assets/icons/stats.svg";
import vector from "../assets/icons/vector.svg";
import questionCorrect from "../assets/icons/question_correct.svg";
import questionCurrent from "../assets/icons/question_current.svg";
import questionUnanswered from "../assets/icons/question_unanswered.svg";
import questionWrong from "../assets/icons/question_wrong.svg";
import quiz from "../assets/icons/quiz.svg";

type IconStyle = {
  sx?: React.CSSProperties;
};

const Icon = ({
  src,
  alt,
  sx,
}: {
  src: string;
  alt: string;
  sx: React.CSSProperties | undefined;
}) => {
  return sx ? (
    <img src={src} alt={`${alt} icon`} style={sx} />
  ) : (
    <img src={src} alt={`${alt} icon`} />
  );
};

const AnatomicHeart = ({ sx }: IconStyle) => (
  <Icon src={anatomic_heart} alt="Anatomic Heart" sx={sx} />
);
const Arrow = ({ sx }: IconStyle) => <Icon src={arrow} alt="Arrow" sx={sx} />;
const Bone = ({ sx }: IconStyle) => <Icon src={bone} alt="Bone" sx={sx} />;
const Brain = ({ sx }: IconStyle) => <Icon src={brain} alt="Brain" sx={sx} />;
const Breadcrumb = ({ sx }: IconStyle) => (
  <Icon src={breadcrumb} alt="Breadcrumb icon" sx={sx} />
);
const Calendar = ({ sx }: IconStyle) => (
  <Icon src={calendar} alt="Calendar" sx={sx} />
);
const Chat = ({ sx }: IconStyle) => <Icon src={chat} alt="Chat" sx={sx} />;
const Close = ({ sx }: IconStyle) => <Icon src={close} alt="Close" sx={sx} />;
const Collapse = ({ sx }: IconStyle) => (
  <Icon src={collapse} alt="Collapse" sx={sx} />
);
const Edit = ({ sx }: IconStyle) => <Icon src={edit} alt="Edit" sx={sx} />;
const Edit1 = ({ sx }: IconStyle) => <Icon src={edit1} alt="Edit1" sx={sx} />;
const Exams = ({ sx }: IconStyle) => <Icon src={exams} alt="Exams" sx={sx} />;
const Eye = ({ sx }: IconStyle) => <Icon src={eye} alt="Eye" sx={sx} />;
const Flag = ({ sx }: IconStyle) => <Icon src={flag} alt="Flag" sx={sx} />;
const Flagged = ({ sx }: IconStyle) => (
  <Icon src={flagged} alt="Flagged" sx={sx} />
);
const Heart = ({ sx }: IconStyle) => <Icon src={heart} alt="Heart" sx={sx} />;
const Hide = ({ sx }: IconStyle) => <Icon src={hide} alt="Hide" sx={sx} />;
const Home = ({ sx }: IconStyle) => <Icon src={home} alt="Home" sx={sx} />;
const Incomplete = ({ sx }: IconStyle) => (
  <Icon src={incomplete} alt="Incomplete" sx={sx} />
);
const Info = ({ sx }: IconStyle) => <Icon src={info} alt="Info" sx={sx} />;
const Library = ({ sx }: IconStyle) => (
  <Icon src={library} alt="Library" sx={sx} />
);
const Logo = ({ sx }: IconStyle) => <Icon src={logo} alt="Logo" sx={sx} />;
const Lungs = ({ sx }: IconStyle) => <Icon src={lungs} alt="Lungs" sx={sx} />;
const Progress = ({ sx }: IconStyle) => (
  <Icon src={progress} alt="Progress" sx={sx} />
);
const ToggleLeft = ({ sx }: IconStyle) => (
  <Icon src={toggleLeft} alt="Toggle Left" sx={sx} />
);
const ToggleRight = ({ sx }: IconStyle) => (
  <Icon src={toggleRight} alt="Toggle Right" sx={sx} />
);
const Recent = ({ sx }: IconStyle) => (
  <Icon src={recent} alt="Recents" sx={sx} />
);
const Save = ({ sx }: IconStyle) => <Icon src={save} alt="Save" sx={sx} />;
const Search = ({ sx }: IconStyle) => (
  <Icon src={search} alt="Search" sx={sx} />
);
const ShortArrow = ({ sx }: IconStyle) => (
  <Icon src={shortArrow} alt="Arrow" sx={sx} />
);
const Skin = ({ sx }: IconStyle) => <Icon src={skin} alt="Skin" sx={sx} />;
const Stats = ({ sx }: IconStyle) => <Icon src={stats} alt="Stats" sx={sx} />;
const Vector = ({ sx }: IconStyle) => <Icon src={vector} alt="Vector" sx={sx} />;
const Question = ({ sx }: IconStyle) => (
  <Icon src={question} alt="Question" sx={sx} />
);
const QuestionUnanswered = ({ sx }: IconStyle) => (
  <Icon src={questionUnanswered} alt="Question unanswered" sx={sx} />
);
const QuestionWrong = ({ sx }: IconStyle) => (
  <Icon src={questionWrong} alt="Question wrong" sx={sx} />
);
const QuestionCorrect = ({ sx }: IconStyle) => (
  <Icon src={questionCorrect} alt="Question correct" sx={sx} />
);
const QuestionCurrent = ({ sx }: IconStyle) => (
  <Icon src={questionCurrent} alt="Question current" sx={sx} />
);
const Quiz = ({ sx }: IconStyle) => <Icon src={quiz} alt="Quiz" sx={sx} />;

Icon.AnatomicHeart = AnatomicHeart;
Icon.Arrow = Arrow;
Icon.Bone = Bone;
Icon.Brain = Brain;
Icon.Breadcrumb = Breadcrumb;
Icon.Calendar = Calendar;
Icon.Chat = Chat;
Icon.Close = Close;
Icon.Collapse = Collapse;
Icon.Edit = Edit;
Icon.Edit1 = Edit1;
Icon.Eye = Eye;
Icon.Exams = Exams;
Icon.Flag = Flag;
Icon.Flagged = Flagged;
Icon.Heart = Heart;
Icon.Hide = Hide;
Icon.Home = Home;
Icon.Incomplete = Incomplete;
Icon.Info = Info;
Icon.Library = Library;
Icon.Logo = Logo;
Icon.Lungs = Lungs;
Icon.Progress = Progress;
Icon.ToggleLeft = ToggleLeft;
Icon.ToggleRight = ToggleRight;
Icon.Recent = Recent;
Icon.Save = Save;
Icon.Search = Search;
Icon.ShortArrow = ShortArrow;
Icon.Skin = Skin;
Icon.Stats = Stats;
Icon.Vector = Vector;
Icon.Question = Question;
Icon.QuestionUnanswered = QuestionUnanswered;
Icon.QuestionWrong = QuestionWrong;
Icon.QuestionCorrect = QuestionCorrect;
Icon.QuestionCurrent = QuestionCurrent;
Icon.Quiz = Quiz;

export default Icon;
