import './App.css'
import { Outlet } from 'react-router-dom';



function App() {
  return (
    <>
    {/* <div>
      < />
    </div> */}
      <main>
        <Outlet />
      </main>
  </>
  )
}
export default App