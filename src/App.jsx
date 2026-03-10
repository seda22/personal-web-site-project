import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useSelector, useDispatch } from "react-redux";
import { setLanguage } from "./store/actions.js";
import Header from './components/header.jsx';
import Hero from './components/Hero.jsx';


function App() {

  const dispatch = useDispatch();

  const data = useSelector((state) => state);

  const [language, setLanguageAction] = useState("en");





  function clickHandler() {

    const newLang = language === "en" ? "tr" : "en";

    dispatch(setLanguage(newLang));

    setLanguageAction(newLang);
  }

  return (
    <div className="w-full max-w-[1440px] mx-auto">
    <Header />

    <Hero />
      {data.personal.bio}
      <br />
      <button onClick={clickHandler}>{language === "tr" ? "For English" : "Türkçe"}</button>
    </div>
  )
}

export default App