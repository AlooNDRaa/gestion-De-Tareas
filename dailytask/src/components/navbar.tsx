import { useState } from 'react';
import { BsFillBellFill } from 'react-icons/bs';
import { FaUser } from 'react-icons/fa';
import { MdLightMode } from 'react-icons/md';
import { MdDarkMode } from 'react-icons/md';

function NavBar() {
    const [open, setOpen] = useState(false);
    const [dark, setDark] = useState(true);
    return (
        <>        
            <nav className='bg-darkmode-azul1 flex text-m font-medium py-2 justify-between leading-normal text-darkmode-verdeagua1'>
                <div className='flex'>
                    <img src="" alt="logo" className="px-2"/>
                    <a className='px-3 cursor-pointer'>Workspaces</a>
                    <button className='bg-darkmode-verdeagua2 text-darkmode-azul1 px-3 rounded'>Create</button>
                </div>
                
                <div className='flex pr-2 text-xl text-darkmode-verdeagua1 flex-row'>
                    <a className='px-2 cursor-pointer' onClick={() => setDark(!dark)}>
                        {dark ? <MdDarkMode/> : <MdLightMode/>}
                    </a>
                    <a className='px-2 cursor-pointer'><BsFillBellFill/></a>
                    <a className='px-2 cursor-pointer' onClick={() => setOpen(!open)}><FaUser/></a>
                </div>
            </nav>
            {open && (
                <ul className='bg-darkmode-azul1 text-darkmode-verdeagua1 flex flex-col absolute right-0 text-m rounded-b-lg'>
                    <li className='px-2 cursor-pointer'>Edit profile</li>
                    <li className='px-2 cursor-pointer'>Help</li>
                    <li className='px-2 cursor-pointer'>Logout</li>
                </ul>
            )}
        </>
    )
}



export { NavBar }