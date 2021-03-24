import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router'

import Meta from '../../componments/Meta';
import { getArticles, removeArticle } from '../api/articles'


const ListArticles = () => {
  const router = useRouter();
  const [articles, setArticles] = React.useState([]);

  React.useEffect(() => {
    const runAsync = async () => {
      await getArticles().then(res => setArticles(res));
    }
    runAsync();
  }, [])

  const handleEditClick = (articleId) => {
    router.push(`/dashboard/article/update/${articleId}`);
  }

  const handleDeleteClick = async (articleId) => {
    await removeArticle(articleId);
    setArticles(articles => articles.filter(article => article.id != articleId));
    alert(`Delete the Article No: ${articleId}`)
  }

  return (
    <div>
      <Meta title={'List Articles'}/>
      <div style={{padding: '0 20px'}}>
        {
          articles.map((article) => {
            return (
              <div key={article.id} style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10}}>
                <Link href={`/article/${article.id}`}>
                  <a style={{paddingRight: 10}}>{article.id}. {article.title}</a>
                </Link>
                <div style={{display: 'flex'}}>
                  <button onClick={() => handleEditClick(article.id)} style={{ height: 60, width: 60, marginRight: 20 }}>edit</button>
                  <button onClick={() => handleDeleteClick(article.id)} style={{ height: 60, width: 60 }}>delete</button>
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default ListArticles;