import { NavBar, NavBarMobile } from "../components/navbar";
import { useState } from 'react';
import { BsGithub } from 'react-icons/bs';
import { FiFigma, FiTrello } from 'react-icons/fi'


export function AboutUsPage() {
    const [theme, setTheme] = useState(true); // true for dark (default), false for light mode

    return (
        <>
            <div className={`${theme ? 'text-darkmode-verdeagua1' : 'text-lightmode-azul'}`}>
                <NavBar theme={theme} changeTheme={() => { setTheme(!theme) }} />
                <NavBarMobile />
                <div className={`${theme ? 'bg-[#053B50]' : 'bg-lightmode-blanco'} w-full h-screen flex justify-evenly text-center`}>
                        <div className={`w-1/3 p-6g`}>
                        <h1 className="text-[5rem] m-7">About Us</h1>
                            <p className="text-[1.5rem]">
                                We are a group of programming students who seek to make this project a more interactive and unique experience for the user.
                                Each of us contributed ideas that were used for the development of this task manager.
                                Each section of our project has its outstanding characteristics.
                            </p>
                            </div>
                            <div className="flex justify-center items-center flex-col gap-5">
                                <button>
                                    <a href="https://github.com/AlooNDRaa/gestion-De-Tareas">
                                        <BsGithub size='60px' />
                                    </a>
                                </button>
                                <button>
                                    <a href="https://www.figma.com/file/eTrdxntwqUY4GHw37umfsb/Gestor-de-tareas?type=design&node-id=0-1&mode=design&t=mnEqt6pQn7NfzsjB-0">
                                        <FiFigma  size='60px'/>
                                    </a>
                                </button>
                                <button>
                                    <a href="https://trello.com/b/dyA9asgL/equipo-4-trello">
                                        <FiTrello   size='60px'/>
                                    </a>
                                </button>
                        </div>
                    </div>
                </div>
        </>
    )
}
