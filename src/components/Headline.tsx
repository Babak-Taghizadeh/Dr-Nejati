import { useTranslations } from "next-intl"

const Headline = () => {
    const t = useTranslations("HomePage")
  return (
      <div className="flex flex-col mb-8 items-center justify-center px-6 gap-4 lg:gap-6">
          <h1 className="text-2xl font-semibold text-primary sm:text-4xl lg:text-6xl">{t("headline")}</h1>
          <h2 className="text-center text-balance font-semibold text-primary sm:text-xl lg:text-2xl">{t("subHeadline")}</h2>
    </div>
  )
}

export default Headline