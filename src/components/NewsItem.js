import React, { Component } from 'react'

export class NewsItem extends Component {

  render() {
      let {title, description, imageUrl, newsUrl } = this.props;
    return (
    <div className="my-3 d-flex justify-content-center align-item-center">
        <div className="card" style={{width: "18rem"}}>
            <img src={!imageUrl?'https://heavy.com/wp-content/uploads/2022/03/this-day-in-history-pioneer-10.jpg?quality=65&strip=all&w=780':imageUrl} className="card-img-top" alt="..."/>
            <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{description}...</p>

            <a rel="noreferrer" href={newsUrl} target="_blank" className ="btn btn-sm btn-danger shadow">Read More</a>
            </div>
        </div>
    </div>
    )
  }
}

export default NewsItem