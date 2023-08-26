import { useState } from 'react';
import { AiFillHome } from 'react-icons/ai';
import { ImStatsDots } from 'react-icons/im';
import {BsFillCalendarFill} from 'react-icons/bs';
import { AiFillStar } from 'react-icons/ai';
import { BsChevronDown } from 'react-icons/bs';
import { ImShare2 } from 'react-icons/im';
import { BsGearFill } from 'react-icons/bs';
import { MdLogout } from 'react-icons/md';
import { RxDoubleArrowLeft } from 'react-icons/rx'; 

function SideBar() {
    const [open, setOpen] = useState(true);
    const [submenuOpen, setSubmenuOpen] = useState(false);

    const menus = [
        {title: 'Home', icon: <AiFillHome/>},
        {title: 'Statistics', icon: <ImStatsDots/>},
        {title: 'Calendar', icon: <BsFillCalendarFill/>},
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
        {title: 'Log out', icon: <MdLogout/>}
    ]
    
    return (
        <>
        <div className={`bg-gradient-to-b from-darkmode-azul1 to-darkmode-verdeagua1 h-screen p-5 pt-8 ${open ? "w-72" : "w-20"} relative`}>
            <RxDoubleArrowLeft className={`cursor-pointer bg-lightmode-blanco text-lightmode-azul text-3xl p-1 border border-darkmode-azul1 rounded-full absolute -right-3 top-9 ${!open && "rotate-180"}`} onClick={() => setOpen(!open)}/>
            <ul className='pt-2'>
                { menus.map((menu, index) => (
                    <>
                        <li key={index} className={`text-lightmode-blanco text-s flex items-center gap-x-4 cursor-pointer p-2 hover:bg-darkmode-azul2 rounded-md mt-2 ${menu.spacing ? "mt-9" : "mt-2"}`}>
                            <span className='text-xl block float-left'>
                                {menu.icon}
                            </span>
                            <span className={`text-base flex-1 duration-200 ${!open && "hidden"}`}>
                                {menu.title}
                            </span>
                            {menu.submenu && open && (
                                <BsChevronDown className={`cursor-pointer text-lightmode-blanco  ${submenuOpen && "rotate-180"}`} onClick={() => setSubmenuOpen(!submenuOpen)}/>
                            )}
                        </li>
                        {menu.submenu && submenuOpen && open && (
                                <ul>
                                    {menu.submenuItems.map((subitem, index) => (
                                        <li key={index} className={`text-lightmode-blanco text-sm flex items-center gap-x-4 cursor-pointer p-2 px-5 hover:bg-darkmode-azul2 rounded-md mt-2`}>
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

export { SideBar }