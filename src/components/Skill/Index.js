import React, { useState, useEffect } from 'react';
import Skills from '../Skill/Skills';
import SkillService from '../../services/skill_service';
import AuthService from '../../services/auth_service';
import {
  FaLongArrowAltLeft,
  FaLongArrowAltRight
} from 'react-icons/fa';

function Index () {
  const [skills, setSkills] = useState([])
  const [page, setPage] = useState(1)
  const [skillStatus, setSkillStatus] = useState(2)

  useEffect(() => {
    SkillService.fetchSkillsByStatus(skillStatus, page).then((response) => {
      setSkills(response)
    })
  }, [skillStatus, page])

  function onChange(event) {
    setSkillStatus(parseInt(event.target.value))
  }

  return (
    <div>
      {skills.map(skill => (
        <Skills key={skill.id} skill={skill} />
      ))}
      <div>
        <input type="radio" value="1" name="skillStatus" checked={skillStatus === 1} onChange={onChange} /> Unpublished
        <input type="radio" value="2" name="skillStatus" checked={skillStatus === 2} onChange={onChange} /> Published
      </div>
      <div>
        <button onClick={() => setPage(1)}>First Page</button>
        <button><FaLongArrowAltLeft onClick={() => {if(page>1) setPage(page - 1)}} /></button>
        <button><FaLongArrowAltRight onClick={() => {if(skills.length===20) setPage(page + 1)}} /></button>
      </div>
    </div>
  );
}

export default Index;
