import About from "@/components/About";
import AboutPage from "@/components/AboutPage";
import { Cards } from "@/components/Cards";
import Developer from "@/components/Developer";
import { Footer } from "@/components/Footer";
import { GoogleEffect } from "@/components/GoogleEffect";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { Testi } from "@/components/Testi";
import { Testimonials } from "@/components/Testimonials";
import { Card } from "@/components/ui/card-hover";
import Image from "next/image";

export default function Home() {
  return (
<div>
    
      < main>
      <Hero/>
      <Navbar/>
      <Header heading={"About us"}/>
      <About/>
     
      <AboutPage/>
      <Developer/>
      <GoogleEffect/>
      
       
       <Testi/>
      </main>
    <Footer/>
    </div>
  );
}
