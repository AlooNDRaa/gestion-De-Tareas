import { NavBar, NavBarMobile } from "../components/navbar";
import { useState } from 'react';
import { BsGithub } from 'react-icons/bs';
import { FiFigma, FiTrello } from 'react-icons/fi'
import { GiReturnArrow } from 'react-icons/gi'
import { Link } from "react-router-dom";


export function AboutUsPage() {
    const [theme, setTheme] = useState(true); // true for dark (default), false for light mode

    return (
        <>
            <div className={`${theme ? 'text-darkmode-verdeagua1' : 'text-lightmode-azul'}`}>
                <NavBar theme={theme} changeTheme={() => { setTheme(!theme) }} />
                <NavBarMobile theme={theme} />
                <div className={`${theme ? 'bg-[#031124]' : 'bg-[#dff5ed]'} h-screen flex justify-between `}>
                        <div className={`grid w-1/3 p-2 ml-16 text-center`}>
                        <h1 className="text-[5rem] m-auto">About Us</h1>
                            <p className="text-[1.5rem]">
                            We are a group of programming students who seek to make this project a more interactive and unique experience for the user. Each of us contributed ideas that were used for the development of this task manager. Each section of our project has its outstanding features.
                            <br/>
                             We do not have a physical company but you can find us at these links or back home:
                            </p>
                            </div>
                            <div className={`${theme ? 'bg-[#001C30]' : 'bg-[#ADC4CE]'} flex w-1/2`}>
                     <div className="items-center flex flex-col gap-7 m-auto">
                        <button className="animate-pulse hover:animate-spin">
                        <a href="https://github.com/AlooNDRaa/gestion-De-Tareas">
                            <BsGithub size='60px' />
                        </a>
                        </button>
                        <button className="animate-pulse hover:animate-spin">
                        <a href="https://www.figma.com/file/eTrdxntwqUY4GHw37umfsb/Gestor-de-tareas?type=design&node-id=0-1&mode=design&t=mnEqt6pQn7NfzsjB-0">
                            <FiFigma  size='60px'/>
                        </a>
                        </button>
                        <button className="animate-pulse hover:animate-spin">
                        <a href="https://trello.com/b/dyA9asgL/equipo-4-trello">
                            <FiTrello   size='60px'/>
                        </a>
                        </button>
                        <button className="animate-pulse hover:animate-spin">
                          <Link to="/"> <GiReturnArrow   size='60px'/> </Link>
                        </button>
                    </div>
                    </div>
                        </div>
                    </div>
        </>
    )
}
