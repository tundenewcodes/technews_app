import { server } from '../pages/config/index'
import styles from '../styles/Layout.module.css'
import Article from './components/Article'

export default function Home({ myData }) {
  console.log(myData)
  return (
    <div className={styles.container}>
      
      <Article article={myData} />{' '}
    </div>
  )
}
export const getStaticProps = async () => {
  const response = await fetch(`${server}/api/articles`)
  const article = await response.json()
  return {
    props: {
      myData: article,
    },
  }
}
