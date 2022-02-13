import React from 'react';
import {
  Routes,
  Route
} from "react-router-dom";
import Navbar from '../Navbar/Navbar';
import Home from '../Home/Home';
import Signup from '../Signup/Signup';
import Signin from '../Signin/Signin';
import Skills from '../Skill/Home';
import CreateSkill from '../Skill/CreateSkill';

const App = () => {
  return(
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/create_skill" element={<CreateSkill />} />
      </Routes>
    </>
  )
};

export default App;
