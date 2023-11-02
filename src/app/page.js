import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ProjectsSection from './components/ProjectsSection';
import Head from 'next/head';
import Layout from './components/Layout';

export default function Home() {
  return (
    <>
    <Head>
        <link rel="shortcut icon" href='/favicon.ico' type='image/x-icon'/>
    </Head>
    <Layout>
    <main className="flex min-h-screen flex-col bg-[#fdfdfd] scroll-smooth">
      <div className='container mt-24 mx-auto lg:px-12 py-4'>
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
      </div>
    </main>
    </Layout>
    </>
  )
}
