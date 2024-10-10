import HeroContent from "@/components/HeroContent";
import HeroImage from "@/components/HeroImage";
import BookAppBtn from "@/components/BookAppBtn";
import MotionContainer from "@/components/MotionContainer";
import Headline from "@/components/Headline";
import { unstable_setRequestLocale } from "next-intl/server";

export default function Home({
  params: { locale },
}: Readonly<{ params: { locale: string } }>) {
  unstable_setRequestLocale(locale);
  return (
    <div className="flex min-h-dvh flex-col items-center gap-7 px-5 pt-24 lg:justify-evenly lg:gap-14 lg:pt-32">
      <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-evenly lg:px-32 xl:px-48">
        <MotionContainer
          className="flex flex-col gap-4 px-3 lg:gap-10 lg:self-start"
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
      <MotionContainer x={50} y={50} delay={0.8} duration={0.7}>
        <Headline />
      </MotionContainer>
    </div>
  );
}
