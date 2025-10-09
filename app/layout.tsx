import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import DonateButton from "../components/DonateButton";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Nunito_Sans } from "next/font/google";


const nunito = Nunito_Sans({ subsets: ["latin"], display: "swap" });


export const metadata = { title: "NoOneLeft", description: "Small Action, Big Change" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
        <DonateButton />
      </body>
    </html>
  );
}
