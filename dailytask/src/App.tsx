import { NavBar, SideBar } from './components/home'
import './App.css'

function App() {

  return (
    <>
      <NavBar/>
      <div className="flex">
      <SideBar/>
      <div>
        <h4>Content</h4>
      </div>
      </div>
    </>
  )
}

export default App
