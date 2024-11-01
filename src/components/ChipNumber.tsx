const ChipNumber = ({ number }: { number: number }) => {
  return (
    <div className="bg-white rounded-md font-semibold p-0.5 shadow-md border-zinc-100 border" style={{fontSize: '10px', lineHeight: '12px'}}>
      {number}
    </div>
  );
};

export default ChipNumber;
