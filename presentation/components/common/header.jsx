import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import styles from '../../../styles/common/Header.module.css'
import { WHOLE_LOGO } from '../../../utils/images-url'
import { TITLE } from '../../../utils/meta-tags'
import { ABOUT, BLOGS, CONTACT, HOME, PORTFOLIO, SERVICES } from '../../../utils/page-url'

const Header=() =>{
  return (
    <header className={styles['header']}>
        <div role='feed' className={styles['header-wrapper']}>
            <div role="header-logo" className={styles['header-logo']}>
                <Image src={WHOLE_LOGO} width={"270px"} height="82px" alt={TITLE}></Image>
            </div>
            <nav>
                <Link href={HOME}><address>Home</address></Link>
                <Link href={ABOUT}><address>About Me</address></Link>
                <Link href={SERVICES}><address>Services</address></Link>
                <Link href={BLOGS}><address>Blogs</address></Link>
                <Link href={PORTFOLIO}><address>Portfolio</address></Link>
                <Link href={CONTACT}><address>Contact Me</address></Link>
            </nav>
        </div>
    </header>
  )
}

export default Header