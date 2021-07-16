import React from 'react'
import TextField from '@material-ui/core/TextField'
import usePrevious from '../../hooks/usePrevious'
import Message from '../Message/Message'
import { AUTHORS } from './constants'
import './App.css'

/**
 * <div> -> <img>
 * <div class="123"> -> <div class="234">
 * <MyComponent> -> componentDidUpdate
 * <ul>
 *     <li key="fsf"/>
 *     <li key="hfjgj"/>
 *     <li key="wetwt"/>
 *     <li key="xbxb"/>
 *  </ul>
 *
 * */

function App() {
    const [messageList, setMessageList] = React.useState([])
    const [inputValue, setInputValue] = React.useState('')

    const timer = React.useRef(null)

    const prevMessageList = usePrevious(messageList)

    React.useEffect(() => {
        if (
            prevMessageList?.length < messageList.length &&
            messageList[messageList.length - 1].author !== AUTHORS.BOT
        ) {
            timer.current = setTimeout(
                () =>
                    setMessageList((currentMessageList) => [
                        ...currentMessageList,
                        { author: AUTHORS.BOT, text: 'Привет' },
                    ]),
                1500
            )
        }
    }, [messageList, prevMessageList])

    React.useEffect(() => {
        return () => {
            clearTimeout(timer.current)
        }
    }, [])

    const handleMessageChange = (e) => {
        setInputValue(e.target.value)
    }

    const handleMessageSubmit = (e) => {
        e.preventDefault()

        setMessageList((currentMessageList) => [
            ...currentMessageList,
            { author: AUTHORS.ME, text: inputValue },
        ])
        setInputValue('')
    }

    return (
        <div className="app">
            <div className="bordered">
                {messageList.map((message, index) => (
                    <Message
                        key={index}
                        text={message.text}
                        author={message.author}
                    />
                ))}
            </div>

            <form className="app__form bordered" onSubmit={handleMessageSubmit}>
                <TextField
                    fullWidth
                    required
                    autoFocus
                    className="child__text-field bordered"
                    variant="outlined"
                    label="Сообщение"
                    placeholder="Введите сообщение"
                    value={inputValue}
                    onChange={handleMessageChange}
                />
                <button>Отправить</button>
            </form>
        </div>
    )
}

export default App
