import React from 'react'
import MyHead from '../../presentation/components/common/head'
import { PORTFOLIO_META } from '../../utils/meta-page-url'

const ProjectsPage = () => {
  return (
    <main className="comming-soon">
    <MyHead title={`Software Development Projects`} weburl={PORTFOLIO_META}></MyHead>
    <h1>{`Software Development Projects`}</h1>
        <p>Comming soon...</p>
    </main>
  )
}

export default ProjectsPage