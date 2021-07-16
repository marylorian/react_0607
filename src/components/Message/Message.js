import PropTypes from 'prop-types'
import React from 'react'

function Message(props) {
    const { nick = '1234id' } = props

    return (
        <p id={nick}>
            {props.author}: {props.text}
        </p>
    )
}

Message.propTypes = {
    nick: PropTypes.string,
    author: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
}
Message.defaultProps = {}

export default Message
