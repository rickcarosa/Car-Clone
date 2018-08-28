import React, {Component} from 'react';
import glamorous, {} from 'glamorous';
import Welcome from './Welcome';
import BaseSpecs from './BaseSpecs';
import Aero from './Aero';
import Interior from './Interior';
import GlassRoof from './GlassRoof';
import Video from './Video';
import Footer from './Footer';
import NavBar from './NavBar';
import {connect} from 'react-redux';
import {updateYoffset} from '../ducks/reducer';

const Background = glamorous.div({
    background: '#000',
    width: '100%'
})

class Home extends Component {
    constructor(){
        super()
        this.state = {
            
        }
        this.handleScroll = this.handleScroll.bind(this)
    }

    handleScroll(){
        this.props.updateYoffset(window.pageYOffset)
    }

    render(){
        window.onscroll = this.handleScroll
        // console.log(this.props.yOffset)
        const {yOffset} = this.props

        // let navBar = yOffset >= 636 ? <NavBar/> : null

        return(
            <Background>

                <Welcome/>
                {/* {navBar} */}
                <NavBar/>
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

function mapStateToProps(state){
    return{
        yOffset: state.yOffset
    }
}

export default connect(mapStateToProps, {updateYoffset}) (Home);