'use client'
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
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
    </Layout>
    </>
  )
}
