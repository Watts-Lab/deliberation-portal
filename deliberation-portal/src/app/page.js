import TreatmentEditor from '@/components/TreatmentEditor'
import Image from 'next/image'
import { Stage } from '@/components/Stage'
import './globals.css'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-10">
      <div className="z-10 w-full max-w-5xl h-screen items-center justify-between font-mono text-sm lg:flex">
        <Stage title="Intro" duration="45s"/>
        <TreatmentEditor file="./treatments/treatments.weinstein.yaml" />
      </div>
    </main>
  )
}
