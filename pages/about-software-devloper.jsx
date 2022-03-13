import React from 'react'
import MyHead from '../presentation/components/common/head'
import { ABOUT_META } from '../utils/meta-page-url'

const AboutPage = () => {
  return (
    <main className="comming-soon">
        <MyHead title='About Software Developer' weburl={ABOUT_META}></MyHead>
        <h1>About Software Developer</h1>
        <p>Comming soon...</p>
    </main>
  )
}

export default AboutPage