import React from 'react'
import ListItem from '@material-ui/core/ListItem'
import List from '@material-ui/core/List'
import './styles.css'
import { useHistory } from 'react-router'
import Input from '../Input/Input'
import { Button } from '@material-ui/core'

export default function Chats(props) {
    const {
        chats = [],
        currentChat,
        onCurrentChatChange,
        onAddChat,
        onRemoveChat,
    } = props
    const history = useHistory()

    const handleChatLinkClick = (chat) => {
        onCurrentChatChange(chat)
        history.push(`/chats/${chat.id}`)
    }

    return (
        <div className="chats">
            <div className="chats__sidebar">
                <List className="app__sidebar" subheader={<p>Список чатов</p>}>
                    {chats.map((chat) => (
                        <div style={{ display: 'flex' }}>
                            <ListItem
                                button
                                component="a"
                                key={chat.id}
                                selected={chat.id === currentChat.id}
                                onClick={() => handleChatLinkClick(chat)}
                            >
                                {chat.name}
                            </ListItem>
                            <Button onClick={() => onRemoveChat(chat.id)}>
                                Удалить
                            </Button>
                        </div>
                    ))}
                </List>
            </div>

            <Input onSubmit={onAddChat} />
        </div>
    )
}
