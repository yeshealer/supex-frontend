export default interface PopupT {
  title: string;
  description: string;
  primaryButtonLabel: string;
  accentColor: "red" | "black";
  onClick: () => void;
}
