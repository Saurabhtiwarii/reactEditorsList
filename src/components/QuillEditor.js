import React, { useState } from "react";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

function QuillEditor() {
  const [value, setValue] = useState('');

  return (
      <>
       <h1 style={{textAlign:"center"}}> QUILL EDITOR </h1>
       <ReactQuill theme="snow" value={value} onChange={setValue}/>
      </>
   
  );
}

export default QuillEditor