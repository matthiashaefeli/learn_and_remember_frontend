import React from 'react';
import {
  Routes,
  Route
} from "react-router-dom";
import Navbar from '../Navbar/Navbar';
import Home from '../Home/Home';
import Signup from '../Signup/Signup';
import Signin from '../Signin/Signin';
import Index from '../Skill/Index';
import AddSkill from '../Skill/AddSkill';
import Skill from '../Skill/Skill';

const App = () => {
  return(
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/skills" element={<Index />} />
        <Route path="/skills/:id" element={<Skill />} />
        <Route path="/addSkill" element={<AddSkill />} />
      </Routes>
    </>
  )
};

export default App;
