import React from 'react'
import LinesCharts from './stats'
import { NavBar } from '../components/navbar';
import SideBar from '../components/sideBar';




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
              <button className='bg-darkmode-verdeagua1 items-end rounded-tl-lg rounded-bl-lg p-1 mr-0.5 hover:bg-darkmode-verdeagua2'>Semana pasada</button>
              <button className='bg-darkmode-verdeagua1 items-end p-1 mr-0.5 hover:bg-darkmode-verdeagua2'>Mes pasado</button>
              <button className='bg-darkmode-verdeagua1 items-end rounded-br-lg rounded-tr-lg p-1 mr-20 hover:bg-darkmode-verdeagua2'>Último año</button>
              <button className='bg-darkmode-verdeagua1 items-end rounded-lg p-1 hover:bg-darkmode-verdeagua2'>Junio 2023</button>
            </div>
            </div>

              <div className='flex justify-center mt-10 rounded flex'>
              <div className="flex justify-center p-10 bg-darkmode-azul3 min-w-3/5">
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