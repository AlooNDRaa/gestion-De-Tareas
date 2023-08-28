import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Login from './login';
import Home from './home'
import Seccion2 from './Taablers';
import Stats from './stadistics';


function App() {
  
  return(
    <BrowserRouter>
    <Routes >
      <Route path="/" element={<Navigate to="/login"/>}/>
      <Route path="/login" element={<Login />}/>
      <Route path='/home' element={<Home/>}/>
      <Route path= '/Taablers' element={<Seccion2/>}/>
      <Route path= '/Stadistics' element={<Stats/>}/>
    </Routes>
    </BrowserRouter>
  )
 
}


export default App
