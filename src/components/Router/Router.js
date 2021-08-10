import React from 'react'
import { Switch, Route, Redirect } from 'react-router'
import '../App/App.css'
import Chat from '../Chat/Chat'
import Home from '../Home'
import Chats from '../Chats/Chats'
import Profile from '../Profile/Profile'
import HomeContainer from '../Home/HomeContainer'
import News from '../News'
import Login from '../Login'
import { useSelector } from 'react-redux'
import OptimisationExample from "../OptimisationExample/OptimisationExample";

const PrivateRoute = (props) => {
    const isAuthed = useSelector((state) => state.profile.isAuthed)

    return isAuthed ? <Route {...props} /> : <Redirect to="/login" />
}

export default function Router() {
    return (
        <Switch>
            <Route
                path="/"
                exact
                render={() => (
                    <React.Fragment>
                        <p>Container</p>
                        <HomeContainer />

                        <p>Component</p>
                        <Home
                            age={12}
                            name={'Alice'}
                            onChangeProfileName={(name) => console.log(name)}
                        />
                    </React.Fragment>
                )}
            />

            <PrivateRoute exact path="/chats" component={Chats} />

            <PrivateRoute path="/chats/:chatId" component={Chat} />

            <PrivateRoute path="/profile">
                <Profile />
            </PrivateRoute>

            <Route path="/login" component={Login} />

            <Route path="/news" component={News} />

            <Route path="/optimisation" render={() => <OptimisationExample/>}/>

            <Route>
                <p>404: not found</p>
            </Route>
        </Switch>
    )
}
