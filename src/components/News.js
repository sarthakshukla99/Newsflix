import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
    constructor(){
        super();
        this.state = {
            articles: [],
            loading: false,
            // title: this.articles.title,
            // description: this.articles.description,
            // imageUrl: this.articles.urlToImage,
            // newsUrl: this.articles.url 
        }
    }

    async componentDidMount(){
        let url = "https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=e5c8d47f4bb84396861f582a4a91dd12";
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({
            articles: parsedData.articles
        })
    }

  render() {
      const {articles, imageUrl, newsUrl, title, description}= this.state
    return (
      <div className='container my-3'>
        <h2>Newsflix - Top Headlines</h2> 

        <div className="row">
            {articles.map((article)=>{
            return <div className="col-md-4" key={article.url}>
                <NewsItem title={article.title ? article.title.slice(0, 45) : ""} description={article.description ? article.description.slice(0, 88) : ""} imageUrl={article.urlToImage} newsUrl={article.url}/>
            </div>
            })}
            
        </div>
      </div>
    )
  }
}

export default News