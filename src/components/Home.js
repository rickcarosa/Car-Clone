import React, {Component} from 'react';
import glamorous, {} from 'glamorous';
import Welcome from './Welcome';
import BaseSpecs from './BaseSpecs';
import Aero from './Aero';
import Interior from './Interior';
import GlassRoof from './GlassRoof';
import Video from './Video';
import Footer from './Footer';

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
                <Interior/>
                <GlassRoof/>
                <Video/>
                <Footer/>
                
            </Background>
        )
    }
}

export default Home;