import React from 'react'
import MyHead from '../presentation/components/common/head'
import { CONTACT_META } from '../utils/meta-page-url'

const ContactPage = () => {
  return (
    <main className="comming-soon">
        <MyHead title='Contact Software developer' weburl={CONTACT_META}></MyHead>
        <h1>Contact Software developer</h1>
        <p>Comming soon...</p>
    </main>
  )
}

export default ContactPage