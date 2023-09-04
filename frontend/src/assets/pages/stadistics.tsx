import React from 'react'
import LinesCharts from './stats'
import { NavBar } from '../components/navbar';




const Stats: React.FC = () => {
   

  return (
    <>
    <NavBar theme={undefined} changeTheme={undefined} />
    
    <div className='bg-darkmode-azul1 h-screen w-full'>

        
        <div className='flex justify-around'>
        
            <div className='mt-10'>
            <button className='text-darkmode-verdeagua1 m-5 mr-20'>Ver estadísticas</button>
              <button className='bg-darkmode-verdeagua1 items-end rounded-tl-lg rounded-bl-lg p-1 ml-20'>Semana pasada</button>
              <button className='bg-darkmode-verdeagua1 items-end p-1 m-0.5'>Mes pasado</button>
              <button className='bg-darkmode-verdeagua1 items-end rounded-br-lg rounded-tr-lg p-1 mr-20'>Último año</button>
              <button className='bg-darkmode-verdeagua1 items-end rounded-lg p-1 ml-20 mr-20'>Junio 2023</button>
            </div>
            </div>

              <div className='flex justify-center mr-20'>
              <div className="h-80 inline-block rounded bg-darkmode-azul3 flex w-fit p-2 mt-20">
              <LinesCharts/>
            </div> 
       </div>

    </div>
  </> 
  )
}

export default Stats