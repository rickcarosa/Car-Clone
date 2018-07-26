import React, {Component} from 'react';
import glamorous, {} from 'glamorous';
import background from '../../images/roadster-social.jpg'


const Background = glamorous.div({
    background: '#000',
    width: '100%'
})

const Img = glamorous.img({
    height: '100vh',
    width: '100vw',
    backgroundSize: 'cover',
    backgroundPostion: 'center'
})

class Home extends Component {
    constructor(){
        super()
        this.state = {

        }
    }
    
    render(){
        return(
            <Background>

                <Img src={background} alt='background'/>
                
            </Background>
        )
    }
}

export default Home;