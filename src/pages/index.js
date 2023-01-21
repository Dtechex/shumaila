import { Inter } from '@next/font/google'
import Contactus from './Contactus/index.js'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
    <Contactus/>
    </>
  )
}
