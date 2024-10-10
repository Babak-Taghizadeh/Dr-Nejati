import type { Metadata } from "next";
import { Scheherazade_New, Roboto } from "next/font/google";
import "../globals.css";
import Navbar from "@/components/Navbar";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";

const scheherazade = Scheherazade_New({
  weight: "700",
  subsets: ["latin"],
  display: 'swap'
});

const roboto = Roboto({
  weight: "500",
  subsets: ["latin"],
  display: 'swap'
});

export const metadata: Metadata = {
  title: 'Dr.Nejati',
  description: 'Dr.Nejati official website',
};

export default async function RootLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const messages = await getMessages();

  const isRTL = locale === "fa";
  const bodyClassName = isRTL ? scheherazade.className : roboto.className;

  return (
    <html lang={locale} dir={isRTL ? "rtl" : "ltr"}>
      <body className={bodyClassName}>
        <NextIntlClientProvider messages={messages}>
          <main className="min-h-dvh bg-[linear-gradient(#4B9CD3,#fff)]">
            <Navbar />
            {children}
          </main>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
