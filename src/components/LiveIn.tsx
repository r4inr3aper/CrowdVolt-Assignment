"use client";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { useRef, useEffect, useState} from "react"

const childVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};


const parentVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};



const LiveIn: React.FC = () => {
  const parentRef = useRef<HTMLDivElement | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = parentRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setInView(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.15 } 
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const texts = [
    {
      content: "LIVE IN",
      pos: "top-[1rem] sm:top-[1.5rem] left-[1rem] sm:left-[2rem] md:left-[4rem]",
    },
    {
      content: "NEW YORK",
      pos: "top-[1rem] sm:top-[1.5rem] right-[1rem] sm:right-[2rem] md:right-[4rem]",
    },
    {
      content: "CHICAGO",
      pos: "top-1/2 -translate-y-1/2 left-[1rem] sm:left-[2rem] md:left-[4rem]",
    },
    {
      content: "MIAMI",
      pos: "top-1/2 -translate-y-1/2 right-[1rem] sm:right-[2rem] md:right-[4rem]",
    },
    {
      content: "LOS ANGELES",
      pos: "bottom-[1.25rem] sm:bottom-[2rem] right-[1rem] sm:right-[2rem] md:right-[4rem]",
    },
  ];

  return (
    <motion.div
      ref={parentRef}
      className="relative w-full overflow-hidden p-3 pb-5 text-white"
      variants={parentVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
    >
      <video
        src="video.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-auto block max-h-[80vh] md:max-h-[100vh] z-0 pointer-events-none"
      />

      <div className="absolute inset-0 z-10 text-[1.5rem] sm:text-[2.5rem] md:text-[4rem] lg:text-[6rem] xl:text-[7rem]">
        {texts.map(({ content, pos }, i) => (
          <div
            key={i}
            className={`absolute ${pos} overflow-hidden z-10`}
            style={{ pointerEvents: "none" }}
          >
            <motion.h1
              variants={childVariants}
              className="font-bold drop-shadow-lg will-change-transform"
            >
              {content}
            </motion.h1>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default LiveIn;
