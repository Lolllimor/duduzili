'use client';

import React from 'react';
import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import { Editor } from '@tiptap/react';

import Underline from '@tiptap/extension-underline';
import TextAlign from '@tiptap/extension-text-align';

import {
  Bold,
  Italic,
  List,
  ListOrdered,
  Code,
  Underline as UnderlineIcon,
  AlignCenter,
  AlignLeft,
  AlignRight,
} from 'lucide-react';
import { TextalignCenter } from 'iconsax-react';

interface FormatContentFromBackend {
  (text: string): string;
}

const formatContentFromBackend: FormatContentFromBackend = (text) => {
  if (!text) return '';

  const paragraphs = text.split(/\n\n/);

  const formattedParagraphs = paragraphs.map((para) => {
    const lines = para.split(/\n/);
    return `<p>${lines.join('<br/>')}</p>`;
  });

  return formattedParagraphs.join(' <br/>');
};

const MenuBar = ({ editor }: { editor: Editor | null }) => {
  if (!editor) {
    return null;
  }
  const align = ['left', 'center', 'right'];
  const [alignState, setAlignState] = React.useState(align[0]);

  return (
    <div className="border-b border-gray-200 flex gap-2 ">
      <button
        type="button"
        onClick={() => editor.chain().focus().toggleBold().run()}
        disabled={!editor.can().chain().focus().toggleBold().run()}
        className={`p-2 rounded hover:bg-gray-100 ${
          editor.isActive('bold') ? 'bg-gray-200' : ''
        }`}
        aria-label="Bold"
      >
        <Bold className="w-5 h-5" />
      </button>
      <button
        type="button"
        onClick={() => editor.chain().focus().toggleItalic().run()}
        disabled={!editor.can().chain().focus().toggleItalic().run()}
        className={`p-2 rounded hover:bg-gray-100 ${
          editor.isActive('italic') ? 'bg-gray-200' : ''
        }`}
        aria-label="Italic"
      >
        <Italic className="w-5 h-5" />
      </button>

      <button
        type="button"
        onClick={() => editor.chain().focus().toggleUnderline().run()}
        disabled={!editor.can().chain().focus().toggleUnderline().run()}
        className={`p-2 rounded hover:bg-gray-100 ${
          editor.isActive('underLine') ? 'bg-gray-200' : ''
        }`}
        aria-label="Underline"
      >
        <UnderlineIcon className="w-5 h-5" />
      </button>
      <button
        type="button"
        onClick={() => editor.chain().focus().toggleBulletList().run()}
        disabled={!editor.can().chain().focus().toggleBulletList().run()}
        className={`p-2 rounded hover:bg-gray-100 ${
          editor.isActive('bulletList') ? 'bg-gray-200' : ''
        }`}
        aria-label="Bullet List"
      >
        <List className="w-5 h-5" />
      </button>
      <button
        type="button"
        onClick={() => {
          const nextAlign =
            align[(align.indexOf(alignState) + 1) % align.length];
          editor.chain().focus().setTextAlign(nextAlign).run();
          setAlignState(nextAlign);
        }}
        disabled={!editor.can().chain().focus().setTextAlign(alignState).run()}
        className={`p-2 rounded hover:bg-gray-100 ${
          editor.isActive({ textAlign: alignState !== 'left' })
            ? 'bg-gray-200'
            : ''
        }`}
        aria-label={`Align ${alignState}`}
      >
        {' '}
        <AlignCenter className="w-5 h-5" />
        {/* {alignState === 'center' ? (
          <AlignCenter className="w-5 h-5" />
        ) : alignState === 'left' ? (
          <AlignLeft className="w-5 h-5" />
        ) : (
          <AlignRight className="w-5 h-5" />
        )} */}
      </button>
      {/* <button
        onClick={() => editor.chain().focus().toggleOrderedList().run()}
        disabled={!editor.can().chain().focus().toggleOrderedList().run()}
        className={`p-2 rounded hover:bg-gray-100 ${
          editor.isActive('orderedList') ? 'bg-gray-200' : ''
        }`}
        aria-label="Ordered List"
      >
        <ListOrdered className="w-5 h-5" />
      </button> */}
      {/* <button
        onClick={() => editor.chain().focus().toggleCodeBlock().run()}
        disabled={!editor.can().chain().focus().toggleCodeBlock().run()}
        className={`p-2 rounded hover:bg-gray-100 ${
          editor.isActive('codeBlock') ? 'bg-gray-200' : ''
        }`}
        aria-label="Code Block"
      >
        <Code className="w-5 h-5" />
      </button> */}
    </div>
  );
};

interface TiptapEditorProps {
  content: string;
  onChange?: (html: string) => void;
  editable?: boolean;
  className?: string;
}

const TiptapEditor = ({
  content,
  onChange,
  editable = true,
  className = '',
}: TiptapEditorProps) => {
  const formattedContent = formatContentFromBackend(content);
  const editor = useEditor({
    extensions: [
      StarterKit,
      Underline,
      TextAlign.configure({
        types: ['heading', 'paragraph'],
      }),
    ],

    content: formattedContent,
    editable: editable,
    onUpdate: ({ editor }) => {
      const html = editor.getHTML().trim();
      onChange?.(html);
    },
  });

  return (
    <div className={`border rounded-lg  flex flex-col  p-2 ${className}`}>
      <MenuBar editor={editor} />
      <div className="p-4 h-full flex">
        <EditorContent
          editor={editor}
          className="prose max-w-none overflow-auto  "
        />
      </div>
    </div>
  );
};

export default TiptapEditor;
