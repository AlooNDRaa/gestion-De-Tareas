import React from 'react';
//import Home from '../pages/home';


const NumberError: React.FC = () => {
    return (
        <>
        <div className="m-auto p-auto grid place-items-center bg-cover bg-center h-screen" style={{ backgroundImage: `url('https://wallpaperaccess.com/full/2138691.jpg')` }}>
           <div className=''>
            <h2  className='text-[270px] font-[Gluten]'>404</h2>
            <p className='flex justify-center text-[30px]' >Page Not Found </p>
        <div className='flex justify-center m-6 p-7'>
            <button>
                <a href="" className='text-[20px] p-2 border-transparent rounded-lg bg-[#fff]' >Go back home</a>
            </button>
        </div>
            </div>
        </div>
        </>
    )
}

export default NumberError;