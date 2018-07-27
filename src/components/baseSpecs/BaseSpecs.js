import React, { Component } from 'react' 
import glamorous from 'glamorous'

const Styles = glamorous.div({
    position: 'relative',
    top: 'calc(100vh - 56px)',
    height: '100vh',
    backgroundColor: 'black',
    color: 'white',
    fontSize: '50px'
})

class BaseSpecs extends Component {
    render() {
        console.log('pizza')
        return(
            <Styles>
                <div>
                    <video src='https://www.tesla.com/ns_videos/roadster_videos/roadster-loop-imperial.mp4?20180329' autoplay="" loop="" muted="" playsinline="" ></video>
                </div>
            </Styles>
        ) 
    }
}

export default BaseSpecs

