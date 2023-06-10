import { Outlet } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'

function App() {

  return (
    <>
      <Navbar></Navbar>
      <div className='min-h-[calc(100vh-136px)]'><Outlet></Outlet></div>
      <Footer></Footer>
    </>
  )
}

export default App
