import PropTypes from 'prop-types'
import React from 'react'

function Message(props) {
    const { nick = '1234id', render = () => {} /* lodash.noop */ } = props

    return (
        <p id={nick}>
            {props.author}: {props.text}
        </p>
    )
}

Message.propTypes = {
    nick: PropTypes.string,
    author: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
}
Message.defaultProps = {}

export default Message
