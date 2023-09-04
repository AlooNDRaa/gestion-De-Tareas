import { FaLock, FaUser, FaRegEnvelope } from 'react-icons/fa';

export default function Signup() {
    return (
        <main className="flex text-[#CFF5E7] min-h-screen items-center justify-center p-24 text-center bg-white">
            <div className="bg-[#1F4287] rounded-2xl shadow-2xl flex w-2/3 max-w-4xl">
                <div className="w-1/2 p-5">
                    {/* Sign up */}
                    <div className='text-left bg-[#1F4287] font-bold'>
                        <span className=''>DailyTask</span>
                    </div>
                    <div className='py-10 bg-[#1F4287]'>
                        <h2 className="text-3xl font-bold mb-4">Create an Account</h2>
                        <div className="border-2 w-10 h-1 border-blue-500 inline-block mb-4"></div>
                        <div className='flex justify-center my-2'>
                        </div>
                        {/* Formulario de registro */}
                        <div className='flex flex-col items-center'>
                            <div className='bg-gray-100 w-64 p-2 flex items-center mb-3'>
                                <FaUser className='text-gray-800 m-2' />
                                <input type="text" name='fullname' placeholder='Full Name' className='bg-gray-100 outline-none text-sm flex-1' />
                            </div>
                            <div className='bg-gray-100 w-64 p-2 flex items-center mb-3'>
                                <FaRegEnvelope className='text-gray-800 m-2' />
                                <input type="email" name='email' placeholder='Email' className='bg-gray-100 outline-none text-sm flex-1' />
                            </div>
                            <div className='bg-gray-100 w-64 p-2 flex items-center mb-3'>
                                <FaLock className='text-gray-800 m-2' />
                                <input type="password" name='password' placeholder='Password' className='bg-gray-100 outline-none text-sm flex-1' />
                            </div>
                            <div className='flex justify-between w-64 mb-5'>
                            </div>
                            <button
                                type="submit"
                                className="bg-blue-500 text-white rounded-full px-6 py-2 font-semibold 
                hover:bg-white hover:text-blue-500 hover:border-blue-200 border-2 border-blue-500 transition"
                            >
                                Sign Up
                            </button>
                            <p className="mt-3">
                                Already have an account?
                            </p>
                        </div>
                    </div>
                </div>
                <div className="bg-[#278EA5] w-1/2 text-white rounded-tr-2xl rounded-br-2xl py-20 px-12">
                    {/* Información adicional*/}
                </div>
            </div>
        </main>
    );
}