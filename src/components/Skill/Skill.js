import React, {useState, useEffect} from 'react';
import { useParams } from "react-router-dom";
import SkillService from '../../services/skill_service';
import Comment from '../Comment/Index';
import TextEditor from '../TextEditor/TextEditor';
import './styles.scss';
import AuthService from '../../services/auth_service';
import CommentService from '../../services/comment_service';
import SkillForm from '../Forms/SkillForm';

function Skill() {
  const [skill, setSkill] = useState({});
  const { id } = useParams();
  const user = AuthService.getCurrentUser()
  const [showForm, setShowForm] = useState(false)

  useEffect(() => {
    SkillService.fetchSkill(id).then((response) => {
      setSkill(response)
    })
  }, []);

  function handleSubmit() {
    const body = escape(document.getElementsByClassName('ProseMirror')[0].innerHTML)
    CommentService.addComment(user.authenticate.token, body, id)
  };

  function handleDelete() {
    if (window.confirm("Delete the skill?")) {
      SkillService.deleteSkill(skill.id, user.authenticate.token)
    }
  };

  function handleUpdate() {
    setShowForm(true)
  };

  function handleChangeStatus() {
    SkillService.updateSkill(user.authenticate.token,
                             skill.title,
                             skill.language,
                             statusValue(),
                             skill.body,
                             skill.id)
  };

  function isOwner() {
    return user && skill?.user?.id === user.user.id
  };

  function isDraft() {
    return isOwner() && skill?.status === 'draft'
  };

  function isNotDraft() {
    return isOwner() && !isDraft()
  };

  function statusValue() {
    if (skill.status === 'published') {
      return {value: 1, label: 'Unpublished'}
    } else {
      return {value: 2, label: 'Published'}
    }
  };

  return (
    <div className='skill'>
      <div>
        {isOwner() && (
          <button onClick={handleDelete} className='button-6'>Delete Skill</button>
        )}
        {!showForm && isDraft() && (
          <button onClick={handleUpdate} className='button-6'>Update Skill</button>
        )}
        {isNotDraft() && (
          <button onClick={handleChangeStatus} className='button-6'>Make {statusValue().label}</button>
        )}
      </div>
      {!showForm && (
        <>
          <p>Language: {skill?.language?.label}</p>
          <p>Title: {skill?.title}</p>
          <p>Text:</p>
          <div dangerouslySetInnerHTML={{ __html: unescape(skill?.body) }} />
          {user && (
            <p>User: {skill?.user?.name}</p>
          )}
          <p>Comments:</p>
          {user && (
            <div className='skill-comment-form'>
              <TextEditor />
              <button
                type="submit"
                onClick={handleSubmit}
              >
                Submit
              </button>
            </div>
          )}
        </>
      )}
      {skill?.comments?.map(comment => (
        <Comment key={comment.id} comment={comment} user={user} />
      ))}
      {showForm && (
        <SkillForm create_or_update='update' skill={skill} />
      )}
    </div>
  );
};

export default Skill;