import { Inter } from "@next/font/google";

export const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const CustomFont = `${inter.variable}`;

export default CustomFont;
