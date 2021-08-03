import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Checkbox from '@material-ui/core/Checkbox'
import {
    /*changeIsOnline, */ changeIsOnlineWithThunk,
} from '../../actions/profile'
import ProfileInfo from '../ProfileInfo'

export default function Profile(props) {
    const dispatch = useDispatch()
    const { age, name, isOnline } = useSelector((state) => state.profile)

    const handleIsOnlineChange = (event) => {
        dispatch(changeIsOnlineWithThunk(event.target.checked))
    }

    return (
        <div>
            <p>Profile page</p>
            <ProfileInfo age={age} name={name} />

            <FormControlLabel
                control={
                    <Checkbox
                        checked={isOnline}
                        onChange={handleIsOnlineChange}
                        name="checkedB"
                        color="primary"
                    />
                }
                label={<p>Is user online</p>}
            />
        </div>
    )
}
