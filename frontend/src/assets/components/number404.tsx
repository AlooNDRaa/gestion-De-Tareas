import React from 'react';
import Pet from '../img/VirtualPET/cry-notepad.png'
//import Home from '../pages/home';


const NumberError: React.FC = () => {
    return (
        <>
        <div className="grid place-items-center bg-cover bg-center">
           <div className='flex mt-7 p-auto justify-center items-center'>
            <p className='flex font-[Cute Font] items-center text-[300px] text-[#4baacc]' >4
            <img src={ Pet } alt="" className='w-[320px] h-[320px] m-2 bg-[#dafdff] rounded-full' />
            4</p>
            </div>
        <div className='flex flex-col justify-center'>
            <h2 className='mb-6 text-[#4baacc] text-[45px]'>Page not found</h2>
        </div>
            <button className='bg-[#4baacc] hover:bg-[#000] font-bold py-2 px-7 rounded-xl'>
                <a href="" className='text-[20px] p-2 border-transparent rounded-lg text-[#a6dbea]' >Go back home</a>
            </button>
        </div>
        </>
    )
}

export default NumberError;