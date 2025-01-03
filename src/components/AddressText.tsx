import { useTranslations } from "next-intl";
import { MapPin } from "lucide-react";

const AddressText = () => {
  const t = useTranslations("ContactPage");
  return (
    <div className="flex w-fit gap-2 lg:items-center">
      <MapPin className="shrink-0" size={20} />
      <h1 className="animate-pulse text-wrap font-medium lg:text-xl">
        {t("address")}
      </h1>
    </div>
  );
};

export default AddressText;
