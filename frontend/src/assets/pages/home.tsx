import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { NavBar, NavBarMobile } from '../components/navbar';
import { SideBar } from '../components/sidebarhome';
import { Workspace, NameWorkspace } from '../components/workspace';

function Home() {
  const [show, setShow] = useState(false);
  const [workspaces, setWorkspaces] = useState([]);
  const [theme, setTheme] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    // Realiza una solicitud HTTP para obtener los datos de los tableros desde tu API
    fetch("/tableros") // Utiliza la misma ruta que configuraste en tu servidor
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

  // Función para crear un nuevo tablero
  function createNewWorkspace(title, url) {
    const newWorkspace = {
      title,
      url,
      tasks: [], // Puedes inicializar las tareas como un array vacío o según tus necesidades
    };

    // Agrega el nuevo tablero a la lista de workspaces
    setWorkspaces([...workspaces, newWorkspace]);

    // Navega a la URL única del nuevo tablero
    navigate(`/boards/${url}`);
  }

  return (
    <>
      <NavBar theme={theme} changeTheme={() => { setTheme(!theme) }} />
      <NavBarMobile theme={theme} />
      <div className={`flex min-h-screen w-full ${theme ? 'dark:bg-[#031124]' : 'bg-lightmode-blanco'}`}>
        <SideBar theme={theme} />
        <div className={`desktop:p-7 mobile:p-4  ${theme ? 'text-[#C6EDF6]' : 'text-lightmode-azul'} desktop:text-xl w-screen`}>
          <div className='py-3 z-2'>
            <h1 className=''>Opened Recently</h1>
            <ul>
              {/* Puedes mostrar aquí los tableros abiertos recientemente si lo deseas */}
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
                // Pasa la función createNewWorkspace como prop
                addWorkspace={(title, url) => createNewWorkspace(title, url)}
                close={() => setShow(!show)}
                theme={theme}
              />
            )}
            {/* Resto del código... */}
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
