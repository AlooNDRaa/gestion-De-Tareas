import Header from '../components/header'
import SideBar from '../components/sideBar'
import Subheader from '../components/subHeader'
import TaskManager from '../components/tablers'

function Seccion2() {
  return (
    <div className="flex flex-col">
      <Header />
      <div className="flex">
        <div className="w-1/1">
          <SideBar />
        </div>
        <div className="flex-grow flex flex-col">
          <Subheader className="h-auto" />
          <div className="overflow-auto"> 
            <TaskManager />
          </div>
        </div>
      </div>
    </div>
  )
}


export default Seccion2;
