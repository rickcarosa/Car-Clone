import React, { Component } from 'react';
import glamorous from 'glamorous';

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

const BaseSpecsList = glamorous.li({
    textDecoration: 'none',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between'
})

class BaseSpecs extends Component {
    constructor(){
        super()
        this.state = {

        }
    }

    render() {
        return(
            <Styles>
                <VideoDiv>
                    <video src='https://www.tesla.com/ns_videos/roadster_videos/roadster-loop-imperial.mp4?20180329' autoplay="" loop muted="" playsinline="" style={{height: '216px', width: 'auto'}}></video>
                </VideoDiv>
                <div>Base Specs</div>
                {/* <ul>
                    <BaseSpecsList><p>Acceleration 0-60 mph</p><p>1.9 sec</p></BaseSpecsList>
                    <BaseSpecsList><p>Acceleration 0-100 mph</p><p>4.2 sec</p></BaseSpecsList>
                    <BaseSpecsList><p>Acceleration 1/4 mile</p><p>8.8 sec</p></BaseSpecsList>
                    <BaseSpecsList><p>Top Speed</p><p>Over 250 mph</p></BaseSpecsList>
                    <BaseSpecsList><p>Wheel Torque</p><p>10,000 Nm</p></BaseSpecsList>
                    <BaseSpecsList><p>Mile Range</p><p>620 miles</p></BaseSpecsList>
                    <BaseSpecsList><p>Seating</p><p>4</p></BaseSpecsList>
                    <BaseSpecsList><p>Drive</p><p>All-Wheel Drive</p></BaseSpecsList>
                    <BaseSpecsList><p>Base Price</p><p>$200,000</p></BaseSpecsList>
                    <BaseSpecsList><p>Base Reservation</p><p>$50,000</p></BaseSpecsList>
                    <BaseSpecsList><p>Founders Series Price</p><p>$250,000</p></BaseSpecsList>
                    <BaseSpecsList><div><p>Founders Series Reservation</p><p>(1,000 reservations available)</p></div><p>$250,000</p></BaseSpecsList>
                </ul> */}
            </Styles>
        ) 
    }
}

export default BaseSpecs;