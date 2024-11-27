"use client";
import { useEffect } from "react";
import { motion, stagger, useAnimate } from "framer-motion";
import { cn } from "@/lib/utils";

export const TextGenerateEffect = ({
  words,
  className,
  filter = true,
  duration = 0.7,
  highlightPhrases = [],
}: {
  words: string;
  className?: string;
  filter?: boolean;
  duration?: number;
  highlightPhrases?: string[];
}) => {
  const [scope, animate] = useAnimate();

  useEffect(() => {
    animate(
      "span",
      {
        opacity: 1,
        filter: filter ? "blur(0px)" : "none",
      },
      {
        duration: duration || 1,
        delay: stagger(0.2),
      }
    );
  }, [scope.current]);

  const renderWords = () => {
    // Replace highlight phrases with markers
    const highlightedText = highlightPhrases.reduce((acc, phrase) => {
      const regex = new RegExp(`(${phrase})`, "gi");
      return acc.replace(regex, `@@$1@@`);
    }, words);

    // Split text into segments (normal and highlighted parts)
    const segments = highlightedText.split(/@@/);

    // Render segments with animations
    return (
      <motion.div ref={scope}>
        {segments.map((segment, idx) => {
          const isHighlighted = highlightPhrases.some((phrase) => segment === phrase);

          return (
            <motion.span
              key={segment + idx}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: 0.5,
                delay: idx * 0.2, // Staggered animation
              }}
              className={`${
                isHighlighted
                  ? "text-spotlight font-bold" // Style for highlighted phrases
                  : "dark:text-white text-black"
              } opacity-0`}
            >
              {segment}
            </motion.span>
          );
        })}
      </motion.div>
    );
  };

  return (
    <div className={cn("font-bold", className)}>
      <motion.div
        ref={scope}
        initial="hidden"
        animate="visible"
        className="dark:text-white text-black leading-snug tracking-wide"
      >
        {renderWords()}
      </motion.div>
    </div>
  );
};
