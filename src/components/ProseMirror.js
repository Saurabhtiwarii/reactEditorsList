import { useState } from 'react'
import { HtmlEditor, Toolbar, Editor } from '@aeaton/react-prosemirror'
import { plugins, schema, toolbar } from '@aeaton/react-prosemirror-config-default'

const initialValue = '<p></p>'

export const ProseMirrorEditor = () => {
  const [value, setValue] = useState(initialValue)

  console.log({ value })

  return (
    <>
     <h1 style={{textAlign:"center"}}> PROSE MIRROR EDITOR </h1>
      <HtmlEditor
      schema={schema}
      plugins={plugins}
      value={initialValue}
      handleChange={setValue}
      debounce={250}
    >
      <Toolbar toolbar={toolbar} />
      <Editor autoFocus />
    </HtmlEditor>
    </>
    
  )
}
export default ProseMirrorEditor;