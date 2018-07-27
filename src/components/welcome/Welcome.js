import React, {Component} from 'react';
import glamorous, {} from 'glamorous';
import background from '../../images/roadster-social.jpg'


const Img = glamorous.img({
    height: '100vh',
    width: '100vw',
    backgroundSize: 'cover',
    backgroundPostion: 'center'
})

class Welcome extends Component {
    constructor(){
        super()
        this.state = {

        }
    }

    render(){
        return(
            <Img src={background} alt='background'/>
        )
    }
}

export default Welcome;