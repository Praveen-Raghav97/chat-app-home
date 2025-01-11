import React from "react";
import { Background } from "@/components/ui/background";
import { Testimonials } from "./Testimonials";
import { Header } from "./Header";

export function Testi() {
  return (

    (
        <div div className="h-auto">
         <Header heading={"Testimonials"}/>
    <Background>
        <div className=" md:h-[400px] h-full bg-transparent flex items-center w-full relative">
        <Testimonials/>
        </div>
    
    </Background>
        </div>
   )
  );
}
