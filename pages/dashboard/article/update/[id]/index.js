import React from 'react';
import DashboardStyle from '../../../../../styles/Dashboard.module.css';
import Meta from '../../../../../componments/Meta';

import {getArticleById, getArticles, updateArticle} from '../../../../api/articles'

const UpdateArticle = ({articleProps}) => {
  const [article, setArticle] = React.useState(articleProps);

  const handleArticle = (e) => {
    setArticle(article => {
      return {
        ...article,
        [e.target.id]: e.target.value
      }
    })
  }

  const handleSubmit = () => {
    updateArticle(article.id, article);
    alert('更新成功');
  }

  return (
    <div>
      <Meta title={'Edit Article'}/>
      <h1>This is the Edit Article Page!</h1>
      <div>
        <div className={DashboardStyle.inputDiv}>
          <label>Title</label> <br/>
          <input id={'title'} value={article.title} onChange={handleArticle}/>
        </div>
        <div className={DashboardStyle.inputDiv}>
          <label>excrept</label> <br/>
          <input id={'excrept'} value={article.excrept} onChange={handleArticle}/>
        </div>
        <div className={DashboardStyle.inputDiv}>
          <label>Body</label> <br/>
          <textarea id={'body'} style={{height: '80px'}}  value={article.body} onChange={handleArticle}></textarea><br/>
        </div>
      </div>
      <button onClick={handleSubmit}>送出</button>
    </div>
  )
}

export const getStaticProps = async (context) => {
  const articleProps = await getArticleById(context.params.id);

  return {
    props: {
      articleProps
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

export default UpdateArticle;