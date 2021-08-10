import firebase from "firebase";

export const ADD_CHAT = 'CHATS::ADD_CHAT'
export const REMOVE_CHAT = 'CHATS::REMOVE_CHAT'

export const addChat = (chatId, name) => ({
    type: ADD_CHAT,
    payload: {
        id: chatId,
        name,
    },
})

export const removeChat = (chatId) => ({
    type: REMOVE_CHAT,
    payload: {
        chatId,
    },
})

export const addChatToDatabase = (chatId, name) => {
    return () => {
        firebase.database().ref('chats').child(chatId).push({ id: chatId, name })
    }
}

export const removeChatFromDatabase = (chatId) => {
    return async (dispatch) => {
        try {
            await firebase.database().ref('chats').child(chatId).remove()

            dispatch(removeChat(chatId))
        } catch (error) {
            console.error(error.message)
        }
    }
}

export const subscribeChatsChangings = () => {
    return (dispatch, getState) => {
        firebase.database().ref('chats').on('child_added', (snapshot) => {
            const { id: chatId, name } = Object.values(snapshot.val())[0]

            dispatch(addChat(chatId, name))
        })

        firebase.database().ref('chats').on('child_changed', (snapshot) => {
            const { id: chatId, name } = Object.values(snapshot.val())[0]

            dispatch(addChat(chatId, name))
        })
    }
}
