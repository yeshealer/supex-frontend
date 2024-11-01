const QuestionSection = ({
  title,
  children,
}: {
  title: string;
  children: JSX.Element[] | JSX.Element;
}) => {
  return (
    <div className="mt-5">
      <h3 className="text-lg mb-2">{title}</h3>
      <div className="flex flex-col gap-3">{children}</div>
    </div>
  );
};

export default QuestionSection;
