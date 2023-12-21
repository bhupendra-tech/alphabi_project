import { Inter, Karla, Open_Sans } from "next/font/google";
import "@/app/ui/global.css";

const openSans = Open_Sans({ subsets: ["latin"] });
export const metadata = {
  title: "AlphaBI Project",
  description: "crafted with love",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={openSans.className}>{children}</body>
    </html>
  );
}
