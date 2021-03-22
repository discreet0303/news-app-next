import axios from 'axios';

export const apiCaller = axios.create({
  baseURL: 'http://localhost:3030',
  timeout: 10000,
  headers: { 'Content-Type': 'application/json' },
})

export const getArticles = async () => {
  const data = await apiCaller.get('/articles')
    .then(res => res.data)
    .catch(err => console.log(err));
  return data
}

export const getArticleById = async (id) => {
  const data = await apiCaller.get(`/articles/${id}`)
    .then(res => res.data)
    .catch(err => console.log(err));
  return data
}

export default async function handler(req, res) {
  const data = await apiCaller.get('/articles')
    .then(res => res.data)
    .catch(err => console.log(err));
  return res.status(200).json(data);
}