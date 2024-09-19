import  { Metadata } from "next";
import "./globals.css";
import {Roboto} from "next/font/google"
import ResponsiveNav from "@/components/Home/Navbar/ResponsiveNav";



const font = Roboto({
  weight:['100','300','400','500','700','900'],
  subsets:['latin']
})



export default function RootLayout({ children }) {
  return (
          <html lang="en">
      <body className={font.className}>

        <ResponsiveNav/>

{/* navbar */}

{children}

  {/* footer       */}
     
      </body>
    </html>
    


  );
}
