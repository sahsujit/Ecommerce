import { Inter } from "next/font/google";
import "./globals.css";
import GlobalState from "@/context";
import Navbar from "@/components/Navbar"

import { ToastContainer } from "react-toastify";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <GlobalState>
          <Navbar/>
          <ToastContainer position="top-right" />
          <main className='flex min-h-screen bg-richblack-900  flex-col mt-[75px]'>{children}</main>

        </GlobalState>
            
      </body>
    </html>
  );
}
