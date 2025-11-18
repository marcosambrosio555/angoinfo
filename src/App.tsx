import { Outlet } from 'react-router-dom'
import './App.css'


function App() {

  return (
    <>
      <div className='bg-stone-50 text-sky-900'>
        <Outlet />
      </div>
    </>
  )
}

export default App
