import Footer from "../components/Pages/Footer.jsx";
import Navbar from "../components/Pages/navbar.jsx";
import "./globals.css";

export const metadata = {
  title: "SHOP.CO | Find Clothes That Match Your Style",
  description:
    "Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
