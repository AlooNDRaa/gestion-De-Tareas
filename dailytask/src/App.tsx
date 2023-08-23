import { useState } from 'react';
import { NavBar } from './components/navbar';
import { SideBar } from './components/sidebar';
import { Workspace, NameWorkspace } from './components/workspace';



function App() {

  const [show, setShow] = useState(false);
  const [workspaces, setWorkspaces] = useState([]);

  function addWorkspace(wksp) {
    setWorkspaces([...workspaces, {title: wksp, }])
  }

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
      <div className='py-3'>
        <h1>Your Workspaces</h1>
        
        <span className='cursor-pointer text-m my-3' onClick={() => setShow(!show)}>New workspace</span>

        <NameWorkspace show={show} addWorkspace={addWorkspace}/>

        {workspaces.map((wksp, index) => 
          <Workspace title={wksp} key={index}/>
        )}

      </div>

    </div>
    </div>
    </>
  )
}

export default App
