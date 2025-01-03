"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useTranslations } from "next-intl";

const AnimatedNumber = () => {
  const t = useTranslations("HomePage");

  const [count, setCount] = useState<number>(0);
  const ref = useRef(null)
  const isInView = useInView(ref)

  useEffect(() => {
    let start = 0;
    const targetNumber = 450;
    const duration = 3.5;

    const animate = () => {
      start += duration;
      if (start < targetNumber && isInView) {
        setCount(Math.round(start));
        requestAnimationFrame(animate);
      } else {
        setCount(targetNumber);
      }
    };

    animate();
  }, [isInView]);

  return (
    <div className="flex flex-col items-center text-[#0066b2] border-2 border-[#0066b2] p-3 rounded-xl gap-3"
    ref={ref}>
      <h1 className="text-xl font-bold lg:text-2xl">{t("successBmt")}</h1>
      <motion.span
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        className="text-3xl font-bold"
        dir="ltr"
      >
        + {count}
      </motion.span>
    </div>
  );
};

export default AnimatedNumber;
