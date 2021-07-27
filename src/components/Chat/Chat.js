import React from 'react'
import { Redirect, useParams } from 'react-router'
import Message from '../Message/Message'
import Input from '../Input/Input'
import usePrevious from '../../hooks/usePrevious'
import { AUTHORS } from '../App/constants'

const Chat = (props) => {
    const { getIsChatExists } = props
    const { chatId } = useParams()

    const [messageList, setMessageList] = React.useState([])

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

    const handleMessageSubmit = (newMessageText) => {
        setMessageList((currentMessageList) => [
            ...currentMessageList,
            { author: AUTHORS.ME, text: newMessageText },
        ])
    }

    const isChatExists = React.useMemo(
        () => getIsChatExists(chatId),
        [getIsChatExists, chatId]
    )

    if (!isChatExists) {
        return <Redirect to="/chats" />
    }

    return (
        <div className="chat">
            {messageList.length ? (
                <div className="bordered">
                    {messageList.map((message, index) => (
                        <Message
                            key={index}
                            text={message.text}
                            author={message.author}
                        />
                    ))}
                </div>
            ) : null}

            <Input onSubmit={handleMessageSubmit} />
        </div>
    )
}

export default Chat
