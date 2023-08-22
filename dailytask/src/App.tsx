import { NavBar } from './components/navbar';
import { SideBar } from './components/sidebar';
import {FiPlus} from 'react-icons/fi';



function App() {

  return (
    <>
    <NavBar/>
    <div className='flex'>
    <SideBar/>
    <div className='p-7 bg-[#031124] w-full text-darkmode-verdeagua1'>
      <div className='py-3'>
        <h1 className=''>Opened Recently</h1>
        <ul>

        </ul>
      </div>
      <div>
        <h1>Your Workspaces</h1>
        <div className='pl-4 py-3'>
          <h2>Workspace 1</h2>
          <ul className='flex py-3'>
            <li className='w-40 h-28 bg-darkmode-azul2 rounded-m text-center flex items-center justify-center cursor-pointer'>
              <FiPlus className='text-xl text-center'/>
            </li>
        </ul>
        </div>
        
        <h2>New workspace</h2>
      </div>

    </div>
    </div>
    </>
  )
}

export default App
