import { useTranslations } from "next-intl";

const Headline = () => {
  const t = useTranslations("HomePage");
  return (
    <div className="flex flex-col items-center justify-center gap-2 px-6 lg:gap-6">
      <h1 className="text-primary text-center text-2xl font-semibold sm:text-4xl lg:text-5xl">
        {t("headline")}
      </h1>
      <h2 className="text-primary text-balance text-center sm:text-xl lg:text-2xl">
        {t("subHeadline")}
      </h2>
    </div>
  );
};

export default Headline;
