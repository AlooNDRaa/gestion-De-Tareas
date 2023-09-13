import { SideBar } from '../components/sidebarhome';
import { useState } from 'react';
import Subheader from '../components/subHeader';
import TaskManager from '../components/tablers';
import { NavBar, NavBarMobile } from '../components/navbar';

function Seccion2() {
  const [theme, setTheme] = useState(true); //true for dark (default), false for lightmode


  return (
    <div className={`${ theme ? 'text-darkmode-verdeagua1' : 'text-lightmode-azul'}`}>
      <NavBar theme={theme} changeTheme={() => {setTheme(!theme)}} />
      <NavBarMobile />
      <Subheader theme={theme} />
      <div className={`${ theme ? 'bg-darkmode-azul1 text-darkmode-verdeagua1' : 'bg-lightmode-blanco text-lightmode-azul'} flex h-screen`}>
        <SideBar theme={theme}/>
        <TaskManager theme={theme} />
        </div>
    </div>
  );
}

export default Seccion2;
