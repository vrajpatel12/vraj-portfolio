import React from 'react'
import MyHead from '../../presentation/components/common/head'
import { PORTFOLIO_INDIVIDUAL_META} from '../../utils/meta-page-url'
import { useRouter } from 'next/router';

const ProjectsPortfolio = ({slug}) => {
    // const router = useRouter();
  return (
    <main className="comming-soon">
    <MyHead title={`Software Development Projects | ${slug}`} weburl={PORTFOLIO_INDIVIDUAL_META(slug)}></MyHead>
    <h1>{`Software Development Projects | ${slug}`}</h1>
        <p>Comming soon...</p>
    </main>
  )
}


export const getServerSideProps = async (ctx)=>{
  const slug = ctx.params.slug;
  return { props: { slug } }
}

export default ProjectsPortfolio;