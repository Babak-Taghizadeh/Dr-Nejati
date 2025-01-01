import { useTranslations } from "next-intl";

const ExpSlider = () => {
  const t = useTranslations("HomePage");

// ADD FOUR BOXES 2 GRID
  return (
    <div className="flex flex-col justify-center overflow-hidden">
      <span className="flex flex-shrink-0 justify-center h-fit overflow-hidden">
        <ul className="flex gap-2 flex-shrink-0 justify-end text-xl font-bold sm:text-3xl">
          <li className="h-fit p-1 text-[#0039a6]">{t("exp")}</li>
        </ul>
      </span>
    </div>
  );
}

export default ExpSlider;
