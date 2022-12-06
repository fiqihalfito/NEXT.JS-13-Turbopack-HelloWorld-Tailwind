import Head from 'next/head'
import Image from 'next/image'
import Hero from '../components/hero'
import SectionOne from '../components/section-one'
import SectionTwo from '../components/section-two'

export default function Home() {
  return (
    <div className='bg-amber-200'>
      <Hero />
      <SectionOne />
      <SectionTwo />
    </div>
  )
}
