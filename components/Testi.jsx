import React from "react";
import { Background } from "@/components/ui/background";
import { Testimonials } from "./Testimonials";
import { Header } from "./Header";

export function Testi() {
  return (

    (
        <>
         <Header heading={"Testimonials"}/>
    <Background>
        <div className="h-[400px] bg-transparent flex items-center w-full relative">
        <Testimonials/>
        </div>
    
    </Background>
        </>
   )
  );
}
