import { useState } from 'react';
import { NavBar } from './components/navbar';
import { SideBar } from './components/sidebar';
import { Workspace, NameWorkspace } from './components/workspace';
import { BoardModal } from './components/board';


function App() {
  const [openModal, setOpenModal] = useState(false);
  const [show, setShow] = useState(false);
  const [workspaces, setWorkspaces] = useState([]);

  function addWorkspace(wksp) {
    setWorkspaces([...workspaces, {title: wksp}])
  }

  function deleteWorkspace(title) {
    setWorkspaces(workspaces.filter(wksp => wksp.title !== title))
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
        
        <span className='cursor-pointer text-m pt-3' onClick={() => setShow(!show)}>New workspace</span>

        <NameWorkspace show={show} addWorkspace={addWorkspace} close={() => setShow(!show)}/>

        <BoardModal openModal={openModal} closeModal={() => setOpenModal(!openModal)}/>

        {workspaces.map((wksp, index) => 
          <Workspace title={wksp} key={index} deleteWorkspace={deleteWorkspace} openModal={() => setOpenModal(!openModal)}/>
        )}

      </div>

    </div>
    </div>
    </>
  )
}

export default App
