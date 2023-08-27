import React from "react";
import { TfiAgenda } from "react-icons/tfi";
import 'tailwindcss/tailwind.css'

interface HeaderProps {
    className?: string;
}

const Header: React.FC<HeaderProps> = (props) => {
    
    return (
    <>
        <header className={`flex p-1 items-center bg-darkmode-azul2 ${props.className}`}>
            <h1 className="flex items-center text-[#CAEDFF] text-2xl font-mono p-1.5">
                DailyTask
                <TfiAgenda className="icon1"></TfiAgenda>
            </h1>
        </header>
    </>      

    )
};

export default Header;