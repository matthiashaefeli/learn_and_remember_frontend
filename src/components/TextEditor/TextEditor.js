import React from 'react';
import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import MenuBar from './MenuBar';
import Dropcursor from '@tiptap/extension-dropcursor'
import Underline from '@tiptap/extension-underline'
import Focus from '@tiptap/extension-underline'
import Link from '@tiptap/extension-link'
import './styles.scss';


export default () => {
  const editor = useEditor({
    extensions: [
      StarterKit,
      Dropcursor,
      Underline,
      Focus,
      Link,
    ],
    content: `
    `,
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
      <div class="element">
        <EditorContent editor={editor} />
      </div>
    </div>
  )
}