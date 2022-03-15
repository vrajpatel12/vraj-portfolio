import React from 'react'
import MyHead from '../../presentation/components/common/head'
import { SERVICES_INDIVIDUAL_META } from '../../utils/meta-page-url';
import { useRouter } from 'next/router';

const ServicesIndividual = ({slug}) => {
    // const router = useRouter();
  return (
    <main className="comming-soon">
        <MyHead title={`Software Development Services | ${slug}`} weburl={SERVICES_INDIVIDUAL_META(slug)}></MyHead>
        <h1>{`Software Development Services | ${slug}`}</h1>
        <p>Comming soon...</p>
    </main>
  )
}


export const getServerSideProps = async (ctx)=>{
  const slug = ctx.params.slug;
  return { props: { slug } }
}

export default ServicesIndividual