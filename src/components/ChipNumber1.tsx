const ChipNumber1 = ({ number }: { number: number }) => {
  return (
    <div className="bg-white rounded-md font-semibold p-0.5 shadow-md border-zinc-100 border" style={{fontSize: '12px', lineHeight: '14px'}}>
      {number}
    </div>
  );
};

export default ChipNumber1;
