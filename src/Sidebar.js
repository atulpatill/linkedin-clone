import { Avatar } from '@material-ui/core'
import React from 'react'
import "./css/sidebar.css"

function Sidebar() {
    return (
        <div className = "sidebar">
            <div className = "sidebar__profile">
                <img src = "https://www.freecodecamp.org/news/content/images/2021/06/w-qjCHPZbeXCQ-unsplash.jpg" />

                <div className = "profile__details">
                    <Avatar />
                  <h4>Atul Patil</h4>
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