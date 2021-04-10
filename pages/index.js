import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.scss'
import { AnimatePresence, motion } from 'framer-motion'


export default function Home() {
  return (
    <>
      <Head><title>Peterhouse Boat Club</title></Head>
      <AnimatePresence>
        <div className={styles.gradient}>
          <div className={styles.imgContainer}>
            <motion.img src="BH.png" 
              initial={{
                opacity: 0,
                bottom: '-30vh',
              }}
              animate={{
                opacity: 1,
                bottom: 0,
                transition: {
                  duration: 2,
                }
              }}
              exit={{
                opacity: 0,
              }}
              key='image'
            />
          </div>
        </div>
        <motion.div className={styles.header}
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
            transition: {
              duration: 2,
            }
          }}
          exit={{
            opacity: 0,
          }}
          key='header-text'
        >
          <p className={styles.title}>PETERHOUSE BOAT CLUB</p>
          <p className={styles.welcome}>Welcome! Here you'll find updates about PBC, and info on how to join the club. Members can also book a boat or an erg.</p>

          <div className={styles.buttonRow}>
            <Link href='/join'><a className={styles.button}>Join</a></Link>
            <Link href='/book'><a className={styles.button}>Book</a></Link>
          </div>
        </motion.div>
      </AnimatePresence>
    </>
  )
}
