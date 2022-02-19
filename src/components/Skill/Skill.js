import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { useParams } from "react-router-dom";
import SkillService from '../../services/skill_service'
import Comment from '../Comment/Index'

const Skill = () => {
  const [skill, setSkill] = useState({});
  const { id } = useParams();

  useEffect(() => {
    SkillService.fetchSkill(id, setSkill)
  }, []);

  return (
    <div>
      <p>Title: {skill?.title}</p>
      <p>Status: {skill?.status}</p>
      <p>Language: {skill?.language?.label}</p>
      <p>User: {skill?.user?.name}</p>
      <p>Comments:</p>
      {skill?.comments?.map(comment => (
          <Comment key={comment.id} comment={comment} />
        ))}
    </div>
  );
};

export default Skill;