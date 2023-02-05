import React, { useEffect, useState } from 'react'
import Loading from './Loading'
import NewsItem from './NewsItem'
import ServerDown from './ServerDown'

const NewsContainer = ({ search, setTotalPages, page, setPage, setError }) => {
  const [newsData, setNewsData] = useState([])
  const key = "e1b9d8c355e84ebabbe5bd1b0481987a"
  const fetchNewsMethod = async () => {
    const url = `https://newsapi.org/v2/everything?q=${search}&apiKey=${key}&pageSize=10&page=${page}`
    let fetchData = await fetch(url)
    let data = await fetchData.json()
    if (data.code == "rateLimited"){
      setError(true)
    }
    setTotalPages(Math.ceil(data.totalResults / 10))
    setNewsData(data.articles)
  }

  useEffect(() => {
    fetchNewsMethod()
  }, [])
  return (
    <div className='home-container'>
      <h1>Top Headlines On "{search}"</h1>
      <div className="all-news-container">
        {newsData!=null?(newsData.length>=0? newsData.map((news) => {
          return <NewsItem news={news} key={news.url} />
        }):<Loading/>):<ServerDown/>}
      </div>
    </div>
  )
}

export default NewsContainer
