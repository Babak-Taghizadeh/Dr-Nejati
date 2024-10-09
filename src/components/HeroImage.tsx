import avatar from "../../public/2.png";
import Image from "next/image";

const HeroImage = () => {
  return (
    <>
      <Image
        className="rounded-xl"
        src={avatar}
        alt="babak nejati"
        loading="eager"
        priority
      />
      </>
  );
};
export default HeroImage;
