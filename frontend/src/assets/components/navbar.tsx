import { useState } from 'react';
import { BsFillBellFill } from 'react-icons/bs';
import { FaUser } from 'react-icons/fa';
import { MdLightMode } from 'react-icons/md';
import { MdDarkMode } from 'react-icons/md';
import { AiFillHome } from 'react-icons/ai';
import { ImStatsDots } from 'react-icons/im';
import { BsFillCalendarFill } from 'react-icons/bs';
import { BsGearFill } from 'react-icons/bs';
import { BiSolidHelpCircle } from 'react-icons/bi';
import { MdLogout } from 'react-icons/md';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';
import logodark from '../img/imgs/dailytasklogo1.png';
import logolight from '../img/imgs/dailytasklogo2.png';

function NavBar({theme, changeTheme}) {
    const [open, setOpen] = useState(false);
    const [icon, setIcon] = useState(true);


    return (
        <>        
            <nav className={`${theme ? 'dark:bg-darkmode-azul1' : 'bg-lightmode-blanco'} desktop:flex hidden text-m justify-between leading-normal content-center font-medium ${theme ? 'dark:text-darkmode-verdeagua1' : 'text-lightmode-azul'} absolute w-screen z-20`}>
                <div className='flex items-center'>
                    <img src={theme ? logodark : logolight} alt="logo" className="w-30 h-10 pl-2"/>
                    <CustomLink to='/home' className='px-3 cursor-pointer'>Workspaces</CustomLink>
                    <button className={`${theme ? 'dark:bg-darkmode-verdeagua2' : 'bg-lightmode-azul'} ${theme ? 'dark:text-darkmode-azul1' : 'text-lightmode-blanco'}  px-3 rounded shadow-lg ${theme ? 'shadow-azul1' : 'shadow-lightmode-blanco'}`}>Create</button>
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
                <ul className={`${theme ? 'dark:bg-darkmode-azul1' : 'bg-lightmode-blanco'} ${theme ? 'dark:text-darkmode-verdeagua1' : 'text-lightmode-azul'} hidden desktop:flex flex-col absolute right-0 top-10 z-20 text-m rounded-b-lg`}>
                    <li className='px-2 cursor-pointer'>Profile</li>
                    <li className='px-2 cursor-pointer'>Help</li>
                    <li className='px-2 cursor-pointer'>Logout</li>
                </ul>
            )}
        </>
    )
}




function NavBarMobile(theme) {
    const [open, setOpen] = useState(false)

    return (
    <>  
    <nav className={`${theme ? 'dark:bg-darkmode-azul1' : 'bg-lightmode-blanco'} ${theme ? 'dark:text-darkmode-verdeagua1' : 'text-lightmode-azul'} mobile:flex hidden justify-between`}>
       <img src={theme ? logodark : logolight} alt="logo" className="w-30 h-10 pl-2"/>
       
       <div className={`${theme ? 'dark:text-darkmode-verdeagua1' : 'text-lightmode-azul'} flex-row items-center flex pr-2 text-xl`}>
            <a className='px-2 cursor-pointer'><BsFillBellFill/></a>
            <a className='px-2 cursor-pointer' onClick={() => setOpen(!open)}><FaUser/></a>
       </div>
    </nav>
    {open && (
        <ul className={`${theme ? 'dark:bg-darkmode-azul1' : 'bg-lightmode-blanco'} ${theme ? 'dark:text-darkmode-verdeagua1' : 'text-lightmode-azul'} flex flex-col absolute right-0 text-m rounded-b-lg w-40`}>
            <li className='flex'><span className='px-2 pt-2'><AiFillHome/></span>Home</li>
            <li className='flex'><span className='px-2'><ImStatsDots/></span>Statistics</li>
            <li className='flex'><span className='px-2'><BsFillCalendarFill/></span>Calendar</li>
            <li className='flex'><span className='px-2'><BsGearFill/></span>Config</li>
            <li className='flex'><span className='px-2'><BiSolidHelpCircle/></span>Help</li>
            <li className='flex'><span className='px-2 pb-2'><MdLogout/></span>Logout</li>
        </ul>    
    )}
    </> 
    )
}

function CustomLink({to, children, ...props}) {
    const resolvedPath = useResolvedPath(to);
    const isActive = useMatch({path: resolvedPath.pathname, end: true})
    
    return (
        <li className={isActive ? "active" : ""}>
            <Link to={to} {...props}>
            {children}
            </Link>

        </li>
    )
}
export { NavBar, NavBarMobile }
