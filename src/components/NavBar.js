import React, { Component } from 'react';
import glamorous from 'glamorous';
import {LogoTwo} from '../images/logo.js';
import glamor, {css} from 'glamor';
import './NavBar.css';
import {connect} from 'react-redux';
import {updateYoffset} from '../ducks/reducer';


const ButtonDiv = glamorous.div({
    display: 'flex',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    width: '335px'
})

const ReserveButton = glamorous.button({
    fontFamily: '"Gotham Medium", "M Hei PRC W45", "M Hei HK W42", "M Hei HK W40", HelveticaNeue-Regular, "Helvetica Neue Regular", "Helvetica Neue", Helvetica, Arial, sans-serif',
    border: '2px solid white',
    borderRadius: '21px',
    lineHeight: '24px',
    color: 'white',
    backgroundColor: 'transparent',
    textAlign: 'center',
    cursor: 'pointer',
    fontWeight: '400',
    fontSize: '11px',
    marginRight: '1rem',
    width: '150px',
    ':hover':{
        color: '#333',
        transition: '.5s',
        backgroundColor: '#fff'
    }
})

const NewsButton = glamorous.button({
    fontFamily: '"Gotham Medium", "M Hei PRC W45", "M Hei HK W42", "M Hei HK W40", HelveticaNeue-Regular, "Helvetica Neue Regular", "Helvetica Neue", Helvetica, Arial, sans-serif',
    border: '2px solid white',
    borderRadius: '21px',
    lineHeight: '24px',
    color: 'white',
    backgroundColor: 'transparent',
    textAlign: 'center',
    cursor: 'pointer',
    fontWeight: '400',
    fontSize: '11px',
    marginRight: '1rem',
    width: '150px',
    ':hover':{
        color: '#333',
        transition: '.5s',
        backgroundColor: '#fff'
    }
})

class NavBar extends Component{
    constructor(props){
        super(props)
        this.state = {
            toggle: 'NavBarDivClose'
        }
    }

    componentDidUpdate(prevProps){
        const {yOffset} = this.props
        if(prevProps.yOffset !== yOffset){
            if(yOffset >= 636 && this.state.toggle !== 'NavBarDiv'){
                console.log(this.state.toggle)
                this.setState({
                    toggle: 'NavBarDiv'
                })
            }else if(yOffset < 636 && this.state.toggle !== 'NavBarDivClose' ){
                this.setState({
                    toggle: 'NavBarDivClose'
                })
            }
        }
    }
    
    render(){
        console.log(this.props.yOffset)

        return(
            <div className={`MainNav ${this.state.toggle}`}>
                <a href='/'> <LogoTwo/> </a>
                <ButtonDiv>
                    <ReserveButton>
                        RESERVE NOW
                    </ReserveButton>
                    <NewsButton>
                        GET NEWSLETTER
                    </NewsButton>
                </ButtonDiv>
             </div>
        )
    }
}

function mapStateToProps(state){
    return{
        yOffset: state.yOffset
    }
}

export default connect(mapStateToProps, {updateYoffset}) (NavBar);