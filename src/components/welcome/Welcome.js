import React, {Component} from 'react';
import glamorous, {Div} from 'glamorous';
import background from '../../images/roadster-social.jpg';
import {Logo} from '../../images/logo.js';


const Img = glamorous.img({
    height: '100vh',
    width: '100vw',
    backgroundSize: 'cover',
    backgroundPostion: 'center',
    position: 'absolute'
})

const Nav = glamorous.div({
    position: 'relative',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    alignContent: 'center',
    height: '3.5rem',

})

class Welcome extends Component {
    constructor(){
        super()
        this.state = {

        }
    }

    render(){
        return(
            <Div >
                <Img src={background} alt='background'/>
                <Nav>
                    <Logo/>
                
                </Nav>
            </Div>
            
        )
    }
}

export default Welcome;