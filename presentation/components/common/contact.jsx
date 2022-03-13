import React from 'react'
import styles from '../../../styles/common/Contact.module.css'
import Button from './button'
import TitleSubtitle from './TitleSubtitle'

const Contact=() =>{
  return (
    <section className={styles['contact-form']}>
        <TitleSubtitle title='Drop us a line' subtitle='Looking forward to hearing from you'></TitleSubtitle>
        <div role={"feed"} className={styles['form-wrapper']}>
            <div role={"figure"} className={styles['figure']}>
            <iframe width="100%" height="600" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Ganesh%20Glory%2011,Gota,Ahmedabad,Gujrat,India+(Vraj%20Patel)&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.gps.ie/truck-gps/">delivery trucks gps</a></iframe>
            </div>
            <div role={"form"} className={styles['form']}>
                <div className={styles['input']}>
                    <label htmlFor="name">Name</label>
                    <input type="text" name="name" id="name" placeholder='Please enter your name here' />
                </div>
                <div className={styles['input']}>
                    <label htmlFor="phone">Phone</label>
                    <input type="tel" name="phone" id="phone" placeholder='Please enter your phone number here' />
                </div>
                <div className={styles['input']}>
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="email" placeholder='Please enter your email here'/>
                </div>
                <div className={styles['input']}>
                    <label htmlFor="message">Message</label>
                    <textarea name="message" id="message" placeholder='Please enter your message here'/>
                </div>
                <Button text='Submit'></Button>
            </div>
        </div>
    </section>
  )
}

export default Contact