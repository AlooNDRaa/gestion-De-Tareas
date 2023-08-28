import { useState } from 'react';
import { BsFillBellFill } from 'react-icons/bs';
import { FaUser } from 'react-icons/fa';
import { MdLightMode } from 'react-icons/md';
import { MdDarkMode } from 'react-icons/md';
import logodark from '../img/imgs/dailytasklogo1.png';
import logolight from '../img/imgs/dailytasklogo2.png';

function NavBar({theme, changeTheme}) {
    const [open, setOpen] = useState(false);
    const [icon, setIcon] = useState(true);


    return (
        <>        
            <nav className={`${theme ? 'dark:bg-darkmode-azul1' : 'bg-lightmode-blanco'} flex text-m py-2 justify-between leading-normal content-center font-medium ${theme ? 'dark:text-darkmode-verdeagua1' : 'text-lightmode-azul'}`}>
                <div className='flex items-center'>
                    <img src={theme ? logodark : logolight} alt="logo" className="w-30 h-10 pl-2"/>
                    <a className='px-3 cursor-pointer'>Workspaces</a>
                    <button className={`${theme ? 'dark:bg-darkmode-verdeagua2' : 'bg-lightmode-azul'} ${theme ? 'dark:text-darkmode-azul1' : 'text-lightmode-blanco'}  px-3 rounded`}>Create</button>
                </div>
                
                <div className={`flex pr-2 text-xl ${theme ? 'dark:text-darkmode-verdeagua1' : 'text-lightmode-azul'} flex-row items-center`}>
                    <a className='px-2 cursor-pointer' onClick={() => {setIcon(!icon); changeTheme(!theme)} }>
                        {icon ? <MdLightMode/> : <MdDarkMode/>}
                    </a>
                    <a className='px-2 cursor-pointer'><BsFillBellFill/></a>
                    <a className='px-2 cursor-pointer' onClick={() => setOpen(!open)}><FaUser/></a>
                </div>
            </nav>
            {open && (
                <ul className={`${theme ? 'dark:bg-darkmode-azul1' : 'bg-lightmode-blanco'} ${theme ? 'dark:text-darkmode-verdeagua1' : 'text-lightmode-azul'} flex flex-col absolute right-0 text-m rounded-b-lg`}>
                    <li className='px-2 cursor-pointer'>Edit profile</li>
                    <li className='px-2 cursor-pointer'>Help</li>
                    <li className='px-2 cursor-pointer'>Logout</li>
                </ul>
            )}
        </>
    )
}



export { NavBar }