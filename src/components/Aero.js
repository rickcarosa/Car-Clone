import React, {Component} from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import glamorous from 'glamorous';
import BackView from '../images/back@2.jpg'

const AeroDiv = glamorous.div({
    height: '46.875rem'
})

const BackViewImg = glamorous.img({
    height: '46.875rem',
    width: '62.5rem',

})

class Aero extends Component {
    constructor(){
        super()
        this.state = {

        }
    }

    componentDidMount(){
        AOS.init();
    }

    componentDidUpdate(){
        AOS.refresh();
    }

    render(){
        return(
            <AeroDiv>
                <BackViewImg src={BackView} alt='back view'/>
            </AeroDiv>
        )
    }
}

export default Aero;