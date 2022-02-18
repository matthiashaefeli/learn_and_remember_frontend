import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { useParams } from "react-router-dom";
import SkillService from '../../services/skill_service'
import Comment from '../Comment/Index'

const Skill = () => {
  const [skill, setSkill] = useState({});
  const [language, setLanguage] = useState({});
  const [user, setUser] = useState({});
  const [comments, setComments] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    SkillService.fetchSkill(id, setSkill, setLanguage, setComments, setUser)
  }, []);

  const { title, status } = skill
  const { label } = language
  const { name } = user

  return (
    <div>
      <p>Title: {title}</p>
      <p>Status: {status}</p>
      <p>Language: {label}</p>
      <p>User: {name}</p>
      <p>Comments:</p>
      {comments.map(comment => (
          <Comment key={comment.id} comment={comment} />
        ))}
    </div>
  );
};

export default Skill;