import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';

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
        let url = `https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=e5c8d47f4bb84396861f582a4a91dd12&pageSize=${this.props.pageSize}`;

		this.setState({
			loading: true
		})
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({
            articles: parsedData.articles,
			totalResults: parsedData.totalResults,
			loading:false,
        });
    }

	handlePreviousClick = async ()=>{
		let url = `https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=e5c8d47f4bb84396861f582a4a91dd12&page=${this.state.page-1}&pageSize=${this.props.pageSize}`;
		this.setState({
			loading: true
		})
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({
			loading:false,
			page: this.state.page - 1,
            articles: parsedData.articles,
        });
	}
	
	handleNextClick = async ()=>{
		if(this.state.page + 1 < Math.ceil(this.state.totalResults/this.props.pageSize)){
			let url = `https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=e5c8d47f4bb84396861f582a4a91dd12&page=${this.state.page+1}&pageSize=${this.props.pageSize}`;
			this.setState({
				loading: true
			})
			let data = await fetch(url);
			let parsedData = await data.json();
			this.setState({
				loading:false,
				page: this.state.page + 1,
				articles: parsedData.articles,
			});
		}
		
	}

  render() {
      const {articles, imageUrl, newsUrl, title, description}= this.state
    return (
      <div className='container my-3'>
        <h1 className='text-center'>Newsflix - Top Headlines</h1> 
		{this.state.loading && <Spinner/>}

        <div className="row">
            {!this.state.loading && articles.map((article)=>{
            return <div className="col-md-4" key={article.url}>
                <NewsItem title={article.title ? article.title.slice(0, 45) : ""} description={article.description ? article.description.slice(0, 88) : ""} imageUrl={article.urlToImage} newsUrl={article.url}/>
            </div>
            })}  
			<div className="container d-flex justify-content-between">
				<button disabled={this.state.page <= 1} type="button" className="btn btn-info" onClick={this.handlePreviousClick}>&larr; Previous</button>
				<button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize)} type="button" className="btn btn-warning" onClick={this.handleNextClick}>Next &rarr;</button>
			</div>
        </div>
      </div>
    )
  }
}

export default News