'use client'
import CodeEditor from '@uiw/react-textarea-code-editor';
import { useState } from 'react';
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

  function handleChange(evn) {
    setCode(evn.target.value);
    console.log(code);
  }
  return (
    <ConfigEditor >
      <div style={{height: "95vh", overflow: "auto", backgroundColor: "#F0F2F6"}}>
        <CodeEditor
          value={code}
          language="yaml"
          placeholder="Please enter treatment configuration."
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
        <Button children="Save Draft"/> {/*TODO - implement handleClick to call yaml parser */}
      </div>
      
    </ConfigEditor>
  );
}
