import '@/styles/global.css'
import Navbar from "@/src/components/nav"
import { AnimatePresence } from 'framer-motion'

export default function App({ Component, pageProps, router }) {
  return (
    <div className='py-24 px-12 lg:px-48'>
      <Navbar />
      <AnimatePresence >
        <Component key={router.pathname} {...pageProps} />
      </AnimatePresence>
    </div>
  )
}
