"use client";
import Image from "next/image";
import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useOutsideClick } from "@/hooks/use-outside-click";
import { cards } from "@/data/projects";

export interface CardEx {
  description: string;
  title: string;
  src: string;
  ctaText: string;
  ctaLink: string;
  content: () => JSX.Element;
  skills: string[];
}

export function ExpandableCardDemo({
  searchTerm,
  showTop6,
}: {
  searchTerm: string;
  showTop6: boolean;
}) {
  const [active, setActive] = useState<CardEx | null>(null);
  const ref = useRef<HTMLDivElement>(null);
  const id = useId();

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActive(null);
      }
    }

    if (active) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  useOutsideClick(ref, () => setActive(null));

  const filteredCards = cards.filter((card) =>
    card.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    card.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
    card.skills.some((skill) =>
      skill.toLowerCase().includes(searchTerm.toLowerCase())
    )
  );
  

  // Add logic for "Top 6 Projects" or "See All Projects"
  const displayedCards = showTop6 ? filteredCards.slice(0, 6) : filteredCards;

  return (
    <>
      <AnimatePresence>
        {active ? (
          <div className="fixed inset-0 grid place-items-center z-[100]">
            {/* Expanded Card */}
            <motion.div
              ref={ref}
              className="w-full max-w-[500px] max-h-[90vh] flex flex-col bg-white dark:bg-neutral-900 sm:rounded-3xl overflow-hidden"
              initial={{
                opacity: 0,
                scale: 0.9,
                y: 20,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                scale: 0.95,
                y: 10,
              }}
              transition={{
                duration: 0.4,
                ease: "easeInOut",
              }}
            >
              <div className="overflow-auto p-4">
                {/* Expanded Content */}
                <div className="w-full h-48 relative mb-4">
                  <Image
                    src={active.src}
                    alt={active.title}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-lg"
                  />
                </div>
                <h3 className="font-bold text-neutral-700 dark:text-white mb-2">
                  {active.title}
                </h3>
                <p className="text-neutral-600 dark:text-white mb-4">
                  {active.description}
                </p>
                <div>
                  <h4 className="font-semibold">Details:</h4>
                  <div className="mt-2">{active.content()}</div>
                </div>
                <div>
                  <h4 className="font-semibold mt-4">Skills:</h4>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {active.skills.map((skill, index) => (
                      <span
                        key={index}
                        className="bg-gray-200 text-gray-800 text-xs font-medium px-2 py-1 rounded"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="mt-6">
                  <a
                    href={active.ctaLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-spotlight text-white font-bold rounded-full hover:bg-white hover:text-spotlight border-2 border-spotlight transition"
                  >
                    View on GitHub
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        ) : null}
      </AnimatePresence>

      {/* Wrapper to centralize and align cards */}
      <div className="max-w-7xl mx-auto px-5 lg:px-6">
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedCards.map((card, index) => (
            <motion.div
              key={`card-${index}`}
              onClick={() => setActive(card)}
              className="p-4 flex flex-col items-center justify-between bg-white dark:bg-neutral-800 hover:bg-neutral-50 dark:hover:bg-spotlight rounded-xl shadow-md cursor-pointer transition transform hover:scale-105"
            >
              <div className="flex flex-col items-center">
                {/* Image */}
                <Image
                  width={100}
                  height={100}
                  src={card.src}
                  alt={card.title}
                  className="h-24 w-24 md:h-20 md:w-20 rounded-lg object-cover"
                />
                {/* Title */}
                <h3 className="font-medium text-neutral-800 dark:text-white text-center">
                  {card.title}
                </h3>
                {/* Description */}
                <p className="text-neutral-600 dark:text-white text-center mt-2">
                  {card.description}
                </p>
              </div>
              {/* Button */}
              <button className="px-4 py-2 text-sm rounded-full font-bold bg-gray-100 hover:bg-spotlight hover:text-white text-black mt-4">
                {card.ctaText}
              </button>
            </motion.div>
          ))}
        </ul>
      </div>
    </>
  );
}

export const CloseIcon = () => {
  return (
    <motion.svg
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.05 } }}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4 text-black"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M18 6l-12 12" />
      <path d="M6 6l12 12" />
    </motion.svg>
  );
};
