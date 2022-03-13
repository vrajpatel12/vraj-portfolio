import React from 'react'
import MyHead from '../../presentation/components/common/head'
import { BLOGS_INDIVIDUAL_META } from '../../utils/meta-page-url'
import { useRouter } from 'next/router';

const IndividualBlog = () => {
    const router = useRouter();
  return (
    <main className="comming-soon">
    <MyHead title={`Software Development Blogs | ${router.query?.slug}`} weburl={BLOGS_INDIVIDUAL_META(router.query?.slug)}></MyHead>
    <h1>{`Software Development Blogs | ${router.query?.slug}`}</h1>
        <p>Comming soon...</p>
    </main>
  )
}

export default IndividualBlog