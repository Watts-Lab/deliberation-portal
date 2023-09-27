'use client'
import CodeEditor from '@uiw/react-textarea-code-editor';
import { useState, useEffect } from 'react';
import styled from 'styled-components';
import {Button} from './Button';
const ConfigEditor = styled.div`
  width: 40%;
  height: 100vh;
  border: solid 1px;
`
export default function TreatmentEditor() {
  const [code, setCode] = useState(
    ""
  );

  useEffect(() => {
    let value;
    // Get the value from local storage if it exists
    value = localStorage.getItem("code") || ""
    setCode(value);
  }, [])

  function handleChange(evn) {
    setCode(evn.target.value);
    console.log(code);
  }

  

  function handleSave(e) {
    //TODO parse, probably save somewhere more intelligent too
    e.preventDefault()
    localStorage.setItem("code", code);
  }

  return (
    <ConfigEditor >
      <div style={{height: "95vh", overflow: "auto", backgroundColor: "#F0F2F6"}}>
        <CodeEditor
          value={code}
          language="yaml"
          placeholder="Please enter treatment configuration. Do not refresh the page before saving."
          onChange={(env) => handleChange(env)}
          padding={5}
          style={{
            fontSize: 12,
            fontFamily: 'ui-monospace,SFMono-Regular,SF Mono,Consolas,Liberation Mono,Menlo,monospace',
            backgroundColor: "#F0F2F6"
          }}
        />
      </div>
      <div style={{backgroundColor: "#F0F2F6"}}>
        <Button children="Save Draft" handleClick={(e) => handleSave(e)}/> {/*TODO - implement handleClick to call yaml parser */}
      </div>
      
    </ConfigEditor>
  );
}
