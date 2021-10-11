import React from 'react'
import {Avatar} from '@material-ui/core'
import MoreVertIcon from '@material-ui/icons/MoreVert';
import './css/post.css'

function Post() {
    return (
        <div className = "posts">
            <div className ="post__header">
                <div className ="post__headerLeft">
                    <Avatar />
                    <div className="post_profile_details">
                        <h3>Atul Patil</h3>

                        <p>Lets build linkedIn clone</p>
                    </div>
                 
                </div>
                <MoreVertIcon />
            </div>
            
        </div>
    )
}

export default Post
