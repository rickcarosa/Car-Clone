import React, {Component} from 'react';
import glamorous, {} from 'glamorous';
import Welcome from './Welcome';
import BaseSpecs from './BaseSpecs';
import Aero from './Aero';


const Background = glamorous.div({
    background: '#000',
    width: '100%'
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
                <BaseSpecs/>
                <Aero/>
                
            </Background>
        )
    }
}

export default Home;