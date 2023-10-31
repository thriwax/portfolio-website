import Image from 'next/image'
import HeroSection from './components/HeroSection'
import Navbar from './components/Navbar'
import AboutSection from './components/AboutSection'
import ProjectsSection from './components/ProjectsSection'
import Head from 'next/head'

export default function Home() {
  return (
    <>
    <Head>
      <title>Fedor T. - Portfolio Website</title>
    </Head>
    <main className="flex min-h-screen flex-col bg-[#fdfdfd]">
      <Navbar />
      <div className='container mt-24 mx-auto lg:px-12 py-4'>
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
      </div>
    </main>
    </>
  )
}
