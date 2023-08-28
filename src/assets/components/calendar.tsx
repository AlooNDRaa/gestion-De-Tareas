import React, { useState } from 'react';
import Calendar from 'react-calendar';
import "../../calendar.css";

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

type Event = {
  date: Date;
  note: string;
};

const MyApp: React.FC= ()=> {
  const [value, onChange] = useState<Value>(new Date());
  const [note, setNote] = useState<string>("");
  const [events, setEvents] = useState<Event[]>([]);

  const handleDateClick = (date: Date) => {
    // Abre un cuadro de diálogo o modal para que el usuario ingrese una nota
    const userNote = prompt("Ingrese una nota para este día:");

    if (userNote !== null) {
      const newEvent: Event = {
        date,
        note: userNote,
      };

      setEvents([...events, newEvent]);
    }
  };

  return (
    <div className= 'flex antialiased sans-serif bg-darkmode-azul1 h-screen'>
      
      <div className='flex justify-center bg-darkmode-verdeagua1 rounded-lg m-auto'>
        <Calendar 
          onChange={onChange}
          value={value}
          onClickDay={(date: Date) => handleDateClick(date)}
          className='m-8 bg-darkmode-azul1 w-20 h-20 rounded-lg text-verdeagua2 text-[#fff]'
          
        />
      </div>
      <div className='flex p-8'>
      <div className='flex justify-center bg-darkmode-verdeagua2 p-8'>
        <h3 className='text-verdeagua2'>Event Notes:</h3>
        <ul className='mt-4 space-y-4'>
          {events.map((event, index) => (
            <li key={index} className="bg-darkmode-verdeagua1 p-4 rounded-lg shadow-md">
              Date: {event.date.toDateString()} - Note: {event.note}
            </li>
          ))}
        </ul>
      </div>
    </div>
    </div>
  );
}

export default MyApp;