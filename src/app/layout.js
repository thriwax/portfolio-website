import { Inter } from 'next/font/google';
import './globals.css';
import Head from 'next/head';
import favicon from '../../public/favicon.ico';

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
      <body className={inter.className}>{children}</body>
    </html>
  )
}
