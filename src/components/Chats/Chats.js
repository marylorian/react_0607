import React from 'react'
import { useHistory } from 'react-router'
import ListItem from '@material-ui/core/ListItem'
import List from '@material-ui/core/List'
import IconButton from '@material-ui/core/IconButton'
import DeleteIcon from '@material-ui/icons/Delete'
import Input from '../Input/Input'
import './styles.css'

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
            <List className="chats__sidebar" subheader={<p>Список чатов</p>}>
                {chats.map((chat) => (
                    <div className="chats__sidebar__item" key={chat.id}>
                        <ListItem
                            button
                            component="a"
                            selected={chat.id === currentChat.id}
                            onClick={() => handleChatLinkClick(chat)}
                        >
                            {chat.name}
                        </ListItem>
                        <IconButton
                            variant="contained"
                            onClick={() => onRemoveChat(chat.id)}
                        >
                            <DeleteIcon />
                        </IconButton>
                    </div>
                ))}
            </List>

            <Input
                label="Имя чата"
                placeholder="Введите имя чата"
                onSubmit={onAddChat}
            />
        </div>
    )
}
