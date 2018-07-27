import React, {Component} from 'react';
import glamorous, {} from 'glamorous';
import Welcome from '../welcome/Welcome';
import BaseSpecs from '../baseSpecs/BaseSpecs';


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
                <BaseSpecs />
                
            </Background>
        )
    }
}

export default Home;