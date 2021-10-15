import { Avatar } from '@material-ui/core'
import React from 'react'
import { useSelector } from 'react-redux'
import { selectUser } from './features/userSlice'

function Headeroptions({Icon , title, avatar}) {

    const user = useSelector(selectUser)
    return (
        <div className = "header__options">
            {
                Icon && <Icon></Icon>
            }
            {
                avatar && <Avatar name= {avatar} src = {user.photoURl}/>
            }
           
            <span>{title}</span>
            
        </div>
    )
}

export default Headeroptions
