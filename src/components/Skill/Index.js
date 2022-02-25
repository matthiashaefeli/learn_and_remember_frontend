import React, { useState, useEffect } from 'react';
import Skills from '../Skill/Skills';
import SkillService from '../../services/skill_service';
import {
  FaLongArrowAltLeft,
  FaLongArrowAltRight
} from 'react-icons/fa';

function Index () {
  const [skills, setSkills] = useState([])
  const [page, setPage] = useState(1)

  useEffect(() => {
    SkillService.fetchSkillsByStatus(2, page).then((response) => {
      setSkills(response)
    })
  })

  return (
    <div>
      {skills.map(skill => (
        <Skills key={skill.id} skill={skill} />
      ))}
      <div>
        <button onClick={() => setPage(1)}>First Page</button>
        <button><FaLongArrowAltLeft onClick={() => {if(page>1) setPage(page - 1)}} /></button>
        <button><FaLongArrowAltRight onClick={() => {if(skills.length===20) setPage(page + 1)}} /></button>
      </div>
    </div>
  );
}

export default Index;
