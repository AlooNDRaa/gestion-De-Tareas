import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import Login from './login';
import PrivateRoutes from '../components/privateRoutes';
import Home from './home';
import Seccion2 from './Taablers';
import Stats from './stadistics';
import MyApp from './calendar';
import Error from './404';


function App() {
  const [user, setUser] = useState ({name: '', isAuthenticated: false})

  const login = (username) => {
    setUser({name: username, isAuthenticated: true})
  }
  
  const logout = () => {
    setUser({name: '', isAuthenticated: false})
  }

  return(
    <BrowserRouter>
    <Routes >
      <Route element={<PrivateRoutes auth={user}/>}>
        <Route path='/' element={<Home/>}/>
        <Route path= '/boards' element={<Seccion2/>}/>
        <Route path= '/stats' element={<Stats/>}/>
        <Route path= '/calendar' element= {<MyApp/>} />
      </Route>
      <Route path="/login" element={<Login />}/>
      {/* <Route path= '*' element= {<Error/>} />  */}
      {/* Ruteo de error a otros enlaces que no sean los marcados */}
    </Routes>
    </BrowserRouter>
  )
 
}


export default App
