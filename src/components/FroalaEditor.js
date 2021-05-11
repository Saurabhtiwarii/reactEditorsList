import React from 'react'
import 'froala-editor/css/froala_style.min.css';
import 'froala-editor/css/froala_editor.pkgd.min.css';

import FroalaEditorComponent from 'react-froala-wysiwyg';



function FroalaEditor() {
    return (
        <>
             <h1 style={{textAlign:"center"}}> Froala Editor </h1>
            <FroalaEditorComponent></FroalaEditorComponent>
        </>
    )
}

export default FroalaEditor
