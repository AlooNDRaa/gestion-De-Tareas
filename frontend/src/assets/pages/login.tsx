import { FaFacebookF, FaLinkedinIn, FaGoogle, FaRegEnvelope } from 'react-icons/fa';
import { MdLockOutline } from 'react-icons/md';
import { BiAdjust } from 'react-icons/bi'
import { useState } from 'react';

export function Login() {
  const [Theme, setTheme] = useState(true);

  const changeTheme = () => {
    setTheme(!Theme);
  };

  return (
    <>
      <div>
        <button className={` ${Theme ? 'bg-darkmode-azul3 text-darkmode-blanco' : 'bg-lightmode-verdeagua2 text-lightmode-blanco' } rounded-full p-2 m-8 fixed flex`}>
          <BiAdjust
            size='20px'
            onClick={changeTheme}
          />
        </button>
      </div>
      <main className={`flex h-screen items-center justify-center  text-center ${Theme ? 'dark:bg-darkmode-verdeagua2' : 'bg-lightmode-blanco'} p-20`}>
      <div className={` ${Theme ? 'bg-darkmode-azul2 text-lightmode-blanco' : 'bg-lightmode-verdeagua2 text-darkmode-azul3' } rounded-2xl shadow-2xl flex`}>
        <div className="w-1/2 p-5">
          <div className='text-left font-bold items-center m-3 '>
              <span className='mr-2'>DailyTask</span> 
          </div>
          <div className='py-10'>
            <h2 className="text-3xl font-bold mb-4">Sign in to account</h2>
            <div className="border-2 w-14 h-1  inline-block mb-4"></div>
            <div className='flex justify-center my-2'>
              <a  className='border-2 rounded-full p-3 mx-1 hover:scale-110 transform transition hover:bg-lightmode-verdeagua2 hover:text-darkmode-azul2 hover:animate-spin'><FaFacebookF className='text-sm'/></a>
              <a  className='border-2 rounded-full p-3 mx-1 hover:scale-110 transform transition hover:bg-lightmode-verdeagua2 hover:text-darkmode-azul2 hover:animate-spin'><FaLinkedinIn className='text-sm'/></a>
              <a  className='border-2 rounded-full p-3 mx-1 hover:scale-110 transform transition hover:bg-lightmode-verdeagua2 hover:text-darkmode-azul2 hover:animate-spin'><FaGoogle className='text-sm'/></a>
            </div>
            <p className=' my-3'>or use your email account</p>
            <div className='flex flex-col items-center'>
              <div className='w-64 p-2 flex items-center mb-3'>
                <FaRegEnvelope className='m-3'/>
                <input type="email" name='email' placeholder='Email' className='outline-none rounded text-sm flex-1 text-[#000]'/> 
              </div>
              <div className='w-64 p-2 flex items-center mb-3'>
                <MdLockOutline className=' m-3'/>
                <input type="password" name='password' placeholder='Password' className='outline-none rounded  text-sm flex-1 text-[#000]'/> 
              </div>
              <div className='flex justify-between w-64 mb-5'>
                <label className='flex items-center text-xs' htmlFor=""><input type="checkbox" name='remember' className='mr-1' />Remember me</label>
                <a href="#" className='text-xs'>Forgot Password</a>
              </div>
              <a
                href="#"
                className="rounded-full px-6 py-2 font-semibold hover:bg-darkmode-azul3 hover:text-lightmode-verdeagua hover:border-lightmode-verdeagua border-2 transition"
              >
                Sign In
              </a>
            </div>
          </div>          
        </div>
        <div className={`${Theme ? 'bg-[#35A29F]' : 'bg-[#F6F4EB]'} w-1/2  rounded-tr-2xl rounded-br-2xl items-center flex flex-col py-28 px-12`}>
          <h2 className="text-3xl font-bold mb-4">Welcome!!</h2>
          <div className="border-2 w-10 h-1 inline-block mb-4"></div>
          <p className="mb-6">
            Fill up personal information and start your journey with us.
          </p>
          <a
            href="#"
            className="rounded-full px-6 py-2 font-semibold hover:bg-darkmode-azul3 hover:text-lightmode-verdeagua hover:border-lightmode-verdeagua border-2 transition"
            >
            Sign Up
          </a>
        </div>
      </div>
    </main>
    </>
  );
}