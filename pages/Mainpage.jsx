import React from 'react'
import mybg from './mybg.mp4'
const Mainpage = () => {
  return (
    <div>
       <video src={mybg} autoPlay muted loop class="video-bg"/>
    </div>
  )
}

export default Mainpage
