import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { changeName } from '../../actions/profile'
import Input from '../Input/Input'

function Home(props) {
    const dispatch = useDispatch()
    const { name, age } = useSelector((state) => state.profile)

    const handleNameSubmit = (newName) => {
        console.log('call action with ', newName)

        dispatch(changeName(newName))
    }

    return (
        <div className="app app__content app__content_row">
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
        </div>
    )
}

export default Home
