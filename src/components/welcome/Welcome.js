import React, {Component} from 'react';
import glamorous, {Div, Li} from 'glamorous';
import background from '../../images/roadster-social.jpg';
import {Logo} from '../../images/logo.js';


const BackgroundImg = glamorous.img({
    height: '100vh',
    width: '100vw',
    backgroundSize: 'cover',
    backgroundPostion: 'center',
    position: 'absolute'
})

const Nav = glamorous.div({
    position: 'absolute',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    alignContent: 'center',
    height: '3.25rem',
    backgroundPosition: 'center',
    width: '100%',
    justifyContent: 'space-between'
})

const NavList = glamorous.ul({
    display: 'flex',
    flexDirection: 'row',
    alignContent: 'center',
    alignItems: 'center',
    backgroundPosition: 'center',
    fontFamily: '"Gotham Medium", "M Hei PRC W45", "M Hei HK W42", "M Hei HK W40", HelveticaNeue-Regular, "Helvetica Neue Regular", "Helvetica Neue", Helvetica, Arial, sans-serif;',
    fontWeight: '400',
    fontSize: '13px',
    color: '#222',
    listStyleType: 'none',
    width: 'calc(100% - 16rem)'
})

const ListContents = glamorous.li({
    margin: '0 10px',
    ':nth-child(4)':{
        color: 'white',
        opacity: '0.7'
    },
    ':hover':{
        color: 'white',
        opacity: '0.7',
        transition: '.2s ease-in-out',
        cursor: 'pointer'
    }
})

const ListSectionTwo = glamorous.li({
    display: 'flex',
    flexDirection: 'row',
    alignContent: 'center',
    alignItems: 'center',
    backgroundPosition: 'center',
    paddingLeft: '7rem'

})

const ListContentsTwo = glamorous.li({
    margin: '0 10px',
    ':hover':{
        color: 'white',
        opacity: '0.7',
        transition: '.2s ease-in-out',
        cursor: 'pointer'
    }
   
})

const ListSectionThree = glamorous.li({
    display: 'flex',
    flexDirection: 'row',
    alignContent: 'center',
    alignItems: 'center',
    backgroundPosition: 'center',
    paddingLeft: '1rem'
})

const Hamburger = glamorous.span({
    width: '18px',
    height: '2px',
    backgroundColor: 'red',
    ':before':{
        width: '18px',
        height: '2px',
        backgroundColor: 'red',
        content: `''`,
        position: 'absolute',
        top: 'calc(50% + 5px)'
    },
    ':after':{
        width: '18px',
        height: '2px',
        backgroundColor: 'red',
        content: `''`,
        position: 'absolute',
        top: 'calc(50% - 6px)'
    }
})

class Welcome extends Component {
    constructor(){
        super()
        this.state = {

        }
    }

    render(){
        return(
            <Div>
                <BackgroundImg src={background} alt='background'/>
                <Nav>
                    <Logo/>
                    <NavList>
                        <ListContents> MODEL S </ListContents>
                        <ListContents> MODEL X </ListContents>
                        <ListContents> MODEL 3 </ListContents>
                        <ListContents> ROADSTER </ListContents>
                        <ListContents> ENERGY </ListContents>
                        <ListSectionTwo>
                            <ListContentsTwo> SHOP </ListContentsTwo>
                            <ListContentsTwo> SIGN IN </ListContentsTwo>
                            <ListSectionThree>
                                <Hamburger/>
                            </ListSectionThree>
                        </ListSectionTwo>
                    </NavList>
                </Nav>
            </Div>
            
        )
    }
}

export default Welcome;