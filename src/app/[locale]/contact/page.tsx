import MotionContainer from "@/components/MotionContainer";
import ContactInfo from "@/components/ContactInfo";
import AddressText from "@/components/AddressText";
import dynamic from "next/dynamic";

const DynamicMap = dynamic(() => import("@/components/NeshanMap"), {
  ssr: false
});

const ContactPage = () => {
  return (
    <div className="flex min-h-dvh w-full flex-col items-center gap-4 px-6 pt-24">
      <MotionContainer y={0} x={100}>
        <AddressText />
      </MotionContainer>
      <MotionContainer className="w-full rounded-md p-5 lg:w-3/5" y={0} x={-100}>
        <DynamicMap />
      </MotionContainer>
      <MotionContainer y={0} x={100}>
        <ContactInfo />
      </MotionContainer>
    </div>
  );
};

export default ContactPage;
