import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useSelector, useDispatch } from "react-redux";
import Header from './components/header.jsx';
import Hero from './components/Hero.jsx';
import Skills from './components/Skills.jsx';
import PersonalContextProvider from './contexts/personalContext.jsx';


function App() {


  return (
    <PersonalContextProvider>
    <div className="w-full max-w-360 mx-auto min-h-screen bg-white dark:bg-black text-black dark:text-white">
    <Header />

    <Hero />

    <Skills/>

    <hr className='h-[1px] w-[1134px] mx-auto mt-[42px] mb-[39px] bg-[#BAB2E7] border-none'/>
    </div>
</PersonalContextProvider>
  )
}

export default App