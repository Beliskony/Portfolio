import React from "react";
import { useState } from "react";


const Header: React.FC = () => {
   const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-transparent h-20 w-full py-6 px-20 items-center justify-between flex flex-row border-b max-sm:px-2">
        {/*partieUne*/}
        <div>
            <a href="#">
                <h3 className="text-3xl font-bold text-left hover:scale-105 transition-all">Digital-Gick</h3>
            </a>
        </div>

      <div>
        <ul className="hidden xl:flex items-center gap-10 font-semibold text-xl text-[#3B556D] h-full">
            <li className="hover:animate-bounce hover:text-2xl transition-[150] hover:text-[#0B162C]">
                <a href="#presentation">Presentaion</a>
            </li>

            <li className="hover:animate-bounce hover:text-2xl hover:text-[#0B162C] h-full"> 
                <a href="#skills">Skills</a>
            </li>

            <li className="hover:animate-bounce hover:text-2xl hover:text-[#0B162C] h-full">
                <a href="#creation">Creations</a>
            </li>

            <li className="hover:animate-bounce hover:text-2xl hover:text-[#0B162C] h-full">
                <a href="#contact">Contact</a>
            </li>
        </ul>

        <div className="relative xl:hidden lg:hidden md:flex items-center justify-between">
             <img src="https://img.icons8.com/?size=50&id=8113&format=png&color=000000" className="block cursor-pointer"
             onClick={() => setIsOpen(!isOpen)}/>
        </div>

        <div className={`absolute xl:hidden lg:hidden top-20 left-0 w-full bg-white flex flex-col items-center gap-6 font-semibold text-lg
           transform transition-transform ${isOpen ? "opacity-100":"opacity-0"} `}>
            
            <li className="list-none w-full text-center p-4 hover:bg-black hover:text-white transition-all cursor-pointer">
                <a href="#presentation">Presentaion</a>
            </li>

            <li className="list-none w-full text-center p-4 hover:bg-black hover:text-white transition-all cursor-pointer"> 
                <a href="#skills">Skills</a>
            </li>

            <li className="list-none w-full text-center p-4 hover:bg-black hover:text-white transition-all cursor-pointer">
                <a href="#creation">Creations</a>
            </li>

            <li className="list-none w-full text-center p-4 hover:bg-black hover:text-white transition-all cursor-pointer">
                <a href="#contact">Contact</a>
            </li>

        </div>
      </div>
    </nav>
  );
};

export default Header;
