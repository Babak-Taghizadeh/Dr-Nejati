import {useTranslations} from 'next-intl';
import ExpSlider from "./ExpSlider";

const HeroContent = () => {
  const t = useTranslations('HomePage');
  return (
    <>
      <h1 className="text-6xl font-semibold text-primary leading-[1.1] sm:text-7xl sm:leading-[1.2] xl:text-8xl xl:leading-[1.2] ">
        {t('firstName')} <br /> {t('sureName')}
      </h1>
      <ExpSlider />
    </>
  );
};
export default HeroContent;
