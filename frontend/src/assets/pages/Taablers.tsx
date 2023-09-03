import Header from '../components/header';
import Sidebar from '../components/sideBar';
import Subheader from '../components/subHeader';
import TaskManager from '../components/tablers';

function Seccion2() {
  return (
    <>
      <Header/>
      <Subheader/>
      <div className="flex">
        <Sidebar />
        <TaskManager />
        </div>
    </>
  );
}

export default Seccion2;
