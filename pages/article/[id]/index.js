import {useRouter} from 'next/router'
import Meta from '../../../componments/Meta'

import { getArticles, getArticleById } from '../../api/articles'

const article = ({ article }) => {
  const route = useRouter()
  // const { id } = route.query;

  return (
    <>
      <Meta title={article.title} description={article.excerpt}/>
      <h1>{article.title}</h1>    
      <p>{article.body}</p>
      <br />
      <a onClick={()=> route.back()}>Go Back</a>
    </>
  )
}

export const getStaticProps = async (context) => {
  const article = await getArticleById(context.params.id);

  return {
    props: {
      article
    }
  }
}

export const getStaticPaths = async () => {
  const articles = await getArticles();

  const ids = articles.map(article => article.id)
  const paths = ids.map(id => ({params: { id: id.toString() }}))
  
  return {
    paths,
    fallback: false
  }
}

export default article