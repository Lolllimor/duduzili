import React, { useCallback } from 'react';
import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import { Editor } from '@tiptap/react';

import { Bold, Italic, List, ListOrdered, Code } from 'lucide-react';

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

  return formattedParagraphs.join(" <br/>");
};

const MenuBar = ({ editor }: { editor: Editor | null }) => {
  if (!editor) {
    return null;
  }

  return (
    <div className="border-b border-gray-200 p-2 flex gap-2">
      <button
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
        onClick={() => editor.chain().focus().toggleOrderedList().run()}
        disabled={!editor.can().chain().focus().toggleOrderedList().run()}
        className={`p-2 rounded hover:bg-gray-100 ${
          editor.isActive('orderedList') ? 'bg-gray-200' : ''
        }`}
        aria-label="Ordered List"
      >
        <ListOrdered className="w-5 h-5" />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleCodeBlock().run()}
        disabled={!editor.can().chain().focus().toggleCodeBlock().run()}
        className={`p-2 rounded hover:bg-gray-100 ${
          editor.isActive('codeBlock') ? 'bg-gray-200' : ''
        }`}
        aria-label="Code Block"
      >
        <Code className="w-5 h-5" />
      </button>
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
    extensions: [StarterKit],

    content: formattedContent,
    editable: editable,
    onUpdate: ({ editor }) => {
      const html = editor.getHTML();
      onChange?.(html);
    },
  });

  return (
    <div className={`border rounded-lg  flex ${className}`}>
      {/* <MenuBar editor={editor} /> */}
      <div className="p-4 h-full flex">
        <EditorContent editor={editor} className="prose max-w-none overflow-auto  " />
      </div>
    </div>
  );
};

export default TiptapEditor;
