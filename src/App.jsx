import { Outlet } from 'react-router-dom'
import { useContext } from "react";


import './App.css'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import ThemeContext from './components/ThemeProvider/ThemeContext';

function App() {
  const { theme, toggleTheme } = useContext(ThemeContext);


  return (
    <div  className={`home ${theme}`}>
      <Navbar toggleTheme={toggleTheme}></Navbar>
      <div className='min-h-[calc(100vh-136px)]'><Outlet></Outlet></div>
      <Footer></Footer>
    </div>
  )
}

export default App
