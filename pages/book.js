import Head from 'next/head'
import styles from '../styles/book.module.scss'

import { AnimatePresence, motion } from 'framer-motion'

const modalVariants = {
    hidden: {
        opacity: 0,
        scale: 0.5,
        transition: {
            duration: 2,
        }
    },

    show: {
        opacity: 1,
        scale: 1,
        transition: {
            duration: 2,
        }
    }
}

export default function Book() {
    return (
        <div className={styles.page_container}>
            <AnimatePresence>
                <motion.div className={styles.book_modal}
                    variants={modalVariants}
                    initial="hidden"
                    animate="show"
                    exit="hidden"
                    key="modal"
                >
                </motion.div>
            </AnimatePresence>
        </div>
    )
}