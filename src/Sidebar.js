import { Avatar } from '@material-ui/core'
import React from 'react'
import { useSelector } from 'react-redux'
import "./css/sidebar.css"
import { selectUser } from './features/userSlice'

function Sidebar() {

    const user = useSelector(selectUser)
    return (
        <div className = "sidebar">
            <div className = "sidebar__profile">
                <img src = "https://images.ctfassets.net/7thvzrs93dvf/wpImage18643/2f45c72db7876d2f40623a8b09a88b17/linkedin-default-background-cover-photo-1.png?w=790&h=196&q=90&fm=png" />

                <div className = "profile__details">
                    <Avatar src = {user.photoURL} />
                  <h4>{user.displayName}</h4>
                  <p>Web Devloper</p>
                </div>
                <div className = "profile__stats">
                    <span > Who viewed your profile</span>
                    <span className = "stats">20</span>
                </div>
                <div className = "profile__stats">
                    <span>Connection<br/><b>Grow your network</b></span>
                    <span className = "stats">150</span>
                </div>

            </div>

            <div className ="sidebar__recent">
                <p>Recent</p>
            <p className="hash"><span>#</span>branding</p>
            <p className="hash"><span>#</span>marketing</p>
            <p className="hash"><span>#</span>web development</p>
            <p className="hash"><span>#</span>reactjs</p>
            <p className="hash"><span>#</span>javascript</p>
            </div>
            
        </div>
    )
}

export default Sidebar
