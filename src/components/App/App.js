import React, { useEffect } from 'react';
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
import User from '../User/Index';
import Settings from '../Settings/Settings';

const App = () => {
  useEffect(() => {
    document.title = "Easy Remind Me"
  }, [])

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
        <Route path="/user" element={<User />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </>
  )
};

export default App;
