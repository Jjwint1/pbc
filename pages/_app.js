import '../styles/globals.css'
import NavLayout from '../components/Nav/NavLayout'
import { useRouter } from 'next/router'

import { AnimateSharedLayout } from 'framer-motion'


function MyApp({ Component, pageProps }) {
  const router = useRouter()
  return (
    <NavLayout>
        <Component {...pageProps} key={router.route}/>
    </NavLayout>
  )
}

export default MyApp
