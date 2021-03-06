import React from 'react'
import {
  FaBold,
  FaItalic,
  FaStrikethrough,
  FaUnderline,
  FaLink,
  FaCode,
  FaList,
  FaListOl,
  FaQuoteRight,
  FaUndo,
  FaRedo,
  FaRegFileCode
} from 'react-icons/fa';
import './styles.scss'

const MenuBar = ({ editor }) => {
  if (!editor) {
    return null
  }

  return (
    <div className='menu-bar-container'>
      <div className='menu-bar-rows'>
        <div
          onClick={() => editor.chain().focus().toggleBold().run()}
          className={editor.isActive('bold') ? 'is-active' : ''}>
          <FaBold />
        </div>
        <div
          onClick={() => editor.chain().focus().toggleItalic().run()}
          className={editor.isActive('italic') ? 'is-active' : ''}>
          <FaItalic />
        </div>
        <div
          onClick={() => editor.chain().focus().toggleStrike().run()}
          className={editor.isActive('strike') ? 'is-active' : ''}>
          <FaStrikethrough />
        </div>
        <div
          onClick={() => editor.chain().focus().toggleUnderline().run()}
          className={editor.isActive('underline') ? 'is-active' : ''}>
          <FaUnderline />
        </div>
        <div
          onClick={() => editor.chain().focus().toggleLink().run()}
          className={editor.isActive('link') ? 'is-active' : ''}>
          <FaLink />
        </div>
        <div
          onClick={() => editor.chain().focus().toggleCode().run()}
          className={editor.isActive('code') ? 'is-active' : ''}>
          <FaCode />
        </div>
        <div
          onClick={() => editor.chain().focus().toggleBulletList().run()}
          className={editor.isActive('bulletList') ? 'is-active' : ''}>
          <FaList />
        </div>
        <div
          onClick={() => editor.chain().focus().toggleOrderedList().run()}
          className={editor.isActive('orderedList') ? 'is-active' : ''}>
          <FaListOl />
        </div>
        <div
          onClick={() => editor.chain().focus().toggleCodeBlock().run()}
          className={editor.isActive('codeBlock') ? 'is-active' : ''}>
          <FaRegFileCode />
        </div>
        <div
          onClick={() => editor.chain().focus().toggleBlockquote().run()}
          className={editor.isActive('blockquote') ? 'is-active' : ''}>
          <FaQuoteRight />
        </div>
      </div>
      <div className='menu-bar-rows'>
        <div
          onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
          className={editor.isActive('heading', { level: 1 }) ? 'is-active' : ''}>
          <b>h1</b>
        </div>
        <div
          onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
          className={editor.isActive('heading', { level: 2 }) ? 'is-active' : ''}>
          <b>h2</b>
        </div>
        <div
          onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
          className={editor.isActive('heading', { level: 3 }) ? 'is-active' : ''}>
          <b>h3</b>
        </div>
        <div
          onClick={() => editor.chain().focus().toggleHeading({ level: 4 }).run()}
          className={editor.isActive('heading', { level: 4 }) ? 'is-active' : ''}>
          <b>h4</b>
        </div>
        <div
          onClick={() => editor.chain().focus().toggleHeading({ level: 5 }).run()}
          className={editor.isActive('heading', { level: 5 }) ? 'is-active' : ''}>
          <b>h5</b>
        </div>
        <div
          onClick={() => editor.chain().focus().toggleHeading({ level: 6 }).run()}
          className={editor.isActive('heading', { level: 6 }) ? 'is-active' : ''}>
          <b>h6</b>
        </div>
        <div onClick={() => editor.chain().focus().setHorizontalRule().run()}>
          <b>horizontal line</b>
        </div>
      </div>
      <div className='menu-bar-rows'>
        <div onClick={() => editor.chain().focus().undo().run()}>
          <FaUndo />
        </div>
        <div onClick={() => editor.chain().focus().redo().run()}>
          <FaRedo />
        </div>
      </div>
      {/* <div onClick={() => editor.chain().focus().clearNodes().run()}>
        clear nodes
      </div>
      <div
        onClick={() => editor.chain().focus().setParagraph().run()}
        className={editor.isActive('paragraph') ? 'is-active' : ''}
      >
        paragraph
      </div>
      <div onClick={() => editor.chain().focus().setHardBreak().run()}>
        hard break
      </div> */}
    </div>
  )
}

export default MenuBar;