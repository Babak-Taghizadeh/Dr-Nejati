import { contactMethods } from "@/lib/constants";
import { useTranslations } from "next-intl";
import { buttonVariants } from "./ui/button";
import { cn } from "@/lib/utils";
import MotionContainer from "./MotionContainer";

const ContactInfo = () => {
  const t = useTranslations("ContactPage");

  return (
    <>
      <ul className="flex w-full flex-col justify-center gap-4 sm:flex-row sm:flex-wrap">
        {contactMethods.map((item, index) => {
          const delay = 0.7 + index * 0.2;
          return (
            <MotionContainer key={item.text} delay={delay} duration={0.3} y={-50}>
              <li>
                <a
                  href={item.link}
                  target="_blank"
                  className={cn(
                    buttonVariants({ variant: "socialBtn" }),
                    item.text == "instagram" &&
                      "bg-gradient-to-r from-[#833AB4] via-[#C13584] to-[#F56040]",
                    item.text == "whatsapp" &&
                      "bg-gradient-to-b from-[#25D366] via-[#075E54] to-[#25D366]",
                    item.text == "0930-287-1635" &&
                      "bg-gradient-to-r from-indigo-500 to-violet-500",
                    "flex gap-2 text-base",
                  )}
                >
                  {<item.icon size={20} />}
                  {t(item.text)}
                </a>
              </li>
            </MotionContainer>
          );
        })}
        <li className="flex justify-between">
          <a href=""></a>
        </li>
      </ul>
    </>
  );
};

export default ContactInfo;
