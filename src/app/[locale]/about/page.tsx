import MotionContainer from "@/components/MotionContainer";
import Credentials from "@/components/Credentials";
import { unstable_setRequestLocale } from "next-intl/server";
import AboutImage from "@/components/AboutImage";

const AboutPage = ({
  params: { locale },
}: Readonly<{ params: { locale: string } }>) => {
  unstable_setRequestLocale(locale);
  return (
    <div className="flex min-h-dvh flex-col items-center gap-12 pt-24 lg:mb-0 lg:justify-evenly lg:gap-14 lg:pt-32">
      <div 
      // className="grid grid-cols-2 lg:px-32 xl:px-48"
      className="flex flex-col items-center gap-12 lg:flex-row lg:justify-evenly lg:gap-20 lg:px-32 xl:px-48"
      >
        <MotionContainer
          className="w-3/5 shadow-2xl shadow-sky-200 md:w-2/5 lg:w-4/5 xl:w-3/5 2xl:w-[32%]"
          x={100}
        >
          <AboutImage />
        </MotionContainer>
        <MotionContainer
          className="flex w-fit flex-col items-center gap-6 px-12 lg:gap-10 lg:px-0"
          y={-100}
        >
          <Credentials />
        </MotionContainer>
      </div>
    </div>
  );
};

export default AboutPage;
