import React, { Component } from 'react'

export class NewsItem extends Component {

  render() {
      let {title, description, imageUrl, newsUrl, author, date, source } = this.props;
    return (
    <div className="my-3 d-flex justify-content-center align-item-center">
        <div className="card">

            <span class="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{left:'90%', zIndex:1}}>{source}
                <span class="visually-hidden">unread messages</span>
            </span>
            <img src={!imageUrl?'https://heavy.com/wp-content/uploads/2022/03/this-day-in-history-pioneer-10.jpg?quality=65&strip=all&w=780':imageUrl} className="card-img-top" alt="..."/>
            <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{description}...</p>
            <p className='card-text'><small className='text-muted'>By {author} on {new Date(date).toGMTString()}</small></p>
            <a rel="noreferrer" href={newsUrl} target="_blank" className ="btn btn-sm btn-danger shadow">Read More</a>
            </div>

        </div>
    </div>
    )
  }
}

export default NewsItem