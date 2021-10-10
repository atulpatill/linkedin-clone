import React from 'react'
import { Avatar} from '@material-ui/core'
import PhotoIcon from '@material-ui/icons/Photo';
import YouTubeIcon from '@material-ui/icons/YouTube';
import TodayIcon from '@material-ui/icons/Today';
import AssignmentIcon from '@material-ui/icons/Assignment';
import './css/feed.css'


function Feed(){
    return( <div className = "feed">
       <div className ="feed__input">
           <Avatar/>
           <form>
               <input type="text" placeholder =" Start a Post"/>
               <input type ="submit" />
           </form>
       </div>
       <div className ="feed__options">
           <div className ="option">
           <PhotoIcon/>
           <span>Photos</span>

           </div>
           <div className ="option">
           <YouTubeIcon/>
           <span>Video</span>

           </div>
           <div className ="option">
           <TodayIcon/>
           <span>Event</span>

           </div>
           <div className ="option">
           <AssignmentIcon/>
           <span>Write Article</span>

           </div>

       </div>
     

    </div>
   )
}

export default Feed