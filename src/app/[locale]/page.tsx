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
    <div className="mb-8 flex min-h-dvh flex-col items-center gap-6 px-5 pt-20 lg:justify-evenly lg:gap-12 lg:pt-32">
      <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-evenly lg:px-32 xl:px-48">
        <MotionContainer
          className="flex flex-col items-start self-center px-3 md:gap-4"
          y={-100}
          delay={0.6}
          duration={0.4}
        >
          <HeroContent />
          <section className="grid grid-cols-2 gap-4 w-fit">
          <AnimatedNumber />
          <AnimatedNumber />
          <AnimatedNumber />
          <AnimatedNumber />
          </section>
          <BookAppBtn />
        </MotionContainer>
        <MotionContainer
          className="shadow-2xl md:w-3/4 lg:w-3/4 xl:w-2/3 2xl:w-2/5"
          x={100}
          delay={0.6}
          duration={0.4}
        >
          <HeroImage />
        </MotionContainer>
      </div>
      {/* can be gradient  */}
      <MotionContainer
        className="flex w-3/4 py-12 text-white rounded-2xl bg-[linear-gradient(#101061,#002244)] flex-col items-center gap-6 px-3 lg:gap-12"
        x={50}
        y={50}
        delay={0.8}
        duration={0.7}
      >
        <Headline />
      </MotionContainer>
    </div>
  );
}
