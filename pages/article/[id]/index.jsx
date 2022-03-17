//import { useRouter } from "next/router"
import Link from 'next/link'
import Meta from '../../components/Meta'
import { server } from '../../config/index'
const ArticleIndex = ({ articleId }) => {
  // const router = useRouter()
  // const {id} = router.query
  return (
    <>
      <Meta title = {articleId.title} description={articleId.excerpt}/>
      <h3>{articleId.title}</h3>
      <p>{articleId.body}</p>
      <br />

      <Link href='/'>go back</Link>
    </>
  )
}
export const getServerSideProps = async (context) => {
  const resp = await fetch(
    `${server}/api/articles/${context.params.id}`
  )
  const articleId = await resp.json()
  return {
    props: {
      articleId,
    },
  }
}
export default ArticleIndex
