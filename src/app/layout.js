import { Inter } from 'next/font/google';
import './globals.css';
import Head from 'next/head';
import favicon from '../../public/favicon.ico';
import Navbar from './components/Navbar';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Fedor Tatarintsev',
  description: 'Portfolio Website',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <link rel="shortcut icon" href='../../public/favicon.ico' />
        <link rel="shortcut icon" href={favicon}/>
      </Head>
      <body className={inter.className}>
        <Navbar />
        <main className="flex min-h-screen flex-col bg-[#fdfdfd] scroll-smooth">
        <div className='container mt-24 mx-auto lg:px-12 py-4'>{children}</div>
        </main>
      </body>
    </html>
  )
}
