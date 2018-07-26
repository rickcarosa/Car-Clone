import React, {Component} from 'react';
import glamorous, {} from 'glamorous';
import Welcome from '../welcome/Welcome';


const Background = glamorous.div({
    background: '#000',
    width: '100%',
    postion: 'relative'
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

                <Welcome/>
                
            </Background>
        )
    }
}

export default Home;