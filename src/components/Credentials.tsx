import { backGround } from "@/lib/constants";
import { useTranslations } from "next-intl";

const Credentials = () => {
  const t = useTranslations("AboutPage");

  return (
    <>
      <h1 className="self-start text-xl font-extrabold lg:text-5xl">
        {t("title")}
      </h1>
      <ul className="list-disc space-y-4 xl:space-y-8">
        {backGround.map((item, index) => {
          return (
            <li key={index}>
              <span className="text-pretty text-base font-normal xl:text-lg 2xl:text-xl">
                {t(item)}
              </span>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Credentials;
