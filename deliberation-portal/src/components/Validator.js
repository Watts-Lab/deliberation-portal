'use client'
import CodeEditor from '@uiw/react-textarea-code-editor';
import { useState } from 'react';
import styled from 'styled-components';
import {Button} from './Button';
const ConfigEditor = styled.div`
  width: 40%;
  height: 100%;
  flex-shrink: 0;
  background-color: #F0F2F6;
`
export default function Validator() {
  const [code, setCode] = useState(
    ""
  );

  function handleChange(evn) {
    setCode(evn.target.value);
    console.log(code);
  }
  return (
    <ConfigEditor >
      <CodeEditor
        value={code}
        language="yaml"
        placeholder="Please enter treatment configuration."
        onChange={(env) => handleChange(env)}
        padding={15}
        style={{
          fontSize: 12,
          backgroundColor: "#F0F2F6",
          fontFamily: 'ui-monospace,SFMono-Regular,SF Mono,Consolas,Liberation Mono,Menlo,monospace',
        }}
      />
      <Button children="Save Draft"/>
    </ConfigEditor>
  );
}
