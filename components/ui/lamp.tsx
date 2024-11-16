"use client";
import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const LampContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-bground w-full rounded-md pt-10 z-0",
        className
      )}
    >
      <div className="relative flex w-full flex-1 scale-y-125 items-center justify-center isolate z-0">
        <motion.div
          initial={{ opacity: 0.1, width: "10rem" }}
          whileInView={{
            opacity: 0.7,
            width: "30rem",
          }}
          transition={{
            delay: 0.2,
            duration: 0.7,
            ease: "easeInOut",
          }}
          className="absolute inset-auto right-1/2 h-56 overflow-visible w-[15rem] sm:w-[20rem] md:w-[25rem] lg:w-[30rem] xl:w-[35rem] 2xl:w-[40rem] bg-gradient-conic from-spotlight via-transparent to-transparent text-white [--conic-position:from_70deg_at_center_top]"
        >
          <div className="absolute w-full left-0 bg-bground h-40 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]" />
          <div className="absolute w-40 h-full left-0 bg-bground bottom-0 z-20 [mask-image:linear-gradient(to_right,white,transparent)]" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0.1, width: "10rem" }}
          whileInView={{
            opacity: 0.7,
            width: "30rem",
          }}
          transition={{
            delay: 0.2,
            duration: 0.7,
            ease: "easeInOut",
          }}
          className="absolute inset-auto left-1/2 h-56 w-[15rem] sm:w-[20rem] md:w-[25rem] lg:w-[30rem] xl:w-[35rem] 2xl:w-[40rem] bg-gradient-conic from-transparent via-transparent to-spotlight text-white [--conic-position:from_290deg_at_center_top]"
        >
          <div className="absolute w-40 h-full right-0 bg-bground bottom-0 z-20 [mask-image:linear-gradient(to_left,white,transparent)]" />
          <div className="absolute w-full right-0 bg-bground h-40 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]" />
        </motion.div>
        <div className="absolute top-1/2 h-48 w-full translate-y-12 scale-x-150 bg-bground blur-2xl"></div>
        <div className="absolute top-1/2 z-50 h-48 w-full bg-transparent opacity-10 backdrop-blur-md"></div>
        <div className="absolute inset-auto z-50 h-36 w-[14rem] sm:w-[18rem] md:w-[22rem] lg:w-[26rem] xl:w-[30rem] 2xl:w-[34rem] -translate-y-1/2 rounded-full bg-spotlight opacity-50 blur-3xl"></div>
        <motion.div
          initial={{ width: "8rem" }}
          whileInView={{
            width: "16rem",
          }}
          transition={{
            delay: 0.2,
            duration: 0.7,
            ease: "easeInOut",
          }}
          className="absolute inset-auto z-30 h-36 w-40 sm:w-48 md:w-56 lg:w-64 xl:w-72 2xl:w-80 -translate-y-[6rem] rounded-full bg-spotlight blur-2xl"
        ></motion.div>
        <motion.div
          initial={{ width: "15rem" }}
          whileInView={{
            width: "30rem",
          }}
          transition={{
            delay: 0.2,
            duration: 0.7,
            ease: "easeInOut",
          }}
          className="absolute inset-auto z-50 h-0.5 w-[15rem] sm:w-[20rem] md:w-[25rem] lg:w-[30rem] xl:w-[35rem] 2xl:w-[40rem] -translate-y-[7rem] bg-spotlight"
        ></motion.div>

        <div className="absolute inset-auto z-40 h-44 w-full -translate-y-[12.5rem] bg-bground"></div>
      </div>

      <div className="relative z-50 flex -translate-y-80 flex-col items-center px-5">
        {children}
      </div>
    </div>
  );
};
