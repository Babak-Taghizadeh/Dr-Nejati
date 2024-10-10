import { useTranslations } from "next-intl";
import ExpSlider from "./ExpSlider";

const HeroContent = () => {
  const t = useTranslations("HomePage");
  return (
    <>
      <h1 className="text-primary text-[2.9rem] text-nowrap font-black sm:text-7xl lg:text-5xl xl:text-6xl 2xl:text-7xl">
        {t("name")}
      </h1>
      <ExpSlider />
    </>
  );
};
export default HeroContent;
