import React from 'react';
import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import MenuBar from './MenuBar';
import Underline from '@tiptap/extension-underline'
import Link from '@tiptap/extension-link'
import './styles.scss';


function TextEditor(props) {
  const { text } = props
  const editor = useEditor({
    extensions: [
      StarterKit,
      Underline,
      Link,
    ],
    content: text,
    editorProps: {
      attributes: {
        class: 'editor-prose',
      },
    },
  })

  return (
    <div className='rich-text-form'>
      <div className='rich-text-menu'>
        <MenuBar editor={editor} />
      </div>
      <div id="element">
        <EditorContent editor={editor} />
      </div>
    </div>
  )
}

export default TextEditor