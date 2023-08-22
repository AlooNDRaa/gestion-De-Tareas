import { useState } from 'react';
import './home.css';
import { AiFillHome } from 'react-icons/ai';
import { RxDoubleArrowLeft } from 'react-icons/rx'; 

function NavBar() {
    return (
        <>        
            <nav className='bg-darkmode-azul2 flex text-[25px] py-2 justify-between leading-normal'>
                <div className='flex'>
                    <img src="" alt="logo" className="px-2"/>
                    <a className='px-2'>Tableros</a>
                    <button className='dark:bg-darkmode-verdeagua2 dark:text-darkmode-azul1 px-2 rounded'>Crear</button>
                </div>
                
                <div className='icons flex-end'>
                    <a className='px-2'></a>
                    <a className='px-2'></a>
                    <a className='px-2'></a>
                </div>
            </nav>
        </>
    )
}

function SideBar() {
    const [open, setOpen] = useState(true);
    
    return (
        <div className={`flex bg-gradient-to-b from-darkmode-azul1 to-darkmode-verdeagua2 h-screen text-darkmode-verdeagua1 p-5 pt-8 ${open ? "w-72" : "w-20"}`}>
            <div>
                <RxDoubleArrowLeft className="cursor-pointer rounded-full bg-lightmode-blanco absolute -right-3 top-9" onClick={() => setOpen(!open)}/>
            </div>
            <ul>
                <li className='text-center'><AiFillHome className="text-darkmode-verdeagua2"/>Mis Tareas</li>
                <li>Estadísticas</li>
                <li>Calendario</li>
                <li>Favoritos</li>
            </ul>
        </div>
    )
}

export { NavBar, SideBar }