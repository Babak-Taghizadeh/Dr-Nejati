"use client";

import Image from "next/image";
import StandAvatar from "../../public/3.png";

const AboutImage = () => {
  return (
    <>
      <Image
        className="rounded-xl opacity-0 transition-opacity duration-[3s]"
        src={StandAvatar}
        alt="StandAvatar"
        onLoadingComplete={(img) => img.classList.remove("opacity-0")}
        priority
      />
    </>
  );
};
export default AboutImage;
