import React, { useEffect, useMemo, useState } from 'react'
import { createEditor } from 'slate'
import { Slate, Editable, withReact } from 'slate-react'

const RichTextExample = () => {
  const editor = useMemo(() => withReact(createEditor()), [])
  // Add the initial value when setting up our state.
  const [value, setValue] = useState([
    {
      type: 'paragraph',
      children: [{ text: 'Type Any Thing Here' }],
    },
  ])

  return (
    <>
     <h1 style={{textAlign:"center"}}> Slate EDITOR </h1>
    <div style={{background: '#e3e4e6', width:'100vw', height:'50vh'}}>
         <Slate 
      editor={editor}
      value={value}
      onChange={newValue => setValue(newValue)}
    >
      <Editable />
    </Slate>
    </div>
   </>
  )
}

export default RichTextExample;