'use client';
import React, { useState } from 'react';
import { Editor } from '@tinymce/tinymce-react';
import { Noop } from 'react-hook-form';

const TINY_EDITOR_API_KEY = process.env.NEXT_PUBLIC_TINYMCE_API_KEY;

type Props = {
  onChange: (...event: any[]) => void;
  onBlur: Noop;
  id: string;
  initialValue?: string;
};

const FormTinyMceEditor = (props: Props) => {
  const [mounted, setMounted] = useState(false);

  const renderFallback = (mounted: boolean) => {
    if (mounted) return null;
    return (
      <div className="light-border h-[350px] w-full rounded-[10px] border-2 bg-light-700 text-dark-300 dark:bg-dark-300 dark:text-light-700">
        <p className="paragraph-medium mt-10 text-center">loading editor...</p>
      </div>
    );
  };

  return (
    <div>
      {renderFallback(mounted)}
      <div className={`${mounted ? '' : 'hidden'}`}>
        <Editor
          apiKey={TINY_EDITOR_API_KEY}
          ref={null}
          id={props.id}
          onEditorChange={(newValue) => {
            props.onChange(newValue);
          }}
          onBlur={props.onBlur}
          initialValue={props.initialValue || ''}
          onLoadContent={() => {
            setTimeout(() => {
              setMounted(true);
            }, 100);
          }}
          init={{
            height: 350,
            menubar: false,
            plugins: [
              'advlist',
              'autolink',
              'lists',
              'link',
              'image',
              'charmap',
              'preview',
              'anchor',
              'searchreplace',
              'visualblocks',
              'codesample',
              'fullscreen',
              'insertdatetime',
              'media',
              'table',
            ],
            toolbar:
              'undo redo | blocks | ' +
              'codesample | bold italic forecolor | alignleft aligncenter ' +
              'alignright alignjustify | bullist numlist | ' +
              'removeformat | help',
            // eslint-disable-next-line camelcase
            content_style: 'body { font-family:Inter,sans-serif; font-size:16px }',
          }}
        />
      </div>
    </div>
  );
};

export default FormTinyMceEditor;
