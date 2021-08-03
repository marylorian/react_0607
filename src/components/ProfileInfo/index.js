import React from 'react'
import PropTypes from 'prop-types'

function ProfileInfo({ name, age }) {
    return (
        <React.Fragment>
            <p>
                <b>Name: </b>
                {name}
            </p>
            <p>
                <b>Age: </b>
                {age}
            </p>
        </React.Fragment>
    )
}

ProfileInfo.propTypes = {
    name: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired,
}

export default ProfileInfo
