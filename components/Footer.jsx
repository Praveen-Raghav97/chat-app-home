"use client";
import React from "react";

import { FooterLink } from "./FooterLink";
import FooterCard from "./FooterCard";

export function Footer() {
  return (
    (
      <div div className="flex items-center flex-col ">
      <FooterCard/>
        <footer className="flex gap-5 p-10 mt-10 w-full h-full md:h-[200px] flex-col  md:flex-row items-center justify-evenly shadow-xl">
         
         <div className=""><h1 className="text-4xl font-bold text-purple-500">Frenemy</h1>
         </div>
         <div className="flex items-center gap-2 text-md">
             <ul className="list-none flex justify-evenly flex-col md:flex-row items-center gap-4">
             <li>Term of services</li>
             <li>Privacy and Policy</li>
             <li>Comunity Guidens</li>
             </ul>
             
          
         </div>
         <div>
           <FooterLink/> 
         </div>
     </footer>
      </div>
      
    )
  );
}
