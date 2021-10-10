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

            </div>
            
        </div>
    )
}

export default Sidebar
