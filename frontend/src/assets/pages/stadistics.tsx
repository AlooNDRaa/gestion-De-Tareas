import React, { useRef, useState } from 'react';
import LinesCharts from './stats';
import { NavBar } from '../components/navbar';
import { SideBar } from '../components/sidebarhome';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import Slider from 'react-slick';

const Stats: React.FC = () => {
  const sliderRef = useRef<Slider | null>(null);
  const [currentMonthIndex, setCurrentMonthIndex] = useState(0);
  const [totalHours, setTotalHours] = useState(Array(12).fill(0));

  const receiveHoursData = (totalHours, graphIndex) => {
    setTotalHours((prevTotalHours) => {
      const newTotalHours = [...prevTotalHours];
      newTotalHours[graphIndex] = totalHours;
      return newTotalHours;
    });
  };

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    beforeChange: (_, next) => setCurrentMonthIndex(next),
  };

  const monthNames = [
    'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
    'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
  ];

  const handleMonthChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedMonth = event.target.value;
    const monthIndex = monthNames.indexOf(selectedMonth);
    
    if (sliderRef.current) {
      sliderRef.current.slickGoTo(monthIndex);
      setCurrentMonthIndex(monthIndex);
    }
  };

  const handlePreviousMonth = () => {
    const previousMonthIndex = (currentMonthIndex - 1 + 12) % 12; // Calcula el mes anterior
    setCurrentMonthIndex(previousMonthIndex); // Actualiza el índice del mes actual
    if (sliderRef.current) {
      sliderRef.current.slickGoTo(previousMonthIndex); //cambia el slider al mes anterior
    }
  };

  

  return (
    <>
      <NavBar theme={undefined} changeTheme={undefined} />
      <div className='flex'>
        <SideBar theme={undefined} />
        <div className='w-5/6'>
          <div className='flex justify-around ml-10'>
            <div className='mt-8'>
              <button className='bg-darkmode-verdeagua2 mr-20 rounded-lg p-1 pl-2 pr-2 cursor-auto transform scale-105 transition-transform duration-300 hover:scale-110'>Total de Horas: {totalHours[currentMonthIndex]} horas</button>
              <button className='bg-darkmode-verdeagua1 items-end rounded-tl-lg rounded-bl-lg p-1 mr-0.5 hover:bg-darkmode-verdeagua2'>Semana pasada</button>
              <button className='bg-darkmode-verdeagua1 items-end p-1 mr-0.5 hover:bg-darkmode-verdeagua2' onClick={handlePreviousMonth}>Mes pasado</button>
              <button className='bg-darkmode-verdeagua1 items-end rounded-br-lg rounded-tr-lg p-1 mr-20 hover:bg-darkmode-verdeagua2'>Último año</button>
              {/* barra desplegable de meses */}
            <select className='bg-darkmode-verdeagua1 items-end rounded-lg p-1 pl-2 pr-2 mr-20 hover:cursor-pointer' onChange={handleMonthChange} value={monthNames[currentMonthIndex]}>
              {monthNames.map((month, index) => (
                <option key={index} value={month}>
                  {month}
                </option>
              ))}
            </select>
            </div>
          </div>
          <div className='flex justify-center max-w-3/5'>
            <Slider ref={sliderRef} className='w-4/5' {...settings}>
              {monthNames.map((_, index) => (
                <div key={index} className='flex justify-center mt-10 rounded'>
                  <div className='text-center mt-2 bg-darkmode-azul2 p-2'>{monthNames[index]}</div>
                  <div className='flex justify-center p-10 bg-darkmode-azul3 min-w-3/5'>
                    <LinesCharts graphIndex={index} onReceiveHoursData={receiveHoursData}/>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
};

export default Stats;

