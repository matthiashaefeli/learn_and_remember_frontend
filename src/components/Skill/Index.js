import React, { useState, useEffect } from 'react';
import Skills from '../Skill/Skills';
import SkillService from '../../services/skill_service';
import './styles.scss';
import {
  FaLongArrowAltLeft,
  FaLongArrowAltRight,
  FaDiceOne
} from 'react-icons/fa';
import LanguageService from '../../services/language_service';
import Select from 'react-select';

function Index () {
  const [skills, setSkills] = useState([])
  const [page, setPage] = useState(1)
  const [languageOptions, setLanguageOptions] = useState([])
  const [language, setLanguage] = useState('')

  useEffect(() => {
    if(language){
      SkillService.fetchSkillsByLanguage(language, page).then((response) => {
        setSkills(response)
      })
    } else {
      SkillService.fetchSkillsByStatus(2, page).then((response) => {
        setSkills(response)
      })
    }

  }, [language, page])

  useEffect(() => {
    LanguageService.fetchLanguages();
    setLanguageOptions(LanguageService.getLanguages())
  },[])

  function onLanguageSelect(event) {
    setLanguage(event.label)
    setPage(1)
  }

  function clear() {
    setLanguage('')
    setPage(1)
  }

  return (
    <div>
      <div className='pagination-container'>
        <Select
          value={language}
          onChange={onLanguageSelect}
          options={languageOptions}
          placeholder={language || 'Filter Language...'}
        />
        <div className='pagination-arrow'>
          <button className='button-6' onClick={() => setPage(1)}><FaDiceOne /></button>
          <button className='button-6' onClick={() => {if(page>1) setPage(page - 1)}}><FaLongArrowAltLeft /></button>
          <button className='button-6' onClick={() => {if(skills.length===20) setPage(page + 1)}}><FaLongArrowAltRight /></button>
        </div>
        <div className='pagination-arrow'>
          <button className='button-6' onClick={() => clear()}>Clear</button>
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
