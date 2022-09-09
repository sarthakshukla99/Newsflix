import './App.css';
import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import { Route, Routes } from 'react-router-dom';

export default class App extends Component {
  render() {
    return (
      <div>
            <Navbar/>
        <Routes>
            <Route path='/' element={<News key={1} pageSize={9} country="in" category="general"/>} />

            <Route path='/technology'
                element={<News key={2} pageSize={9} country="in" category="technology"/>}
            />

            <Route path='/sports'
                element={<News key={3} pageSize={9} country="in" category="sports"/>}
            />

            <Route path='/entertainment'
                element={<News key={4} pageSize={9} country="in" category="entertainment"/>}
            />

            <Route path='/business'
                element={<News key={5} pageSize={9} country="in" category="business"/>}
            />

            <Route path='/health'
                element={<News key={6} pageSize={9} country="in" category="health"/>}
            />

            <Route path='/science'
                element={<News key={7} pageSize={9} country="in" category="science"/>}
            />
        </Routes>
      </div>
    )
  }
}
