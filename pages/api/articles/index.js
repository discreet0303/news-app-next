import axios from 'axios';

export const apiCaller = axios.create({
  baseURL: 'http://localhost:3030',
  timeout: 10000,
  headers: { 'Content-Type': 'application/json' },
})

export default async function handler(req, res) {
  const data = await apiCaller.get('/articles')
    .then(res => res.data)
    .catch(err => console.log(err));
  return res.status(200).json(data);
}

export const getArticles = async () => await apiCaller.get('/articles').then(res => res.data);
export const getArticleById = async (articleId) => await apiCaller.get(`/articles/${articleId}`).then(res => res.data);
export const createArticle = async (article) => await apiCaller.post('/articles', article).then(res => res.data);
export const removeArticle = async (articleId) => await apiCaller.delete(`/articles/${articleId}`).then(res => res.data);
export const updateArticle = async (articleId, article) => await apiCaller.put(`/articles/${articleId}`, article).then(res => res.data);