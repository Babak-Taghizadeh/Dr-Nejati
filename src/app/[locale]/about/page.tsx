import Image from "next/image";
import StandAvatar from "../../../../public/3.png";
import MotionContainer from "@/components/MotionContainer";
import Credentials from "@/components/Credentials";
import AnimatedNumber from "@/components/AnimateNumber";

const AboutPage = () => {
  return (
    <div className="flex min-h-dvh flex-col items-center gap-12 pt-24 lg:justify-evenly lg:gap-14 lg:pt-32">
      <div className="flex flex-col gap-12 items-center lg:flex-row lg:items-center lg:justify-evenly lg:px-32 xl:px-48 lg:gap-20">
        <MotionContainer
          className="w-3/5 shadow-2xl shadow-sky-200 md:w-2/5 2xl:w-[28%]"
          y={0}
          x={100}
        >
          <Image className="rounded-xl" src={StandAvatar} alt="StandAvatar" />
        </MotionContainer>
        <MotionContainer
          className="flex w-fit flex-col items-center gap-6 px-12 lg:px-0 lg:gap-10"
          y={0}
          x={-100}
        >
          <Credentials />
        </MotionContainer>
      </div>
      <AnimatedNumber />
    </div>
  );
};

export default AboutPage;
