import React from 'react'
import MyHead from '../../presentation/components/common/head'
import { PORTFOLIO_INDIVIDUAL_META} from '../../utils/meta-page-url'
import { useRouter } from 'next/router';

const ProjectsPortfolio = () => {
    const router = useRouter();
  return (
    <main className="comming-soon">
    <MyHead title={`Software Development Projects | ${router.query?.slug}`} weburl={PORTFOLIO_INDIVIDUAL_META(router.query?.slug)}></MyHead>
    <h1>{`Software Development Projects | ${router.query?.slug}`}</h1>
        <p>Comming soon...</p>
    </main>
  )
}

export default ProjectsPortfolio