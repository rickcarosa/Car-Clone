import React, { Component } from 'react';
import glamorous, {P, Ul, Div} from 'glamorous';

const Styles = glamorous.div({
    // height: '100',
    width: '100%',
    color: 'white',
    fontSize: '50px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
})

let VideoDiv = glamorous.div({
    marginTop: '90px',
})

const BaseSpecsList = glamorous.li({
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    fontSize: '15px',
    borderBottom: '1px solid rgba(255, 255, 255, 0.5)',
    padding: '16px 0',
    lineHeight: '20px',
    ':last-child': {
        borderBottom: 'none'
    }
},({fontFamily}) => ({fontFamily}))

const Book = glamorous.p({
    fontFamily: 'Gotham Book',
    margin: 0
})
const Medium = glamorous.p({
    fontFamily: 'Gotham Medium',
    margin: 0
})

class BaseSpecs extends Component {
    render() {
        return(
            <Styles>
                <VideoDiv>
                    <video src='https://www.tesla.com/ns_videos/roadster_videos/roadster-loop-imperial.mp4?20180329' autoplay="" loop muted="" playsinline="" style={{height: '216px', width: 'auto'}}></video>
                </VideoDiv>
                <Div marginTop='90px' width='100%' height='auto' display='flex' flexDirection='row' justifyContent='center' alignItems='center'>
                    <Ul width='476px' listStyle='none' padding='0' margin='0' zIndex='5'>
                        <BaseSpecsList fontFamily='Gotham Bold'>Base Specs</BaseSpecsList>
                        <BaseSpecsList><Book>Acceleration 0-60 mph</Book><Medium>1.9 sec</Medium></BaseSpecsList>
                        <BaseSpecsList><Book>Acceleration 0-100 mph</Book><Medium>4.2 sec</Medium></BaseSpecsList>
                        <BaseSpecsList><Book>Acceleration 1/4 mile</Book><Medium>8.8 sec</Medium></BaseSpecsList>
                        <BaseSpecsList><Book>Top Speed</Book><Medium>Over 250 mph</Medium></BaseSpecsList>
                        <BaseSpecsList><Book>Wheel Torque</Book><Medium>10,000 Nm</Medium></BaseSpecsList>
                        <BaseSpecsList><Book>Mile Range</Book><Medium>620 miles</Medium></BaseSpecsList>
                        <BaseSpecsList><Book>Seating</Book><Medium>4</Medium></BaseSpecsList>
                        <BaseSpecsList><Book>Drive</Book><Medium>All-Wheel Drive</Medium></BaseSpecsList>
                        <BaseSpecsList><Book>Base Price</Book><Medium>$200,000</Medium></BaseSpecsList>
                        <BaseSpecsList><Book>Base Reservation</Book><Medium>$50,000</Medium></BaseSpecsList>
                        <BaseSpecsList><Book>Founders Series Price</Book><Medium>$250,000</Medium></BaseSpecsList>
                        <BaseSpecsList><div><Book>Founders Series Reservation</Book><P fontFamily='Gotham Light' margin='0' fontSize='13px'>(1,000 reservations available)</P></div><Medium>$250,000</Medium></BaseSpecsList>
                    </Ul>
                </Div>
            </Styles>
        ) 
    }
}

export default BaseSpecs;