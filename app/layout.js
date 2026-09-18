import { GoogleTagManager } from '@next/third-parties/google';
import "./globals.css";
import Footer from "@/components/Footer";
import NewFooter from '@/components/NewFooter';
import Url_Initial_Landing from '@/components/Url_Initial_Landing';

export const metadata = {
  title: "AI Summit | Big Estate",
  description: "An evening of panel discussions, felicitation, and dinner with the people shaping how AI is changing the business of real estate.",
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon.png', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`font-poppins overflow-x-hidden w-screen font-allrounderMonumentTest scroll-smooth`} style={{ backgroundPosition:'center', backgroundSize:'cover'}}>
         <Url_Initial_Landing/>
        <div className="w-full"> {children} </div>
        {/* <div>
          <NewFooter />
        </div> */}
      </body>
      <GoogleTagManager gtmId="" />
    </html>
  );
}
