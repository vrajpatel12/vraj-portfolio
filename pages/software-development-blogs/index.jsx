import React from 'react'
import MyHead from '../../presentation/components/common/head'
import { BLOGS_META } from '../../utils/meta-page-url'

const BlogsPage = () => {
  return (
    <main className="comming-soon">
    <MyHead title={`Software Development Blogs`} weburl={BLOGS_META}></MyHead>
    <h1>{`Software Development Blogs`}</h1>
        <p>Comming soon...</p>
    </main>
  )
}

export default BlogsPage