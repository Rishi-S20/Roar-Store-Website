import React from "react";
import AnimatedBackground from './Components/AnimatedBackground';
import About from './Components/About';
import Promotions from './Components/Promotions'
import Socials from './Components/Socials'
import Employee from './Components/Employee'
import EmployeeAccess from './EmployeeAccess';
import Navbar from './Components/Navbar';
import PopularItems from "./Components/PopularItems";
import { Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';

export default function App() {
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);
  return (
    <>
      <div className="font-sora">
        <Navbar theme={theme} setTheme={setTheme} />
        {/* <Routes> */}
        {/* <Route path="/employee-access" element={<EmployeeAccess />} />
          <Route path="/" element={ */}
        <>
          <AnimatedBackground theme={theme}>
            <div className="flex flex-col gap-8 p-8">
              <h1 className="text-7xl font-bold text-center justify-content" >Welcome to the FHS Roar Store</h1>
              <h2 className="text-3xl text-center justify-content" >Your One-Stop Shop for Saber Spirit</h2>
            </div>
          </AnimatedBackground>
          <About theme={theme} />
          <PopularItems theme={theme} />
          <Promotions theme={theme} />
          <Socials theme={theme} />
          {/* <Employee /> */}
        </>
        {/* } /> */}
        {/* </Routes> */}
      </div>
    </>
  );
}

