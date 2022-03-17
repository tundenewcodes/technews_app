import React from 'react'
import styles from "../../styles/Article.module.css"
import ArticleItems from './ArticleItems'
const Article = ({article}) => {
  return (
      <div className={styles.grid}>{article.map(articleItems => {
        return <ArticleItems key={articleItems.id}  article={articleItems}/>
    })}</div>
  )
}

export default Article