import React from 'react';
import SunEditor from 'suneditor-react';
import 'suneditor/dist/css/suneditor.min.css'; // Import Sun Editor's CSS File

const SunReactEditor = props => {
  return (
    <div>
      <h1 style={{textAlign:"center"}}> SUN EDITOR </h1>
      <SunEditor />
    </div>
  );
};
export default SunReactEditor;