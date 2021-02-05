import Head from 'next/head'
import styles from '../styles/Home.module.scss'
import { motion } from 'framer-motion'


export default function Home() {
  return (
    <>
      <Head><title>Peterhouse Boat Club</title></Head>
      <div className={styles.gradient}>
        <motion.div className={styles.imgContainer}>
          <motion.img src="BH.png" 
            initial={{
              opacity: 0,
              bottom: '-50px',
            }}
            animate={{
              opacity: 1,
              bottom: 0,
              transition: {
                duration: 2,
              }
            }}
          />
        </motion.div>
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
      >
        <p className={styles.title}>PETERHOUSE BOAT CLUB</p>
        <p className={styles.welcome}>Welcome! Here you'll find updates about PBC, and info on how to join the club. Members can also book a boat or an erg.</p>
      </motion.div>
    </>
  )
}
