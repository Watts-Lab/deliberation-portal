import TreatmentEditor from '@/components/TreatmentEditor'
import Image from 'next/image'
import { Stage } from '@/components/Stage'
import { StageComponent } from '@/components/StageComponent'
import './globals.css'

export default function Home() {
  const components1 = [
    <StageComponent type="Prompt" children={["file: Intro_no_training.md"]}/>, 
    <StageComponent type="SubmitButton"/>]

  const components2 = [
    <StageComponent type="Prompt" children={["file: urban_unrest_survey.md"]}/>, 
    <StageComponent type="SubmitButton"/>]
  const components3 = [
    <StageComponent type="Prompt" children={["file: urban_unrest_discussion.md"]}/>, 
    <StageComponent type="Prompt" children={["file: instructions_listener.md", "showToPositions: 0"]}/>, 
    <StageComponent type="Prompt" children={["file: projects/weinstein_listening/instructions_speaker.md", "showToPositions: 1"]}/>
  ]
  return (
    <main className="flex flex-col items-center justify-between p-10">
      <div className="z-10 w-full items-center justify-between font-mono text-sm lg:flex">
        <div className='z-10 w-full items-center justify-between font-mono text-sm lg:flex p-10 min-w-7xl max-h-5xl overflow-x-auto'>
          <Stage title="Intro" components={components1} duration="45s" width="500px"/>
          <Stage title="Attitude Presurvey" components={components2} duration="120s" width="500px"/>
          <Stage title="Discussion" components={components3} duration="600s" width="600px"/>
        </div>
        <TreatmentEditor file="./treatments/treatments.weinstein.yaml" />
      </div>
    </main>
  )
}
