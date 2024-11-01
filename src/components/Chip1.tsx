const Chip1 = ({ icon, label }: { icon: JSX.Element; label: string }) => {
    return (
      <div className="bg-zinc-100 flex justify-start items-center gap-1 py-1 px-2 xl:px-2 rounded-full text-xs font-semibold border-2 border-zinc-200">
        {icon}
        <div className="truncate text-xs">{label}</div>
      </div>
    );
  };
  
  export default Chip1;
  