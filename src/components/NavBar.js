import React, { Component } from 'react';
import glamorous from 'glamorous';
import {LogoTwo} from '../images/logo.js';
import glamor, {css} from 'glamor';

const slideDown = css.keyframes({
    '0%': {transform: 'translateY(-52px)'},
    '100%': 'none'
})

const NavBarDiv = glamorous.div({
    height: '52px',
    width: '100%',
    position: 'fixed',
    zIndex: '500',
    backgroundColor: 'rgba(34,34,34,0.9)',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    top: '0',
    animation: `${slideDown} .3s`
})

const ButtonDiv = glamorous.div({
    display: 'flex',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    width: '315px'
})

const ReserveButton = glamorous.button({
    fontFamily: '"Gotham Medium", "M Hei PRC W45", "M Hei HK W42", "M Hei HK W40", HelveticaNeue-Regular, "Helvetica Neue Regular", "Helvetica Neue", Helvetica, Arial, sans-serif',
    border: '2px solid white',
    borderRadius: '21px',
    lineHeight: '22px',
    color: 'white',
    backgroundColor: 'transparent',
    textAlign: 'center',
    cursor: 'pointer',
    fontWeight: '400',
    fontSize: '12px',
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
    lineHeight: '22px',
    color: 'white',
    backgroundColor: 'transparent',
    textAlign: 'center',
    cursor: 'pointer',
    fontWeight: '400',
    fontSize: '12px',
    marginRight: '1rem',
    width: '150px',
    ':hover':{
        color: '#333',
        transition: '.5s',
        backgroundColor: '#fff'
    }
})

class NavBar extends Component{
    constructor(){
        super()
        this.state = {

        }
    }
    
    render(){

        return(
            <NavBarDiv>
                <LogoTwo/>
                <ButtonDiv>
                    <ReserveButton>
                        RESERVE NOW
                    </ReserveButton>
                    <NewsButton>
                        GET NEWSLETTER
                    </NewsButton>
                </ButtonDiv>
            </NavBarDiv>
        )
    }
}

export default NavBar;