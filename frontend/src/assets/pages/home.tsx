import { useState } from 'react';
import { NavBar } from '../../../home/src/components/navbar';
import { SideBar } from '../../../home/src/components/sidebar';
import { Workspace, NameWorkspace } from '../../../home/src/components/workspace';


function Home() {
  const [show, setShow] = useState(false);
  const [workspaces, setWorkspaces] = useState([]);
  const [theme, setTheme] = useState(true); //true for dark (default), false for lightmode
  
  function addWorkspace(wksp) {
    setWorkspaces([...workspaces, {title: wksp}])
  }

  function deleteWorkspace(title) {
    setWorkspaces(workspaces.filter(wksp => wksp.title !== title))
  }

 


  return (
    <>
    <NavBar theme={theme} changeTheme={() => {setTheme(!theme)}}/>
    <div className='flex'>
    <SideBar theme={theme}/>
    <div className={`p-7 ${theme ? 'dark:bg-[#031124]' : 'bg-[#dff5ed]'}  w-full ${theme ? 'dark:text-darkmode-verdeagua1' : 'text-lightmode-azul'} text-xl`}>
      <div className='py-3'>
        <h1 className=''>Opened Recently</h1>
        <ul>

        </ul>
      </div>
      <div className=''>
        <h1 className='pb-3'>Your Workspaces</h1>
        
        <span className='cursor-pointer text-m pt-3' onClick={() => setShow(!show)}>New workspace</span>

        <NameWorkspace show={show} addWorkspace={addWorkspace} close={() => setShow(!show)} theme={theme}/>

        {workspaces.map((wksp, index) => 
          <Workspace title={wksp} key={index} deleteWorkspace={deleteWorkspace} theme={theme}/>
        )}

      </div>

    </div>
    </div>
    </>
  )
}

export default Home;
