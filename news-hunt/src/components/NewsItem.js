import React from 'react'

const NewsItem = ({ news }) => {
  const { author, content, title, publishedAt, url, urlToImage, description } = news
  const openNews=()=>{
    window.open(url, "_blank")
  }
  return (
    <div className='single-news-item' onClick={openNews}>
      <div className="news-image" style={{ backgroundImage: `url(${urlToImage ? urlToImage :"https://static.vecteezy.com/system/resources/thumbnails/006/299/370/original/world-breaking-news-digital-earth-hud-rotating-globe-rotating-free-video.jpg"})`}}></div>
      <div className="news-info-container">
        <p className="news-title">{title.length<50?title:title.slice(0, 50)+"..."}</p>
        <p className="news-desc">{description ?( description.length<100?description:description.slice(0,100)+"..."):"Please go to the link to read the news."}</p>
        <p className="publish-date">{publishedAt && (publishedAt.slice(0, 10).split("-").reverse().join("-"))}</p>
        <p className="author">~{author ? author :"Anonymous" }</p>
      </div>

    </div>
  )
}

export default NewsItem
