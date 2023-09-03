import Header from '../components/header';
import Sidebar from '../components/sideBar';
import TaskManager from '../components/tablers';

function Seccion2() {
  return (
    <>
      <Header />
      <div className="flex w-full">
        <Sidebar />
        <div className="flex-grow p-4">
          <TaskManager />
        </div>
      </div>
      </>
  );
}

export default Seccion2;
