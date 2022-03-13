import React from 'react'
import MyHead from '../../presentation/components/common/head'
import { SERVICES_META } from '../../utils/meta-page-url'

const ServicesPage = () => {
  return (
    <main className="comming-soon">
        <MyHead title='Software Development Services' weburl={SERVICES_META}></MyHead>
        <h1>Software Development Services</h1>
        <p>Comming soon...</p>
    </main>
  )
}

export default ServicesPage