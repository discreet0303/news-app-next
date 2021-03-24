import React from 'react';
import Meta from '../../../componments/Meta'
import DashboardStyle from '../../../styles/Dashboard.module.css';
import { createArticle } from '../../api/articles'

const INIT_ARTICLE = {
  title: '',
  body: '',
  excrept: ''
}

const CreateArticle = () => {
  const [article, setArticle] = React.useState(INIT_ARTICLE);

  const handleArticle = (e) => {
    setArticle(article => {
      return {
        ...article,
        [e.target.id]: e.target.value
      }
    })
  }

  const handleSubmit = () => {
    createArticle(article).then(res => {
      setArticle(INIT_ARTICLE)
      alert('新增成功');
    });
  }

  return (
    <div>
      <Meta title={'Create Article'}/>
      <h1>This is the Create Article Page!</h1>
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

export default CreateArticle;