import { useState } from 'react';
import { AiFillHome } from 'react-icons/ai';
import { FaUserFriends } from 'react-icons/fa';
import { ImStatsDots } from 'react-icons/im';
import {BsFillCalendarFill} from 'react-icons/bs';
import { AiFillStar } from 'react-icons/ai';
import { BsChevronDown } from 'react-icons/bs';
import { ImShare2 } from 'react-icons/im';
import { BsGearFill } from 'react-icons/bs';
import { MdLogout } from 'react-icons/md';
import { RxDoubleArrowLeft } from 'react-icons/rx'; 
import {Link} from 'react-router-dom';

function SideBar({theme}) {
    const [open, setOpen] = useState(false);
    const [submenuOpen, setSubmenuOpen] = useState(false);

    const menus = [
        {title: 'Home', icon: <AiFillHome/>, path: '/home'},
        {title: 'Statistics', icon: <ImStatsDots/>, path: '/stats'},
        {title: 'Calendar', icon: <BsFillCalendarFill/>, path: '/calendar'},
        {title: 'About us', icon: <FaUserFriends/>, path: '/about-us'},
        {title: 'Favorites', 
        icon: <AiFillStar/>,
        spacing: true, 
        submenu: true, 
        submenuItems: [
            {title: 'Favorite 1'},
            {title: 'Favorite 2'},
            {title: 'Favorite 3'}
        ]},
        {title: 'Share', icon: <ImShare2/>},
        {title: 'Config', icon: <BsGearFill/>, spacing: true},
        {title: 'Log out', icon: <MdLogout/>, path: '/login'}
    ]
    
    return (
        <>
        <div className={`bg-gradient-to-b ${theme ? 'from-darkmode-azul1' : 'from-lightmode-blanco'} ${theme ? 'to-darkmode-verdeagua1' : 'to-lightmode-azul'} h-screen p-5 ${open ? "w-72" : "w-20"} relative mobile:hidden`}>
            <RxDoubleArrowLeft className={`cursor-pointer ${theme ? 'bg-darkmode-verdeagua2' : 'bg-lightmode-azul'} ${theme ? 'text-darkmode-azul2' : 'text-lightmode-blanco'} text-3xl p-1 border dark:border-darkmode-azul1 rounded-full absolute -right-3 top-9 ${!open && "rotate-180"}`} onClick={() => setOpen(!open)}/>
            <ul className='pt-2'>
                { menus.map((menu, index) => (
                    <>
                        {menu.hasOwnProperty('path') ? (
                            <Link key={index} to={menu.path} className={`${theme ? 'dark:text-darkmode-verdeagua2' : 'text-lightmode-azul'} text-s flex items-center gap-x-4 cursor-pointer p-2 ${theme ? 'dark:hover:bg-darkmode-azul2/50' : 'hover:bg-lightmode-verdeagua1/75'} rounded-md mt-2 ${menu.spacing ? "mt-9" : "mt-2"}`}>
                            <span className='text-xl block float-left'>
                                {menu.icon}
                            </span>
                            <span className={`text-base flex-1 duration-200 ${!open && "hidden"}`}>
                                {menu.title}
                            </span>
                            {menu.submenu && open && (
                                <BsChevronDown className={`cursor-pointer ${theme ? 'dark:text-darkmode-verdeagua2' : 'text-lightmode-azul'}  ${submenuOpen && "rotate-180"}`} onClick={() => setSubmenuOpen(!submenuOpen)}/>
                            )}
                        </Link>
                        ) : (
                            <li key={index} className={`${theme ? 'dark:text-darkmode-verdeagua2' : 'text-lightmode-azul'} text-s flex items-center gap-x-4 cursor-pointer p-2 ${theme ? 'dark:hover:bg-darkmode-azul2/50' : 'hover:bg-lightmode-verdeagua1/75'} rounded-md mt-2 ${menu.spacing ? "mt-9" : "mt-2"}`}>
                            <span className='text-xl block float-left'>
                                {menu.icon}
                            </span>
                            <span className={`text-base flex-1 duration-200 ${!open && "hidden"}`}>
                                {menu.title}
                            </span>
                            {menu.submenu && open && (
                                <BsChevronDown className={`cursor-pointer ${theme ? 'dark:text-darkmode-verdeagua2' : 'text-lightmode-azul'}  ${submenuOpen && "rotate-180"}`} onClick={() => setSubmenuOpen(!submenuOpen)}/>
                            )}
                        </li>
                        )
                        }
                        
                        {menu.submenu && submenuOpen && open && (
                                <ul>
                                    {menu.submenuItems.map((subitem, index) => (
                                        <li key={index} className={`${theme ? 'text-darkmode-verdeagua2' : 'text-lightmode-azul'} text-sm flex items-center gap-x-4 cursor-pointer p-2 px-5 rounded-md mt-2`}>
                                            {subitem.title}
                                        </li>
                                    ))}
                                </ul>
                            )}
                    </>
                ))}
            </ul>
        </div>
        </>

    )
}

export {SideBar}