import HeroContent from "@/components/HeroContent";
import HeroImage from "@/components/HeroImage";
import BookAppBtn from "@/components/BookAppBtn";
import MotionContainer from "@/components/MotionContainer";
import Headline from "@/components/Headline";
import { unstable_setRequestLocale } from "next-intl/server";
import AnimatedNumber from "@/components/AnimateNumber";

export default function Home({
  params: { locale },
}: Readonly<{ params: { locale: string } }>) {
  unstable_setRequestLocale(locale);
  return (
    <div className="mb-8 flex min-h-dvh flex-col items-center gap-6 px-5 pt-24 lg:justify-evenly lg:gap-12 lg:pt-32">
      <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-evenly lg:px-32 xl:px-48">
        <MotionContainer
          className="flex flex-col gap-4 px-3 lg:gap-10"
          y={-100}
          delay={0.6}
          duration={0.4}
        >
          <HeroContent />
          <BookAppBtn />
        </MotionContainer>
        <MotionContainer
          className="shadow-2xl shadow-sky-200 md:w-3/4 lg:w-3/4 xl:w-2/3 2xl:w-2/5"
          x={100}
          delay={0.6}
          duration={0.4}
        >
          <HeroImage />
        </MotionContainer>
      </div>
      <MotionContainer
        className="flex flex-col items-center gap-6 px-3 lg:gap-12"
        x={50}
        y={50}
        delay={0.8}
        duration={0.7}
      >
        <Headline />
        <AnimatedNumber />
      </MotionContainer>
    </div>
  );
}
