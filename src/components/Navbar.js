import React, { Component } from 'react'

export class Navbar extends Component {


    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark p-0">
                    <div className="container-fluid">
                        <a className="navbar-brand" style={{fontSize:'30x', fontFamily: 'fantasy', color:'red', letterSpacing:'4px'}} href="/"><h1>Newsflix</h1></a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <a className="nav-link" aria-current="page" href="/">Home</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/about">About</a>
                                </li>
                                <li><a className="nav-link" href="/about">Business</a></li>
                                <li><a className="nav-link" href="/about">Entertainment</a></li>
                                <li><a className="nav-link" href="/about">General</a></li>
                                <li><a className="nav-link" href="/about">Health</a></li>
                                <li><a className="nav-link" href="/about">Science</a></li>
                                <li><a className="nav-link" href="/about">Sports</a></li>
                                <li><a className="nav-link" href="/about">Technology</a></li>
                                
                               
                                
                            </ul>
                            
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}

export default Navbar