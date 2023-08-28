import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Login from './login';
import Home from './home'
import Seccion2 from './Taablers';


function App() {
  
  return(
    <BrowserRouter>
    <Routes >
      <Route path="/" element={<Navigate to="/login"/>}/>
      <Route path="/login" element={<Login />}/>
      <Route path='/home' element={<Home/>}/>
      <Route path= '/Taablers' element={<Seccion2/>}/>
    </Routes>
    </BrowserRouter>
  )
 
}


export default App
