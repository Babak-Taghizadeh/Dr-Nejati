"use client"

import avatar from "../../public/2.png";
import Image from "next/image";

const HeroImage = () => {
  return (
    <>
      <Image
        className="transition-opacity opacity-0 duration-[3s] rounded-xl"
        src={avatar}
        alt="babak nejati"
        loading="eager"
        onLoadingComplete={(img) => img.classList.remove("opacity-0")}
        priority
      />
      </>
  );
};
export default HeroImage;
