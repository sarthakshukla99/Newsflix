import React, { Component } from 'react'

export class Spinner extends Component {
  render() {
    return (
    <div className='text-center my-5' style={{position: 'relative', top:'35%'}}>
          
        <div class="spinner-grow text-danger" role="status">
            <span class="visually-hidden">Loading...</span>
        </div>
        <div class="spinner-grow text-warning" role="status">
            <span class="visually-hidden">Loading...</span>
        </div>
        <div class="spinner-grow text-info" role="status">
            <span class="visually-hidden">Loading...</span>
        </div>



    </div>
    )
  }
}

export default Spinner