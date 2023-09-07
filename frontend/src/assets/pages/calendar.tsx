import React, { useState } from 'react';
import Calendar from 'react-calendar';
import "./calendar.css";
import { NavBar } from '../components/navbar';
import {SideBar} from '../components/sidebarhome';
import { MdDarkMode, MdLightMode } from 'react-icons/md';

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

type Event = {
  date: Date;
  note: string;
};

const MyApp: React.FC = () => {
  const [value, onChange] = useState<Date>(new Date());
  const [note, setNote] = useState<string>("");
  const [events, setEvents] = useState<Event[]>([]);
  const [selectedEventIndex, setSelectedEventIndex] = useState<number | null>(null);
  const [theme, setTheme] = useState(true);

  const handleNoteInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNote(e.target.value);
  };

  const handleAddNote = () => {
    const newEvent: Event = {
      date: value,
      note,
    };

    setEvents([...events, newEvent]);

    setNote("");
  };

  const handleDeleteNote = () => {
    if (selectedEventIndex !== null) {
      const updatedEvents = [...events];
      updatedEvents.splice(selectedEventIndex, 1);
      setEvents(updatedEvents);
      setSelectedEventIndex(null);
    }
  };

  // Obtener las notas para la fecha seleccionada
  const selectedDateNotes = events.filter((event) =>
    event.date.toDateString() === value.toDateString()
  );

  return (
    <div>
      <NavBar theme={MdLightMode} changeTheme={undefined} />
      <div className={`flex antialiased sans-serif h-screen ${theme ? 'dark:text-darkmode-verdeagua1' : 'text-lightmode-azul'}`}>
        <SideBar theme={theme}/>
        <div className='flex justify-center  m-auto'>
          <Calendar
            onChange={onChange}
            value={value}
            className=''
          />
        </div>
        <div className='flex p-8 flex-col'>
        <div className='flex justify-center bg-lightmode-blanco p-8 shadow-md rounded-lg h-32 flex-col max-w-sm'>
          
         
           <input className='h-4'
             type="text"
            value={note}
            onChange={handleNoteInputChange}
            placeholder="Escribe tu nota aquí"
            />
            <button className='boton' onClick={handleAddNote}>Agregar Nota</button>
             <button className='boton' onClick={handleDeleteNote} disabled={selectedEventIndex === null}>
              Eliminar Nota
             </button>
              </div>
              <div className='flex'>
              <ul className='max-w-sm'>
                  {selectedDateNotes.map((event, index) => (
                  <li
                  key={index}
                  className= {` flex p-4 rounded-lg shadow-md ${
                  selectedEventIndex === index ? "bg-blue-200 max-w-sm" : ""
                  }`}
                 onClick={() => setSelectedEventIndex(index)}
                  >
                 Date: {event.date.toDateString()} - Note: {event.note}
                 </li>
                 ))}
              </ul>
              </div>
          </div>
        </div>
    </div>
  );
};

export default MyApp;
