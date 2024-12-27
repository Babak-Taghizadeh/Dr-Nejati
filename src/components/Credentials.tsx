import { backGround } from "@/lib/constants";
import { useTranslations } from "next-intl";

const Credentials = () => {
  const t = useTranslations("AboutPage");

  return (
    <>
      <h1 className="text-xl self-start font-extrabold lg:text-4xl">{t("title")}</h1>
      <ul className="list-disc space-y-4 xl:space-y-8">
        {backGround.map((item, index) => {
          return <li className="text-base text-pretty font-medium xl:text-lg 2xl:text-xl" key={index}>{t(item)}</li>;
        })}
      </ul>
    </>
  );
};

export default Credentials;
