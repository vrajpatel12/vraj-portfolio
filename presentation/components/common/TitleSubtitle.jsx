import React from 'react'
import styles from '../../../styles/common/Title.module.css'

const TitleSubtitle =({title="title",subtitle="subtitle"})=>{
  return (
    <div role={"heading"} className={styles['title']}>
        <h2>{title}</h2>
        <p>{subtitle}</p>
    </div>
  )
}

export default TitleSubtitle