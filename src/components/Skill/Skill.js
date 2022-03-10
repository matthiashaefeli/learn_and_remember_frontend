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
  }, [id]);

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

  function handleCancel() {
    setShowForm(false)
  }

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
      <div className='skill-buttons'>
        {isOwner() && (
          <button onClick={handleDelete} className='button-6'>Delete Skill</button>
        )}
        {!showForm && isDraft() && (
          <button onClick={handleUpdate} className='button-6'>Update Skill</button>
        )}
        {isNotDraft() && (
          <button onClick={handleChangeStatus} className='button-6'>Make {statusValue().label}</button>
        )}
        {showForm && (
          <button onClick={handleCancel} className='button-6'>Cancel</button>
        )}
      </div>
      {!showForm && (
        <div className='skill-body-container'>
          <h2>{skill?.title}</h2>
          <p>Language: {skill?.language?.label}</p>
          {user && (
            <p>Learned by: {skill?.user?.name}</p>
          )}
          <hr/>
          <p>Text:</p>
          <div dangerouslySetInnerHTML={{ __html: unescape(skill?.body) }} />
          <hr/>
        </div>
      )}
      {!showForm && (<div className='skill-comment-container'>
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
        {skill?.comments?.length > 0 && (<div className='skill-comment'>
          <p>Comments:</p>
          {skill?.comments?.map(comment => (
            <Comment key={comment.id} comment={comment} user={user} />
          ))}
        </div>)}
      </div>)}
      {showForm && (
        <div className='update-skill-form'>
          <SkillForm create_or_update='update' skill={skill} />
        </div>
      )}
    </div>
  );
};

export default Skill;