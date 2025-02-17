import Footer from "../components/Pages/Footer.jsx";
import Navbar from "../components/Pages/navbar.jsx";
import "./globals.css";
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
