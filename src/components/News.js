import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
    constructor(){
        super();
        this.state = {
            articles: [],
            loading: false,
			page: 1
        }
    }

    async componentDidMount(){
        let url = "https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=e5c8d47f4bb84396861f582a4a91dd12&pageSize=9";
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({
            articles: parsedData.articles,
			totalResults: parsedData.totalResults,
        });
    }

	handlePreviousClick = async ()=>{
		let url = `https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=e5c8d47f4bb84396861f582a4a91dd12&page=${this.state.page-1}&pageSize=9`;
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({
			page: this.state.page - 1,
            articles: parsedData.articles,
        });
	}
	
	handleNextClick = async ()=>{
		if(this.state.page + 1 < Math.ceil(this.state.totalResults/9)){
			let url = `https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=e5c8d47f4bb84396861f582a4a91dd12&page=${this.state.page+1}&pageSize=9`;
			let data = await fetch(url);
			let parsedData = await data.json();
			this.setState({
				page: this.state.page + 1,
				articles: parsedData.articles,
			});
		}
		
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
			<div className="container d-flex justify-content-between">
			<button disabled={this.state.page <= 1} type="button" className="btn btn-info" onClick={this.handlePreviousClick}>&larr; Previous</button>
			<button type="button" className="btn btn-warning" onClick={this.handleNextClick}>Next &rarr;</button>
			</div>
        </div>
      </div>
    )
  }
}

export default News