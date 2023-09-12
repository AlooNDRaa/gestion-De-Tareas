import { SideBar } from '../components/sidebarhome';
import { useState } from 'react';
import Subheader from '../components/subHeader';
import TaskManager from '../components/tablers';
import { NavBar, NavBarMobile } from '../components/navbar';

function Seccion2() {
  const [theme, setTheme] = useState(true); //true for dark (default), false for lightmode


  return (
    <>
      <NavBar theme={theme} changeTheme={() => {setTheme(!theme)}} />
      <NavBarMobile />
      <Subheader theme={theme} />
      <div className="flex h-screen">
        <SideBar theme={theme}/>
        <TaskManager theme={theme} />
        </div>
    </>
  );
}

export default Seccion2;
