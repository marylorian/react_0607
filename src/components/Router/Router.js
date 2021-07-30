import React from 'react'
import { Switch, Route } from 'react-router'
import '../App/App.css'
import Chat from '../Chat/Chat'
import Home from '../Home'
import Chats from '../Chats/Chats'
import Profile from '../Profile/Profile'
import HomeContainer from '../Home/HomeContainer'

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

            <Route exact path="/chats" component={Chats} />

            <Route path="/chats/:chatId" component={Chat} />

            <Route path="/profile">
                <Profile />
            </Route>

            <Route>
                <p>404: not found</p>
            </Route>
        </Switch>
    )
}
