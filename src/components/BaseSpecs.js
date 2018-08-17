import React, { Component } from 'react' 
import glamorous from 'glamorous'

const Styles = glamorous.div({
    height: '57.75rem',
    width: '100vw',
    color: 'white',
    fontSize: '50px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
})

let VideoDiv = glamorous.div({
    padding: '100px',
})

class BaseSpecs extends Component {
    render() {
        console.log('pizza')
        return(
            <Styles>
                <VideoDiv>
                    <video src='https://www.tesla.com/ns_videos/roadster_videos/roadster-loop-imperial.mp4?20180329' autoplay="" loop muted="" playsinline="" style={{height: '216px', width: 'auto'}}></video>
                </VideoDiv>
            </Styles>
        ) 
    }
}

export default BaseSpecs

