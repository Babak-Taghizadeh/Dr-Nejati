import { backGround } from "@/lib/constants";
import { useTranslations } from "next-intl";

const Credentials = () => {
  const t = useTranslations("AboutPage");

  return (
    <>
      <h1 className="text-2xl self-start font-bold">{t("title")}</h1>
      <ul className="list-disc space-y-4 xl:space-y-8">
        {backGround.map((item, index) => {
          return <li className="text-xl text-pretty font-medium" key={index}>{t(item)}</li>;
        })}
      </ul>
    </>
  );
};

export default Credentials;
