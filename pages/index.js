import ArticleList from '../componments/ArticleList'
import { getArticles } from './api/articles';

export default function Home({ articles }) {
  return (
    <div>
      <ArticleList articles={articles}/>
    </div>
  )
}

export const getStaticProps = async () => {
const articles = await getArticles();

  return {
    props: {
      articles
    }
  }
}