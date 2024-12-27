import type { Metadata } from "next";
import { Almarai, Roboto } from "next/font/google";
import "../globals.css";
import Navbar from "@/components/Navbar";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, getTranslations } from "next-intl/server";
import { routing } from "@/i18n/routing";
import { unstable_setRequestLocale } from "next-intl/server";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

const rubik = Almarai({
  weight: ["700","800"],
  subsets: ["arabic"],
  display: "swap",
});

const roboto = Roboto({
  weight: ["700", "900"],
  subsets: ["latin"],
  display: "swap",
});

export async function generateMetadata({params: {locale}}: {params: {locale : string}}) {
  const t = await getTranslations({locale, namespace: 'MetaData'});
 
  return {
    title: t('title')
  };
}

export default async function RootLayout({
  children,
  params: { locale = "fa" },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  unstable_setRequestLocale(locale);
  const messages = await getMessages();

  const isRTL = locale === "fa";
  const bodyClassName = isRTL ? rubik.className : roboto.className;

  return (
    <html lang={locale} dir={isRTL ? "rtl" : "ltr"}>
      <body className={bodyClassName}>
        <NextIntlClientProvider messages={messages}>
            <Navbar />
          <main className="min-h-dvh bg-[linear-gradient(#4B9CD3,#fff)]">
            {children}
          </main>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
