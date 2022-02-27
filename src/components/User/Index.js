import React, { useState, useEffect } from 'react';
import Skills from '../Skill/Skills';
import SkillService from '../../services/skill_service';
import {
  FaLongArrowAltLeft,
  FaLongArrowAltRight,
  FaDiceOne
} from 'react-icons/fa';
import AuthService from '../../services/auth_service';

function Index () {
  const [skills, setSkills] = useState([])
  const [page, setPage] = useState(1)
  const [skillStatus, setSkillStatus] = useState(2)

  useEffect(() => {
    const user = AuthService.getCurrentUser()
    const user_id = parseInt(user.user.id)
    SkillService.fetchSkillsByUser(user_id, skillStatus, page).then((response) => {
      setSkills(response)
    })
  }, [skillStatus, page])

  function onChange(event) {
    setSkillStatus(parseInt(event.target.value))
  }

  return (
    <div>
      <div className='pagination-container'>
        {AuthService.getCurrentUser() && (
          <div>
            <input type="radio" value="0" name="skillStatus" checked={skillStatus === 0} onChange={onChange} /> Draft
            <input type="radio" value="1" name="skillStatus" checked={skillStatus === 1} onChange={onChange} /> Unpublished
            <input type="radio" value="2" name="skillStatus" checked={skillStatus === 2} onChange={onChange} /> Published
        </div>
        )}
        <div className='pagination-arrow'>
        <button className='button-6' onClick={() => setPage(1)}><FaDiceOne /></button>
          <button className='button-6' onClick={() => {if(page>1) setPage(page - 1)}}><FaLongArrowAltLeft /></button>
          <button className='button-6' onClick={() => {if(skills.length===20) setPage(page + 1)}}><FaLongArrowAltRight /></button>
        </div>
      </div>
      <div className='skills-container'>
        {skills.map(skill => (
          <Skills key={skill.id} skill={skill} />
        ))}
      </div>
    </div>
  );
}

export default Index;