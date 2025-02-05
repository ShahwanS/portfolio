import "@/app/globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Seif Shahwan | Full Stack Web Developer",
  description:
    "Innovative Full Stack Web Developer with a passion for creating efficient, user-friendly applications. Explore my portfolio to see my latest projects and technical skills.",
  keywords:
    "Seif Shahwan, Full Stack Developer, Web Development, Portfolio, Projects",

  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://seifshahwan.com",
    title: "Seif Shahwan | Full Stack Web Developer",
    description:
      "Innovative Full Stack Web Developer with a passion for creating efficient, user-friendly applications. Explore my portfolio to see my latest projects and technical skills.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Seif Shahwan | Full Stack Web Developer",
    description:
      "Innovative Full Stack Web Developer with a passion for creating efficient, user-friendly applications. Explore my portfolio to see my latest projects and technical skills.",
  },
};

export default async function RootLayout(props: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const params = await props.params;

  const { locale } = params;

  const { children } = props;

  const messages = await getMessages();

  return (
    <html lang={locale} suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <NextIntlClientProvider locale={locale} messages={messages}>
            {children}
          </NextIntlClientProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
