import React from 'react'
import './App.css'
import Router from '../Router/Router'
import { Link } from 'react-router-dom'

function App() {
    return (
        <div className="app">
            <div className="header">
                <Link to="/">Home</Link>
                <Link to="/chats">Chats</Link>
                <Link to="/profile">Profile</Link>
                <Link to="/news">News</Link>
            </div>

            <Router />
        </div>
    )
}

export default App
