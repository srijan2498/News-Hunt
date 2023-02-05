import React, { useEffect, useState } from 'react'
import Loading from './Loading'
import NewsItem from './NewsItem'
import ServerDown from './ServerDown'

const Home = ({ setTotalPages, page, setPage, setError }) => {
    const [topNewsData, setTopNewsData] = useState([])
    const key = "e1b9d8c355e84ebabbe5bd1b0481987a"
    const fetchTopHeadlines = async () => {
        const url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=${key}&pageSize=10&page=${page}`
        let fetchData = await fetch(url)
        let data = await fetchData.json()
        if (data.code == "rateLimited") {
            setError(true)
        }
        setTotalPages(Math.ceil(data.totalResults / 10))
        setTopNewsData(data.articles)
    }
    useEffect(() => {
        fetchTopHeadlines()
    }, [])
    return (
        <div >
            <h1 id='headline'>Top Headlines</h1>
            <div className="all-news-container">
                {topNewsData!=null?(topNewsData.length!=0 ? topNewsData.map((news) => {
                    return <NewsItem news={news} key={news.url} />
                }) : <Loading />) : <ServerDown />}
            </div>
        </div>
    )
}

export default Home
