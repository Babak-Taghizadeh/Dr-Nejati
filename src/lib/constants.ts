import en from "../../public/en.png";
import tr from "../../public/tr.png";
import ir from "../../public/ir.png";
import { BsInstagram } from "react-icons/bs";
import { BsWhatsapp } from "react-icons/bs";
import { BsTelephoneOutbound } from "react-icons/bs";


export const langSelect = [
  { name: "فارسی", icon: ir, link: "fa" },
  { name: "English", icon: en, link: "en" },
  { name: "Türkçe", icon: tr, link: "tr" },
];

export const navBar = [
  { name: "home", link: "/" },
  { name: "aboutMe", link: "/about" },
  { name: "contact", link: "/contact" }
];

export const backGround = ["inf1", "inf2", "inf3", "inf4", "inf5", "inf6"]

export const contactMethods = [
  {text: "0930-287-1635",icon: BsTelephoneOutbound, link: "tel:0930-287-1635"},
  {text: "instagram",icon: BsInstagram, link: "https://www.instagram.com/dr.babak.nejati"},
  {text: "whatsapp",icon: BsWhatsapp, link: "https://wa.me/989302871635"},
]

export const bookAppUrl =
  "https://www.paziresh24.com/booking/%D8%AF%DA%A9%D8%AA%D8%B1-%D8%A8%D8%A7%D8%A8%DA%A9-%D9%86%D8%AC%D8%A7%D8%AA%DB%8C/?centerId=6236bf78-c6e1-424a-a68c-42cd6ccb604a&serviceId=90b68286-98e8-4fee-84aa-e9a174800df2&cityName=tabriz&providerId=1206258&userId=11244026";
