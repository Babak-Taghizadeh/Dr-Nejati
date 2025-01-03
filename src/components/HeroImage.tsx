"use client"

import avatar from "../../public/Dr-Nejati.png";
import Image from "next/image";



const HeroImage = () => {
  // image square, top left no readius
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
