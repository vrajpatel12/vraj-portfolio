import React from 'react'
import MyHead from '../../presentation/components/common/head'
import { SERVICES_INDIVIDUAL_META } from '../../utils/meta-page-url';
import { useRouter } from 'next/router';

const ServicesIndividual = () => {
    const router = useRouter();
  return (
    <main className="comming-soon">
        <MyHead title={`Software Development Services | ${router.query?.slug}`} weburl={SERVICES_INDIVIDUAL_META(router.query?.slug)}></MyHead>
        <h1>{`Software Development Services | ${router.query?.slug}`}</h1>
        <p>Comming soon...</p>
    </main>
  )
}

export default ServicesIndividual