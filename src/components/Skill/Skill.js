import React, {useState, useEffect} from 'react';
import { useParams } from "react-router-dom";
// import axios from 'axios';
import SkillService from '../../services/skill_service'

const Skill = () => {
  const [skill, setSkill] = useState('');
  const { id } = useParams();

  useEffect(() => {
    SkillService.fetchSkill(id)
  });

  return (
    <div>
    </div>
  );
};

export default Skill;