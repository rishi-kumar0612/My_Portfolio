const MagicButton = ({
  title,
  icon,
  position,
  handleClick,
  type = "default",
  otherClasses,
}: {
  title: string;
  icon: React.ReactNode;
  position: string;
  handleClick?: () => void;
  type?: "default" | "download";
  otherClasses?: string;
}) => {
  return (
    <button
      className={`px-10 py-2 rounded-lg bg-spotlight text-white font-bold transition duration-200 hover:bg-white hover:text-spotlight border-2 border-transparent hover:border-spotlight flex items-center gap-2 ${otherClasses} ${
        type === "download" ? "cursor-pointer" : ""
      } md:mt-10`}
      onClick={handleClick}
    >
      {position === "left" && icon}
      <span>{title}</span>
      {position === "right" && icon}
    </button>
  );
};

export default MagicButton;