import React from 'react'
import SearchIcon from '@material-ui/icons/Search';
import "./css/header.css";
import Headeroptions from './Headeroptions';
import HomeIcon from '@material-ui/icons/Home';
import PeopleIcon from '@material-ui/icons/People'; 
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import MessageIcon from '@material-ui/icons/Message';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { Avatar } from '@material-ui/core';
function Header() {
    return (
        <div className = "header">
            <div className = "header__left">
                <div className = "header__logo">
                 <img src = "https://cdn-icons.flaticon.com/png/128/3536/premium/3536505.png?token=exp=1633848944~hmac=60c4423e04b9a96275fcd326d6b22469"/>
                </div>
                <div className = "header__search">
                  <SearchIcon />
                  <input type = "text" placeholder = "Search"/>
                </div>

            </div>
            <div className = "header__right">
                <Headeroptions Icon = {HomeIcon} title = "Home" />
                <Headeroptions Icon = {PeopleIcon} title = "My Network" />
                <Headeroptions Icon = {BusinessCenterIcon} title = "Jobs" />
                <Headeroptions Icon = {MessageIcon} title = "Messaging" />
                <Headeroptions Icon = {NotificationsIcon} title = "Notification" />
                <Headeroptions avatar = {Avatar} title = "Atul Patil" />
                
           </div>
            
        </div>
    )
}

export default Header
