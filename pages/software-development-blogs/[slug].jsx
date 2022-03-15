import React from 'react'
import MyHead from '../../presentation/components/common/head'
import { BLOGS_INDIVIDUAL_META } from '../../utils/meta-page-url'
import { useRouter } from 'next/router';

const IndividualBlog = ({slug}) => {
    // const router = useRouter();
  return (
    <main className="comming-soon">
    <MyHead title={`Software Development Blogs | ${slug}`} weburl={BLOGS_INDIVIDUAL_META(slug)}></MyHead>
    <h1>{`Software Development Blogs | ${slug}`}</h1>
        <p>Comming soon...</p>
    </main>
  )
}


export const getServerSideProps = async (ctx)=>{
  const slug = ctx.params.slug;
  return { props: { slug } }
}

export default IndividualBlog;