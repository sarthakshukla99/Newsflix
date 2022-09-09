import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'

export class News extends Component {
	static defaultProps = {
		country: 'in',
		pageSize: 9,
		category: 'general'
	}
	
	static propTypes = {
		country: PropTypes.string,
		pageSize: PropTypes.number,
		category: PropTypes.string
	}
    constructor(){
        super();
        this.state = {
            articles: [],
            loading: false,
			page: 1
        }
    }

    async componentDidMount(){
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=e5c8d47f4bb84396861f582a4a91dd12&pageSize=${this.props.pageSize}`;

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
		let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=e5c8d47f4bb84396861f582a4a91dd12&page=${this.state.page-1}&pageSize=${this.props.pageSize}`;
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
			let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=e5c8d47f4bb84396861f582a4a91dd12&page=${this.state.page+1}&pageSize=${this.props.pageSize}`;
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
      const {articles}= this.state
    return (
      <div className='container' style={{marginTop: '86px',}}>
        <h1 className='text-center'> <span style={{fontSize:'30x', fontFamily: 'fantasy', color:'red', letterSpacing:'4px'}}>Newsflix</span> - Top Headlines</h1> 
		{this.state.loading && <Spinner/>}

        <div className="row">
            {!this.state.loading && articles.map((article)=>{
            return <div className="col-md-4" key={article.url}>
                <NewsItem title={article.title ? article.title.slice(0, 45) : ""} description={article.description ? article.description.slice(0, 88) : ""} imageUrl={article.urlToImage} newsUrl={article.url} author={!article.author? "unknown" :article.author} date={article.publishedAt} source={article.source.name} />
            </div>
            })}  
			<div className="container d-flex justify-content-between">
				<button disabled={this.state.page <= 1} type="button" className="btn btn-info" onClick={this.handlePreviousClick}>&larr; Previous
                </button>

				<button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize)} type="button" className="btn btn-warning" onClick={this.handleNextClick}>Next &rarr;</button>
			</div>
        </div>
      </div>
    )
  }
}

export default News