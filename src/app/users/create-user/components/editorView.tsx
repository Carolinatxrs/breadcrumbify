import React from 'react'

import './styles/index.css'

import { Content, EditorContent, useEditor } from '@tiptap/react'
import Document from '@tiptap/extension-document'
import Paragraph from '@tiptap/extension-paragraph'
import Text from '@tiptap/extension-text'
import StarterKit from '@tiptap/starter-kit'
import TextStyle from '@tiptap/extension-text-style'

interface EditorViewProps {
  value: Content
}

export const EditorView = ({ value }: EditorViewProps) => {
  const editor = useEditor({
    shouldRerenderOnTransaction: false,
    editable: false,
    content: value,
    autofocus: false,
    extensions: [StarterKit, TextStyle],
  })

  if (!editor) {
    return null
  }

  return (
    <>
      <EditorContent editor={editor} />
    </>
  )
}