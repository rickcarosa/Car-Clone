import React, { Component } from 'react' 
import glamorous from 'glamorous'

const Styles = glamorous.div({
    position: 'relative',
    top: 'calc(100vh - 56px)',
    height: '200vh',
    width: '100vw'
,    backgroundColor: 'black',
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

