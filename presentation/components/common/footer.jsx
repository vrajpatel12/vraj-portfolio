import React from 'react'
import styles from '../../../styles/common/Footer.module.css'
import { DESC, TITLE } from '../../../utils/meta-tags'
import Link from 'next/link'
import { WHOLE_LOGO } from '../../../utils/images-url'
import Image from 'next/image'
import { ABOUT, BLOGS, CONTACT, HOME, PORTFOLIO, SERVICES } from '../../../utils/page-url'
import {MdEmail,MdLocationOn,MdLocalPhone} from 'react-icons/md'


const Footer=() =>{
  return (
    <footer className={styles['footer']}>
        <div role={'feed'} className={styles["footer-wrapper"]}>
            <section>
            <div role="header-logo" className={styles['footer-logo']}>
                <Image src={WHOLE_LOGO} width={"270px"} height="82px" alt={TITLE}></Image>
            </div>
            <p>{DESC}</p>
            </section>
            <section id={styles['quick-links']}>
                <h3 className="links">Quick Links</h3>
                <nav>
                <Link href={HOME}><address>Home</address></Link>
                <Link href={ABOUT}><address>About Me</address></Link>
                <Link href={SERVICES}><address>Services</address></Link>
                <Link href={BLOGS}><address>Blogs</address></Link>
                <Link href={PORTFOLIO}><address>Portfolio</address></Link>
                <Link href={CONTACT}><address>Contact Me</address></Link>
                </nav>
            </section>
            <section>
                <h3 className="links">Contact me</h3>
                <a href='mailto:iampatelvraj@gmail.com' target='_blank'><MdEmail size="1.2rem" color='grey'></MdEmail><address>iampatelvraj@gmail.com</address></a>
                <a href='tel:+918780508717' target='_blank'><MdLocalPhone size="1.2rem" color='grey'></MdLocalPhone><address>+91-8780508717</address></a>
                <a href='https://www.google.com/maps/place/Ahmedabad,+Gujarat/@23.0199968,72.2995501,10z/data=!3m1!4b1!4m5!3m4!1s0x395e848aba5bd449:0x4fcedd11614f6516!8m2!3d23.022505!4d72.5713621' target='_blank'><MdLocationOn size="1.2rem" color='grey'></MdLocationOn><address>Ahmedabad, India.</address></a>
            </section>
        </div>
    </footer>
  )
}

export default Footer