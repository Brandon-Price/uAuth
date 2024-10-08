import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import {Roboto} from "next/font/google";

const roboto = Roboto({ 
  subsets: ['latin'],
  weight:["100"],
  variable: '--font-roboto',
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={`${roboto.variable}`}>
        <Component {...pageProps} />
    </main>
  )
}