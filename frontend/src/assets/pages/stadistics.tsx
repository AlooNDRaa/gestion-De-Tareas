import React from 'react'
import LinesCharts from './stats'
import { NavBar } from '../components/navbar';




const Stats: React.FC = () => {
   

  return (
    <> 
    <div className='w-full'>
    <NavBar theme={undefined} changeTheme={undefined} />

    <div className='flex'>
    <SideBar />
    <div className='bg-darkmode-azul1 w-full'>
    
        <div className='flex justify-around ml-10'>
            <div className='mt-10'>
            <button className='text-darkmode-verdeagua1 mr-20'>Ver estadísticas</button>
              <button className='bg-darkmode-verdeagua1 items-end rounded-tl-lg rounded-bl-lg p-1 mr-0.5'>Semana pasada</button>
              <button className='bg-darkmode-verdeagua1 items-end p-1 mr-0.5'>Mes pasado</button>
              <button className='bg-darkmode-verdeagua1 items-end rounded-br-lg rounded-tr-lg p-1 mr-20'>Último año</button>
              <button className='bg-darkmode-verdeagua1 items-end rounded-lg p-1'>Junio 2023</button>
            </div>
            </div>
              <div className='flex justify-center m-auto w-4/6 h-4/5'>
              <div className="fit-content inline-block rounded bg-darkmode-azul3 flex justify-center w-full p-10 mt-20">

              <LinesCharts/>
            </div> 
            </div>
       </div>

    </div>
    </div>
  </> 
  )
}

export default Stats