'use client'
import yaml from 'js-yaml'
import fs from 'fs'
//import { useState } from 'react';
//import treatment from "../treatments/treatments.weinstein.yaml"
import YamlEditor from '@focus-reactive/react-yaml';

export default function Validator() {
    async function validateTreatment(treatment) {
        if (!treatment.playerCount) {
          throw new Error(
            `No "playerCount" specified in treatment ${treatment.name}`
          );
        }
        if ("gameStages" in treatment === false) {
          throw new Error(`No "gameStages" specified in treatment ${treatment.name}`);
        }
      
        if ("exitSurveys" in treatment === false) {
          throw new Error(
            `No "exitSurveys" specified in treatment ${treatment.name}`
          );
        }
    }

    const example = "introSequences"

    //const [config, setConfig] = useState(example);

    function handleChange(text) {
      setConfig(text);
      console.log(config);
    }

    let doc;

    try {
      doc = yaml.load(fs.readFileSync('/Users/kimberlyepstein/deliberation-portal/deliberation-portal/src/treatments/treatments.weinstein.yaml', 'utf8'));
      console.log(doc);
    } catch (e) {
      console.log(e);
    }

    return (
      <div>
        <YamlEditor json={doc} />
      </div>
    )
}