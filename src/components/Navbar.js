import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class Navbar extends Component {

    // navbar navbar-expand-lg navbar-dark bg-dark p-0 navbar-fixed-top
    // navbar navbar-inverse navbar-fixed-top
    render() {
        return (
            <div>
                <nav className="navbar navbar-fixed-top navbar-expand-lg navbar-dark p-0" style={navbarStyle} >
                    <div className="container-fluid">
                        <Link className="navbar-brand" style={{fontSize:'30x', fontFamily: 'fantasy', color:'red', letterSpacing:'4px'}}to="/"><h1>Newsflix</h1></Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <Link className="nav-link" aria-current="page"to="/">Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link"to="/about">About</Link>
                                </li>
                                <li><Link className="nav-link" to="/technology">Technology</Link></li>
                                <li><Link className="nav-link" to="/sports">Sports</Link></li>
                                <li><Link className="nav-link" to="/business">Business</Link></li>
                                <li><Link className="nav-link" to="/entertainment">Entertainment</Link></li>
                                <li><Link className="nav-link" to="/general">General</Link></li>
                                <li><Link className="nav-link" to="/health">Health</Link></li>
                                <li><Link className="nav-link" to="/science">Science</Link></li>
                                
                               
                                
                            </ul>
                            
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}

const navbarStyle = {
    backgroundColor: 'black',
    position: 'fixed',
    top: 0,
    width: '100%',
    zIndex: 2,
    boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px'
}

export default Navbar