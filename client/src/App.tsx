import './App.css'
import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';


function App() {
  return (
    <>
    <div id='NavBar'>
      <Navbar />
    </div>
      <main>
        <Outlet />
      </main>
  </>
  )
}
export default App