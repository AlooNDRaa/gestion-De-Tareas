import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { NavBar, NavBarMobile } from '../components/navbar';
import { SideBar } from '../components/sidebarhome';
import { Workspace, NameWorkspace } from '../components/workspace';
import { v4 as uuidv4 } from 'uuid'; 

function Home() {
  const [show, setShow] = useState(false);
  const [workspaces, setWorkspaces] = useState([]);
  const [theme, setTheme] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("/boards")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Error al obtener los tableros");
        }
        return response.json();
      })
      .then((data) => {
        setWorkspaces(data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  function createNewWorkspace(title, _url) {
    const newWorkspace = {
      title,
      url: uuidv4(),
      tasks: [],
    };

    fetch("/create-board", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newWorkspace),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Error al crear el tablero");
        }
        return response.json();
      })
      .then((data) => {
        console.log("Tablero creado:", data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });

    setWorkspaces([...workspaces, newWorkspace]);
    navigate(`/boards/${newWorkspace.url}`);
  }

  useEffect(() => {
    fetch("/boards")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Error al obtener los tableros");
        }
        return response.json();
      })
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  return (
    <>
      <NavBar theme={theme} changeTheme={() => setTheme(!theme)} />
      <NavBarMobile theme={theme} />
      <div className={`flex min-h-screen w-full ${theme ? 'dark:bg-[#031124]' : 'bg-lightmode-blanco'}`}>
        <SideBar theme={theme} />
        <div className={`desktop:p-7 mobile:p-4 ${theme ? 'text-[#C6EDF6]' : 'text-lightmode-azul'} desktop:text-xl w-screen`}>
          <div className='py-3 z-2'>
            <h1 className=''>Opened Recently</h1>
            <ul>
            </ul>
          </div>
          <div>
            <h1 className='pb-3'>Your Workspaces</h1>
            {!show ? (
              <button
                className={`cursor-pointer text-sm ${theme ? 'bg-darkmode-verdeagua2' : 'bg-lightmode-azul'} ${theme ? 'text-darkmode-azul2' : 'text-lightmode-blanco'} ${theme ? 'shadow-lg shadow-[#031124]' : 'shadow-lg shadow-[#dff5ed]'} p-2 rounded-md font-semibold`}
                onClick={() => setShow(!show)}
              >
                New workspace
              </button>
            ) : (
              <NameWorkspace
                addWorkspace={(title, url) => createNewWorkspace(title, url)}
                close={() => setShow(!show)}
                theme={theme}
              />
            )}
            <ul>
              {workspaces.map((workspace) => (
                <li key={workspace.url}>
                  <Workspace wksp={addEventListener} deleteWorkspace={addEventListener} editWorkspace={addEventListener} editName={addEventListener} theme={theme} />
                </li>
              ))}
            </ul>            
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
