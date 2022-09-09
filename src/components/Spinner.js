import React, { Component } from 'react'

export class Spinner extends Component {
  render() {
    return (
    <div className='text-center my-5' style={{position: 'relative', top:'35%'}}>
          
        <div className="spinner-grow text-danger" role="status">
            <span className="visually-hidden">Loading...</span>
        </div>
        <div className="spinner-grow text-warning" role="status">
            <span className="visually-hidden">Loading...</span>
        </div>
        <div className="spinner-grow text-info" role="status">
            <span className="visually-hidden">Loading...</span>
        </div>



    </div>
    )
  }
}

export default Spinner