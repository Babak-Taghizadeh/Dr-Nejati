import { langSelect } from "@/lib/constants";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import Image from "next/image";

const LangBtn = () => {
  const router = useRouter();
  const pathname = usePathname();


  const handleChange = (locale: string) => {
    const newPath = `/${locale}${pathname.substring(3)}`;
    router.push(newPath);
  };

  return (
    <Select onValueChange={handleChange} defaultValue={pathname.split('/')[1]}>
      <SelectTrigger className="w-fit p-0 gap-2 lg:text-base">
        <SelectValue placeholder={pathname.split('/')[1]} />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Language</SelectLabel>
          {langSelect.map((item) => {
            return (
              <SelectItem key={item.name} value={item.link}>
                <div className="flex gap-2">
                <Image
                  src={item.icon}
                  alt={item.name}
                  width={20}
                  priority
                />
                <h1 className="font-semibold">
                {item.name}
                  </h1>
                  </div>
              </SelectItem>
            );
          })}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};
export default LangBtn;
