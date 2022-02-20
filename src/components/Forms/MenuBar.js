import React from 'react'
import './styles.scss'

const MenuBar = ({ editor }) => {
  if (!editor) {
    return null
  }

  return (
    <div className='formContainer'>
      <div
        onClick={() => editor.chain().focus().toggleBold().run()}
        className={'bold ' + (editor.isActive('bold') ? 'is-active' : '')}>
        B
      </div>
      <div
        onClick={() => editor.chain().focus().toggleItalic().run()}
        className={'italic ' + (editor.isActive('italic') ? 'is-active' : '')}>
        I
      </div>
      <div
        onClick={() => editor.chain().focus().toggleStrike().run()}
        className={editor.isActive('strike') ? 'is-active' : ''}
      >
        strike
      </div>
      <div
        onClick={() => editor.chain().focus().toggleCode().run()}
        className={editor.isActive('code') ? 'is-active' : ''}
      >
        code
      </div>
      <div onClick={() => editor.chain().focus().unsetAllMarks().run()}>
        clear marks
      </div>
      <div onClick={() => editor.chain().focus().clearNodes().run()}>
        clear nodes
      </div>
      <div
        onClick={() => editor.chain().focus().setParagraph().run()}
        className={editor.isActive('paragraph') ? 'is-active' : ''}
      >
        paragraph
      </div>
      <div
        onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
        className={editor.isActive('heading', { level: 1 }) ? 'is-active' : ''}
      >
        h1
      </div>
      <div
        onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
        className={editor.isActive('heading', { level: 2 }) ? 'is-active' : ''}
      >
        h2
      </div>
      <div
        onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
        className={editor.isActive('heading', { level: 3 }) ? 'is-active' : ''}
      >
        h3
      </div>
      <div
        onClick={() => editor.chain().focus().toggleHeading({ level: 4 }).run()}
        className={editor.isActive('heading', { level: 4 }) ? 'is-active' : ''}
      >
        h4
      </div>
      <div
        onClick={() => editor.chain().focus().toggleHeading({ level: 5 }).run()}
        className={editor.isActive('heading', { level: 5 }) ? 'is-active' : ''}
      >
        h5
      </div>
      <div
        onClick={() => editor.chain().focus().toggleHeading({ level: 6 }).run()}
        className={editor.isActive('heading', { level: 6 }) ? 'is-active' : ''}
      >
        h6
      </div>
      <div
        onClick={() => editor.chain().focus().toggleBulletList().run()}
        className={editor.isActive('bulletList') ? 'is-active' : ''}
      >
        bullet list
      </div>
      <div
        onClick={() => editor.chain().focus().toggleOrderedList().run()}
        className={editor.isActive('orderedList') ? 'is-active' : ''}
      >
        ordered list
      </div>
      <div
        onClick={() => editor.chain().focus().toggleCodeBlock().run()}
        className={editor.isActive('codeBlock') ? 'is-active' : ''}
      >
        code block
      </div>
      <div
        onClick={() => editor.chain().focus().toggleBlockquote().run()}
        className={editor.isActive('blockquote') ? 'is-active' : ''}
      >
        blockquote
      </div>
      <div onClick={() => editor.chain().focus().setHorizontalRule().run()}>
        horizontal rule
      </div>
      <div onClick={() => editor.chain().focus().setHardBreak().run()}>
        hard break
      </div>
      <div onClick={() => editor.chain().focus().undo().run()}>
        undo
      </div>
      <div onClick={() => editor.chain().focus().redo().run()}>
        redo
      </div>
    </div>
  )
}

export default MenuBar;