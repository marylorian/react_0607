import React from 'react'
import './App.css'
import Router from '../Router/Router'
import { Link } from 'react-router-dom'
import firebase from 'firebase'
import { useDispatch } from 'react-redux'
import { changeIsAuthed } from '../../actions/profile'

function App() {
    const dispatch = useDispatch()

    React.useEffect(() => {
        firebase.auth().onAuthStateChanged((user) => {
            console.log('onAuthStateChanged', { user })

            dispatch(changeIsAuthed(Boolean(user)))
        })
    }, [])

    const handleSignOut = (e) => {
        e.preventDefault()

        firebase.auth().signOut()
    }

    return (
        <div className="app">
            <div className="header">
                <Link to="/">Home</Link>
                <Link to="/chats">Chats</Link>
                <Link to="/profile">Profile</Link>
                <Link to="/news">News</Link>
                <Link to="/optimisation">Optimisation</Link>
                <Link to="/login">Login</Link>
                <a href="/" onClick={handleSignOut}>
                    Sign out
                </a>
            </div>

            <Router />
        </div>
    )
}

export default App
