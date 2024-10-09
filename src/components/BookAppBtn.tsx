import Link from "next/link";
import {useTranslations} from 'next-intl';
import { CalendarCheck } from "lucide-react";
import { bookAppUrl } from "@/lib/constants";

const BookAppBtn = () => {
  const t = useTranslations('HomePage');

  return (
    <Link href={bookAppUrl} target="blank" className="animate-bounce bg-[#002244] text-white flex justify-center items-center gap-2 w-fit h-fit p-3 rounded-xl">
      <span className="text-2xl max-sm:text-xl">{t("bookBtn")}</span>
      <CalendarCheck color="#fff" size={20} />
    </Link>
  );
};

export default BookAppBtn;
