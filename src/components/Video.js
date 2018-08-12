import React, {Component} from 'react';
import glamorous from 'glamorous';


const VideoDiv = glamorous.div({
    height: '564px',
    width: '100%',
    display: 'flex',
    justifyContent: 'center'
})

class Video extends Component {
    constructor(){
        super()
        this.state = {

        }
    }

    render(){
        return(
            <VideoDiv>
                <video src='https://player.vimeo.com/video/249563752?color=ff0000&title=0&byline=0&portrait=0&autoplay=0&autopause=0&player_id=249563752' style={{width: 'auto', height: '530px'}}></video>
            </VideoDiv>
        )
    }
}

export default Video;