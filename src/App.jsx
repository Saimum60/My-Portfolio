import React, { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Aos from 'aos'
import Skills from './components/Skills'
import Hero from './Hero'
import Contact from './components/Contact'
import About from './components/About'
import Project from './components/Project'


const App = () => {

  const[darkMode, setDarkMode]=useState(true)

  useEffect(()=>{
    Aos.init({
      duration:1000,
      once: false,
      offset:100
    });
    document.documentElement.classList.add('dark');
  },[]);
  const toggleDarkMode =()=>{
    const newMode =!darkMode;
    setDarkMode(newMode);
    document.documentElement.classList.toggle('dark')
  };
  return (
    <div
    className={
      darkMode?'bg-linear-to-br from-gray-900 via-[#0d182e] to-gray-900 min-h-screen'
      :'bg-linear-to-br from-gray-50 to-blue-50 min-h-screen'
    }
    >
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode}/>
      <Hero darkMode={darkMode} />
      <About darkMode={darkMode} />
      <Skills darkMode={darkMode} />
      <Project darkMode={darkMode} />
      <Contact darkMode={darkMode} />
    </div>
  )
}

export default App