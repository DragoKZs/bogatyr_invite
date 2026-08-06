import "./globals.css";
import { Manrope } from "next/font/google";

const manrope = Manrope({
  subsets: ["latin", "cyrillic"],
});

export const metadata = {
  title: "Богатырь Комир",
  description: "Форум сотрудников",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <body className={manrope.className}>
        {children}
      </body>
    </html>
  );
}