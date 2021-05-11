import React from 'react'
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';

import SunReactEditor from './components/SunEditor';
import SlateReactEditor from './components/SlateEditor';
import QuillEditor from './components/QuillEditor';
import DraftEditor from './components/ReactDraftEditor';
import ProseMirrorEditor from './components/ProseMirror';
import RTEeditor from './components/RTEeditor';
import Draft from './components/DraftEditor';
import TinyMceEditor from './components/TinyMce';
import EditorContainer from './components/EditorContainer'
import FroalaEditor from './components/FroalaEditor';
// import DanteEditor from 'Dante2';
import ReactPageEditor from './components/Rpage';
import Ckeditor from './components/Ckeditor5';
import DraftTaileditor from './components/Drafttail';
import RichTextExample from './components/SlateEditor';
// import {DraftailEditor} from 'draftail';
// import AlloyEditor from 'alloyeditor';
import './App.css';
function App() {
    return (
        <Router>
            
            <Switch>
                <Route path="/" exact component={Home}></Route>

                 <Route path="/sun-editor" exact >
                     <SunReactEditor lang="en"/>
                 </Route>
                  <Route path="/editor" >
                     <EditorContainer />
                 </Route>
                 <Route path="/slate-editor" >
                     <SlateReactEditor lang="en"/>
                 </Route>
                 <Route path="/quill-editor" >
                    <QuillEditor/>
                 </Route>

                 <Route path="/reactdraft-editor" >
                    <DraftEditor/>
                 </Route>
                 <Route path="/prosemirror-editor" >
                    <ProseMirrorEditor/>
                 </Route>
                 <Route path="/rte-editor" >
                    <RTEeditor />
                 </Route>

                 <Route path="/draft-editor" >
                    <Draft></Draft>
                 </Route>

                 <Route path="/tinymce-editor" >
                              <TinyMceEditor
  apiKey="bhf55iuvuo523betmoy0o37ukvinw2bk09y2qpjyvh5o7hby"

/>
                 </Route>
                
                <Route path="/froala-editor" >
                    <FroalaEditor />
                 </Route>
                 
                <Route path="/reactpage-editor" >
                    <ReactPageEditor />
                 </Route>

                 <Route path="/ckeditor5-editor" >
                     <Ckeditor />
                 </Route>

                 <Route path="/drafttail-editor" >
                          <DraftTaileditor />
                 </Route>

                 
                 <Route path="/slateEditor-editor" >
                           <RichTextExample />
                 </Route>

            </Switch>
      {/* <AlloyEditor /> */}
      
        </Router>
        
    )
}

const Home = ()=>{
    return (
            <nav>
                <h1 className="heading">React Editors List</h1>
                <ul className="list">
                    <li className="list-content"><Link to="/editor">Jodit Editor</Link></li>
                    <li className="list-content"><Link to="/sun-editor">Sun Editor</Link></li>
                    <li className="list-content"><Link to="/quill-editor">Quill Editor</Link></li>
                    <li className="list-content"><Link to="/reactdraft-editor">React Draft Editor</Link></li>
                    <li className="list-content"><Link to="/prosemirror-editor">ProseMirror Editor</Link></li>
                    <li className="list-content"><Link to="/rte-editor">RTE (Rich Text Editor) editor</Link></li>
                    <li className="list-content"><Link to="/draft-editor">Draft JS</Link> </li>
                    <li className="list-content"><Link to="/tinymce-editor">TinyMCE Editor</Link> </li>
                    <li className="list-content"><Link to="/froala-editor">Froala Editor</Link> </li>
                    <li className="list-content"><Link to="/reactpage-editor">React Page Editor</Link> </li>
                    <li className="list-content"><Link to="/ckeditor5-editor">CKEDITOR5 Editor</Link> </li>
                    <li className="list-content"><Link to="/drafttail-editor">DraftTail Editor</Link> </li>
                    <li className="list-content"><Link to="/slateEditor-editor">SlateEditor Editor</Link> </li>
                </ul>
            </nav>
    )}
    
export default App
