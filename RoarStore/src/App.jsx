import React from "react";
import FloatingParticles from './Components/FloatingParticles';
import About from './Components/About';
import Promotions from './Components/Promotions'
import Socials from './Components/Socials'
import Employee from './Components/Employee'
import EmployeeAccess from './EmployeeAccess';
import Navbar from './Components/Navbar';
import { Routes, Route } from 'react-router-dom';

export default function App() {
  return (
    <>
      <div className="font-sora">
        <Navbar />



        <FloatingParticles>
          <h1 className="text-5xl font-bold">Welcome to the FHS Roar Store</h1>
        </FloatingParticles>
        <About />
        <Promotions />
        <Socials />
        <Employee />
      </div>


    </>
  );
}

