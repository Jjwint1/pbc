import styles from './NavLayout.module.scss'
import Link from 'next/link'
import { motion } from 'framer-motion'
import React from 'react'

import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock'

export default class NavLayout extends React.Component {

    targetELement = null;

    constructor(props) {
        super(props);
        this.state = {
            open: false,
        }
        this.toggleMenu = this.toggleMenu.bind(this);
    }

    toggleMenu() {
        this.state.open ? enableBodyScroll(this.targetElement) : disableBodyScroll(this.targetElement);
        this.setState({
            open: !this.state.open
        })
    }

    componentDidMount() {
        this.targetElement = document.getElementById('nav');
    }

    render() {
        return (
            <>
                <div className={styles.hamburger_icon} onClick={this.toggleMenu}>
                    <motion.div initial={{
                            opacity: 1,
                            backgroundColor: 'whitesmoke'
                        }} animate={{
                            opacity: this.state.open? 0 : 1,
                            transition: {
                                duration: 0.5,
                            }
                        }}></motion.div>

                        <motion.div initial={{
                            opacity: 1,
                            backgroundColor: 'whitesmoke'
                        }} animate={{
                            rotate: this.state.open? 45 : 0,
                            top: this.state.open? '5px' : '0px',
                            transition: {
                                duration: 0.5,
                            }
                        }}></motion.div>

                        <motion.div initial={{
                            opacity: 1,
                            backgroundColor: 'whitesmoke',
                        }} animate={{
                            rotate: this.state.open? -45 : 0,
                            top: this.state.open? '-2px' : '0px',
                            transition: {
                                duration: 0.5,
                            }
                        }}></motion.div>
                </div>

                <motion.div className={styles.mask} onClick={this.toggleMenu}
                    initial={{
                        opacity: 0,
                    }}
                    animate={{
                        opacity: this.state.open? 0.4 : 0,
                        pointerEvents: this.state.open? 'auto' : 'none',
                        transition: {
                            duration: 0.7,
                        }
                    }}
                >

                </motion.div>

                <motion.div id='nav' className={styles.nav_container}
                initial={{
                    opacity: 0,
                    display: 'none',
                }}
                animate={{
                    opacity: this.state.open? 1 : 0,
                    pointerEvents: this.state.open? 'auto' : 'none',
                    display: 'flex',
                    transition: {
                        duration: 0.7,
                    }
                }}
                >
                    <ul className={styles.nav_list}>
                        <li><Link href='/'><a onClick={this.toggleMenu}>Home</a></Link></li>
                        <li><Link href='/about'><a onClick={this.toggleMenu}>About</a></Link></li>
                        <li><Link href='/book'><a onClick={this.toggleMenu}>Book</a></Link></li>
                        <li><Link href='/blog'><a onClick={this.toggleMenu}>Blog</a></Link></li>
                        <li><Link href='/contact'><a onClick={this.toggleMenu}>Contact</a></Link></li>
                        <li><Link href='/join'><a onClick={this.toggleMenu}>Join</a></Link></li>
                    </ul>

                </motion.div>


                {this.props.children}
            </>
        )
    }
}