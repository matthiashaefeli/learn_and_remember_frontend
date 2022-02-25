import React, {useState, useEffect} from 'react';
import { useParams } from "react-router-dom";
import SkillService from '../../services/skill_service';
import Comment from '../Comment/Index';
import TextEditor from '../TextEditor/TextEditor';
import './styles.scss';
import AuthService from '../../services/auth_service';
import CommentService from '../../services/comment_service';

const Skill = () => {
  const [skill, setSkill] = useState({});
  const { id } = useParams();

  useEffect(() => {
    SkillService.fetchSkill(id).then((response) => {
      setSkill(response)
    })
  }, []);

  function handleSubmit() {
    const user = AuthService.getCurrentUser()
    const body = escape(document.getElementsByClassName('ProseMirror')[0].innerHTML)
    CommentService.addComment(user.authenticate.token, body, id)
  }

  return (
    <div>
      <p>Title: {skill?.title}</p>
      <p>Text:</p>
      <div dangerouslySetInnerHTML={{ __html: unescape(skill?.body) }} />
      <p>Status: {skill?.status}</p>
      <p>Language: {skill?.language?.label}</p>
      <p>User: {skill?.user?.name}</p>
      <p>Comments:</p>
      <div className='skill-comment-form'>
        <TextEditor />
        <button
          type="submit"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </div>
      {skill?.comments?.map(comment => (
        <Comment key={comment.id} comment={comment} />
      ))}
    </div>
  );
};

export default Skill;