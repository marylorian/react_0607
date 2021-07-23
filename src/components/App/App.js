import React, { useContext } from 'react'
import './App.css'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import Input from '../Input/Input'
import { connect, useDispatch, useSelector } from 'react-redux'
import { changeName } from '../../actions/profile'
import { bindActionCreators } from 'redux'
import Router from '../Router/Router'
import Chat from '../Chat/Chat'
import { Link } from 'react-router-dom'

// Контекст
export const ChatContext = React.createContext({ chatId: undefined })

class ExampleClass1 extends React.Component {
    // static contextType = ChatContext // 2 way

    render() {
        console.log({ context: this.context })

        return <div>Class Component with context</div>
    }
}
// ExampleClass.contextType = ChatContext // 1 way
// конец

// Присоединение классового компонента к глобальному стору
class ExampleClass extends React.Component {
    handleSubmit = (newName) => {
        this.props.changeName(newName)
    }

    render() {
        const { name, age } = this.props

        return (
            <>
                <div className="bordered">
                    <p>
                        <b>Name: </b>
                        {name}
                    </p>
                    <p>
                        <b>Age: </b>
                        {age}
                    </p>
                </div>

                <Input onSubmit={this.handleSubmit} />
            </>
        )
    }
}
const mapStateToProps = (state) => {
    return state.profile
}
// mapDispatchToProps as function
//
// const mapDispatchToProps = (dispatch) => {
//     return {
//         changeName: (newName) => dispatch(changeName(newName)),
//     }
// }

// mapDispatchToProps as object
//
// const mapDispatchToProps = {
//     changeName,
// }

// mapDispatchToProps as bindActionCreators
const mapDispatchToProps = (dispatch) =>
    bindActionCreators(
        {
            changeName,
        },
        dispatch
    )
const ExampleClassConnected = connect(
    mapStateToProps,
    mapDispatchToProps
)(ExampleClass)
// конец

// Декораторы
function sum(a, b) {
    return a + b
}

const withLogger = (func) => {
    return function (...args) {
        console.log({ args })
        return func(...args)
    }
}

sum(1, 2) // 3

const sumWithLogger = withLogger(sum)

sumWithLogger(3, 4)
// конец

// HOC
const withContextHOC = (Component, ContextInstance) => {
    return (props) => {
        const contextProps = useContext(ContextInstance)

        return <Component context={contextProps} {...props} />
    }
}

const ChatWithContext = withContextHOC(Chat, ChatContext)
// конец

function App() {
    const [chats, setChats] = React.useState([
        { id: 'chat1', name: 'Чат 1' },
        { id: 'chat2', name: 'Чат 2' },
        { id: 'chat3', name: 'Чат 3' },
    ])
    const [currentChat, setCurrentChat] = React.useState(chats[0])

    const dispatch = useDispatch()
    const { name, age } = useSelector((state) => state.profile)

    const handleChangeChat = (chat) => setCurrentChat(chat)

    const handleNameSubmit = (newName) => {
        console.log('call action with ', newName)

        dispatch(changeName(newName))
    }

    return (
        <>
            <div className="app app__content app__content_row">
                <List className="app__sidebar" subheader="Список чатов">
                    {chats.map((chat) => (
                        <ListItem
                            button
                            key={chat.id}
                            selected={chat.id === currentChat.id}
                            onClick={() => handleChangeChat(chat)}
                        >
                            {chat.name}
                        </ListItem>
                    ))}
                </List>

                <div className="app__main">
                    {/*<Chat getIsChatExists={handleIsChatExists} />*/}
                    {/*<ExampleClassConnected />*/}
                    {/*<ChatWithContext />*/}
                </div>
            </div>

            <div className="bordered">
                <p>
                    <b>Name: </b>
                    {name}
                </p>
                <p>
                    <b>Age: </b>
                    {age}
                </p>
            </div>

            <Input onSubmit={handleNameSubmit} />
        </>
    )
}

export default App
