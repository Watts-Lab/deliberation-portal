'use client'
import CodeEditor from '@uiw/react-textarea-code-editor';
import { useState, useEffect } from 'react';
import styled from 'styled-components';
import {Button} from './Button';
import { parse, stringify } from 'yaml'
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
    localStorage.setItem("code", evn.target.value)
    console.log(code);
  }
  

  function handleSave(e) {
    e.preventDefault()
    setCode(e.target.value)
    localStorage.setItem("code", code);
    const yamlObj = parse(code)[0]
    //Parse obj to extract components
    const gameStages = yamlObj["gameStages"] //array of each stage
    console.log(gameStages)
    for (let i = 0; i < gameStages.length; i++) {
      const stage = gameStages[i]
      console.log(stage);
      //stage has a name, duration, elements
      const elts = stage.elements
      console.log(elts.length);

      const eltComponents = []
      for (let j = 0; j < elts.length; j++) {
        const elt = elts[j]
        eltComponents.push(<Element elt handleChange />)
      } 
    }
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
        <Button children="Save Draft" handleClick={(e) => handleSave(e)}/> 
      </div>
      
    </ConfigEditor>
  );
}
