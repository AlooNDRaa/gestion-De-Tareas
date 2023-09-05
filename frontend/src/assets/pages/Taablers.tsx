import { MdDarkMode } from 'react-icons/md';
import Header from '../components/header';
import { SideBar } from '../components/sidebarhome';
import Subheader from '../components/subHeader';
import TaskManager from '../components/tablers';

function Seccion2() {
  return (
    <>
      <Header/>
      <Subheader/>
      <div className="flex">
        <SideBar theme={MdDarkMode}/>
        <TaskManager />
        </div>
    </>
  );
}

export default Seccion2;
