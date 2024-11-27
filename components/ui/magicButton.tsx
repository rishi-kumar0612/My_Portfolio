import React from "react";

/**
 *  UI: border magic from tailwind css btns
 *  Link: https://ui.aceternity.com/components/tailwindcss-buttons
 *
 *  change border radius to rounded-lg
 *  add margin of md:mt-10
 *  remove focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50
 */
const MagicButton = ({
  title,
  icon,
  position,
  handleClick,
  otherClasses,
}: {
  title: string;
  icon: React.ReactNode;
  position: string;
  handleClick?: () => void;
  otherClasses?: string;
}) => {
  return (
    <button
  className={`px-10 py-2 rounded-lg bg-spotlight text-white font-bold transition duration-200 hover:bg-white hover:text-spotlight border-2 border-transparent hover:border-spotlight flex items-center gap-2 ${otherClasses} md:mt-10`}
  onClick={handleClick}
>
  {position === "left" && icon}
  <span>{title}</span>
  {position === "right" && icon}
</button>

  );
};

export default MagicButton;