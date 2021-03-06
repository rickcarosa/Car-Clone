import React, {Component} from 'react';
import glamorous, {Div, Sub} from 'glamorous';
import {css} from 'glamor';
import background from '../images/roadster-social.jpg';
import {Logo} from '../images/logo.js';
import {Speedometer, Secs, SecsTwo, Shadow, Needle, Arrow} from '../images/stats.js';
import './Welcome.css';
import AOS from 'aos';
import 'aos/dist/aos.css';


const BackgroundImg = glamorous.img({
    height: '100vh',
    width: '100%',
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
    fontFamily: '"Gotham Medium", "M Hei PRC W45", "M Hei HK W42", "M Hei HK W40", HelveticaNeue-Regular, "Helvetica Neue Regular", "Helvetica Neue", Helvetica, Arial, sans-serif',
    display: 'flex',
    flexDirection: 'row',
    alignContent: 'center',
    alignItems: 'center',
    backgroundPosition: 'center',
    fontWeight: '400',
    fontSize: '13px',
    color: '#222',
    listStyleType: 'none',
    width: 'calc(100% - 25.5rem)',
    lineHeight: '13px',
    '@media(min-width: 930px) and (max-width: 1023px)': {
        fontSize: '12px',
        width: 'calc(100% - 17.5rem)'
    },
    '@media(min-width: 1024px) and (max-width: 1079px)': {
        fontSize: '12px',
        width: 'calc(100% - 19.5rem)'
    },
    '@media(min-width: 1080px) and (max-width: 1129px)': {
        fontSize: '12px',
        width: 'calc(100% - 21.5rem)'
    },
    '@media(min-width: 1130px) and (max-width: 1239px)': {
        fontSize: '12px',
        width: 'calc(100% - 23.5rem)'
    }
})

const ListContents = glamorous.li({
    margin: '0 10px',
    ':nth-child(4)':{
        color: 'white',
        opacity: '0.7',
    },
    ':hover':{
        color: 'white',
        opacity: '0.7',
        transition: '.2s ease-in-out',
        cursor: 'pointer'
    }
})

const ListSectionTwo = glamorous.ul({
    display: 'flex',
    flexDirection: 'row',
    alignContent: 'center',
    alignItems: 'center',
    backgroundPosition: 'center',
    paddingLeft: '15rem',
    listStyleType: 'none',
    '@media(min-width: 930px) and (max-width: 1023px)': {
        paddingLeft: '5rem'
    },
    '@media(min-width: 1024px) and (max-width: 1079px)': {
        paddingLeft: '9rem'
    },
    '@media(min-width: 1080px) and (max-width: 1129px)': {
        paddingLeft: '11rem'
    },
    '@media(min-width: 1130px) and (max-width: 1239px)': {
        paddingLeft: '12rem'
    }
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

const HamburgerDiv = glamorous.div({
    height: '20px',
    width: '18px',
    zIndex: '3', 
    backgroundColor: 'transparent',
    cursor: 'pointer'
})

const Hamburger = glamorous.span({
    width: '18px',
    height: '2px',
    backgroundColor: 'black',
    zIndex: '3',
    cursor: 'pointer',
    marginTop: '8px',
    position: 'absolute',
    ':before':{
        width: '18px',
        height: '2px',
        backgroundColor: 'black',
        content: `''`,
        position: 'absolute',
        top: 'calc(50% + 5px)'
    },
    ':after':{
        width: '18px',
        height: '2px',
        backgroundColor: 'black',
        content: `''`,
        position: 'absolute',
        top: 'calc(50% - 6px)'
    }
})

const rotateBefore = css.keyframes({
    '0%': 'none',
    '100%': {transform: 'rotate(45deg)'}
})

const rotateAfter = css.keyframes({
    '0%': 'none',
    '100%': {transform: 'rotate(-45deg)'}
})

const HamburgerX = glamorous.span({
    ':before':{
        width: '18px',
        height: '2px',
        backgroundColor: 'black',
        content: `''`,
        position: 'absolute',
        top: 'calc(50%)',
        animation: `${rotateBefore} .4s`,
        animationFillMode: 'forwards'
    },
    ':after':{
        width: '18px',
        height: '2px',
        backgroundColor: 'black',
        content: `''`,
        position: 'absolute',
        top: 'calc(50%)',
        animation: `${rotateAfter} .4s`,
        animationFillMode: 'forwards'
    }
})

const Header = glamorous.div({
    textAlign: 'center',
    position: 'absolute',
    width: '100%',
    top: '10%',
    padding: '0'
})

const Title = glamorous.h1({
    fontFamily: '"Gotham Light", "M Hei PRC W45", "M Hei HK W42", "M Hei HK W40", HelveticaNeue-Regular, "Helvetica Neue Regular", "Helvetica Neue", Helvetica, Arial, sans-serif',
    fontSize: '23px',
    color: '#333333',
    fontWeight: '300',
    margin: '0'
})

const TitleTwo = glamorous.h2({
    fontFamily: '"Gotham Medium", "M Hei PRC W45", "M Hei HK W42", "M Hei HK W40", HelveticaNeue-Regular, "Helvetica Neue Regular", "Helvetica Neue", Helvetica, Arial, sans-serif',
    fontSize: '50px',
    color: '#333333',
    margin: '0',
    fontWeight: '400',
    lineHeight: '70px'
})

const Paragraph = glamorous.p({
    position: 'absolute',
    width: '23.75rem',
    top: '70%',
    lineHeight: '24px',
    fontFamily: '"HeiS ASC Simplified Chinese","HeiS ASC Simplified Chinese_n5","HeiT ASC Traditional Chinese","HelveticaNeue-Regular","Helvetica Neue Regular","Helvetica Neue",Helvetica,Arial,sans-serif',
    fontWeight: '100',
    fontSize: '16px',
    color: '#fff',
    textAlign: 'center',
    opacity: '0.8',
    left: '35%',
    '@media(min-width: 930px)': {
        top: '72%',
        lineHeight: '26px',
        left: '30%'
    },
    '@media(min-width: 1080px)': {
        left: '33%'
    },
    '@media(min-width: 1240px)': {
        left: '35%',
        top: '70%',
    }
})

const StatList = glamorous.ul({
    position: 'absolute',
    top: '85%',
    height: '2.82rem',
    width: '49.5rem',
    listStyleType: 'none',
    left: '18%',
    margin: '0',
    '@media(min-width: 930px) and (max-width: 1023px)': {
        top: '86%',
        left: '8%'
    },
    '@media(min-width: 1024px) and (max-width: 1079px)': {
        top: '86%',
        left: '11.7%'
    },
    '@media(min-width: 1080px) and (max-width: 1129px)': {
        top: '86%',
        left: '13.7%'
    },
    '@media(min-width: 1130px) and (max-width: 1239px)': {
        left: '14.7%'
    }
})

const Seconds = glamorous.li({
    position: 'absolute',
    width: '12.375rem',
    height: '3.25rem',
    borderRight: '1px solid rgba(255,255,255,0.4)',
    color: '#fff',
    top: '0',
    left: '0'
})

const TopSectionOne = glamorous.div({
    position: 'absolute',
    transform: 'scale(0.45)',
    transformOrigin: '50% 0',
    left: '24px'
})

const SpeedSec = glamorous.span({
    // fontFamily: '"HeiS ASC Simplified Chinese", "HeiS ASC Simplified Chinese_n5", "HeiT ASC Traditional Chinese", HelveticaNeue-Regular, "Helvetica Neue Regular", "Helvetica Neue", Helvetica, Arial, sans-serif',
    // fontWeight: '400',
    // fontSize: '70px',
    // color: '#fff',
    // top: '-16px',
    // display: 'inline-flex',
    position: 'absolute',
    overflow: 'hidden',
    height: '4rem',
    left: '6rem'
})

const SpeedSecTwo = glamorous.span({
    position: 'absolute',
    overflow: 'hidden',
    height: '4rem',
    left: '10rem'
})

const Dot = glamorous.span({
    fontFamily: '"HeiS ASC Simplified Chinese", "HeiS ASC Simplified Chinese_n5", "HeiT ASC Traditional Chinese", HelveticaNeue-Regular, "Helvetica Neue Regular", "Helvetica Neue", Helvetica, Arial, sans-serif',
    position: 'absolute',
    left: '9.5rem',
    top: '1.4rem',
    transform: 'scale(4)'
})

const LittleS = glamorous.span({
    fontSize: '46px',
    position: 'absolute',
    top: '0',
    left: '13.5rem'
})

const BottomSectionOne = glamorous.div({
    fontFamily: '"HeiS ASC Simplified Chinese", "HeiS ASC Simplified Chinese_n5", "HeiT ASC Traditional Chinese", HelveticaNeue-Regular, "Helvetica Neue Regular", "Helvetica Neue", Helvetica, Arial, sans-serif',
    width: '100%',
    fontWeight: '300',
    fontSize: '12px',
    color: '#fff',
    lineHeight: '20px',
    marginTop: '34px',
    textAlign: 'center'
})

const MilesPerHour = glamorous.li({
    position: 'absolute',
    width: '22.375rem',
    height: '3.25rem',
    borderRight: '1px solid rgba(255,255,255,0.4)',
    color: '#fff'
})

const TopSectionTwo = glamorous.div({
    fontFamily: '"HeiS ASC Simplified Chinese", "HeiS ASC Simplified Chinese_n5", "HeiT ASC Traditional Chinese", HelveticaNeue-Regular, "Helvetica Neue Regular", "Helvetica Neue", Helvetica, Arial, sans-serif',
    fontWeight: '400',
    paddingLeft: '13.8rem',
    position: 'absolute',
    top: '-7px'
})

const Plus = glamorous.span({
    fontFamily: '"HeiS ASC Simplified Chinese", "HeiS ASC Simplified Chinese_n5", "HeiT ASC Traditional Chinese", HelveticaNeue-Regular, "Helvetica Neue Regular", "Helvetica Neue", Helvetica, Arial, sans-serif',
    fontWeight: '500',
    paddingTop: '3px',
    marginLeft: '-12px',
    position: 'absolute',
    fontSize: '22px'
})

const Number = glamorous.span({
    transform: 'scale(0.9)',
    transformOrigin: '50% 0',
    fontSize: '31px'
})

const BottomSectionTwo = glamorous.div({
    fontFamily: '"HeiS ASC Simplified Chinese", "HeiS ASC Simplified Chinese_n5", "HeiT ASC Traditional Chinese", HelveticaNeue-Regular, "Helvetica Neue Regular", "Helvetica Neue", Helvetica, Arial, sans-serif',
    width: '100%',
    fontWeight: '300',
    fontSize: '12px',
    color: '#fff',
    lineHeight: '20px',
    marginTop: '34px',
    marginLeft: '14.5rem'
})

const MilesRange = glamorous.li({
    position: 'absolute',
    width: '22.375rem',
    height: '3.25rem',
    borderRight: '1px solid rgba(255,255,255,0.4)',
    color: '#fff'
})

const TopSectionThree = glamorous.div({
    fontFamily: '"HeiS ASC Simplified Chinese", "HeiS ASC Simplified Chinese_n5", "HeiT ASC Traditional Chinese", HelveticaNeue-Regular, "Helvetica Neue Regular", "Helvetica Neue", Helvetica, Arial, sans-serif',
    fontWeight: '400',
    paddingLeft: '26rem',
    position: 'absolute',
    top: '-7px'
})

const Miles = glamorous.span({
    fontSize: '32px'
})

const MilesSub = glamorous.span({
    position: 'absolute',
    paddingLeft: '3.5rem',
    top: '3px',
    fontSize: '24px'
})

const BottomSectionThree = glamorous.div({
    fontFamily: '"HeiS ASC Simplified Chinese", "HeiS ASC Simplified Chinese_n5", "HeiT ASC Traditional Chinese", HelveticaNeue-Regular, "Helvetica Neue Regular", "Helvetica Neue", Helvetica, Arial, sans-serif',
    width: '100%',
    fontWeight: '300',
    marginTop: '34px',
    fontSize: '12px',
    color: '#fff',
    lineHeight: '20px',
    marginLeft: '26.5rem'
})

const ReserveButton = glamorous.button({
    fontFamily: '"Gotham Medium", "M Hei PRC W45", "M Hei HK W42", "M Hei HK W40", HelveticaNeue-Regular, "Helvetica Neue Regular", "Helvetica Neue", Helvetica, Arial, sans-serif',
    position: 'absolute',
    marginLeft: '34.5rem',
    border: '3px solid white',
    borderRadius: '21px',
    height: '41px',
    width: '12.75rem',
    marginTop: '7px',
    fontWeight: '400',
    cursor: 'pointer',
    color: '#fff',
    backgroundColor: 'transparent',
    fontSize: '12px',
    ':hover':{
        color: '#333',
        transition: '.5s',
        backgroundColor: '#fff'
    }
})

const bounce = css.keyframes({
    '0%': 'none', 
    '50%': 'none',
    '100%': {transform: `translateY(0)`},
    '10%': {transform: `translateY(-7px)`},
    '60%': {transform: `translateY(-4px)`}
})

const ArrowDiv = glamorous.div({
    width: '20px',
    height: '20px',
    position: 'absolute',
    marginTop: '37rem',
    left: '49.3%',
    cursor: 'pointer',
    animation: `${bounce} 1.5s infinite`, 
    '@media(min-width: 930px)': {
        marginTop: '37.5rem',
        left: '49.7%',
    },
    '@media(min-width: 1130px)': {
        marginTop: '37rem',
        left: '49%',
    },
    '@media(min-width: 1240px)': {
        left: '49.3%',
    }
})

const MenuContents = glamorous.li({
    fontFamily: 'Gotham Medium,"M Hei PRC W45","M Hei HK W42","M Hei HK W40","HelveticaNeue-Regular","Helvetica Neue Regular","Helvetica Neue",Helvetica,Arial,sans-serif',
    color: '#222',
    listStyleType: 'none',
    padding: '22px 10px',
    fontSize: '13px',
    opacity: '1',
    fontWeight: '500',
    borderBottom: '1px solid #ddd',
    cursor: 'pointer'
})

class Welcome extends Component {
    constructor(){
        super()
        this.state = {
            menu: 'SlideMenuClose',
            second: 'SlideDivTwoClose',
            hamburgerX: 'false'
        }
    }
    componentDidMount(){
        AOS.init();
    }

    componentDidUpdate(){
        AOS.refresh();
    }

    handleMenu(){
        if(this.state.hamburgerX && this.state.menu === 'SlideMenuClose'){
            this.setState({
                menu: 'SlideMenu',
                second: 'SlideDivTwo'
               
            })
        }else if(!this.state.hamburgerX && this.state.menu === 'SlideMenu'){
            this.setState({
                menu: 'SlideMenuClose',
                second: 'SlideDivTwoClose'
            })
        }
    }

    handleHamburgerX(){
        this.setState({
            hamburgerX: !this.state.hamburgerX
        })
    }

    scrollDown(){
        window.scrollTo({
            top: 635,
            behavior: 'smooth'
        })
    }

    render(){
        let showHamburgerX = !this.state.hamburgerX ? <HamburgerX/> : <Hamburger/>
        return(
            <Div height='100vh'>
                <BackgroundImg src={background} alt='background'/>
                    <Nav>
                        <a href='/'> <Logo/> </a>
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
                                    <HamburgerDiv onClick={() => {this.handleHamburgerX();this.handleMenu()}}>
                                        {showHamburgerX}
                                    </HamburgerDiv>
                                </ListSectionThree>
                            </ListSectionTwo>
                        </NavList>
                    </Nav>

                     {/* slide menu */}
                    <section className='SlideDiv'>
                        <div className={this.state.second}>
                            <div className={`ThirdDiv ${this.state.menu}`}>  
                                    <div className='MenuContentsDiv'>
                                        <MenuContents> NEWS </MenuContents>
                                        <MenuContents> NEW INVENTORY </MenuContents>
                                        <MenuContents> USED INVENTORY </MenuContents>
                                        <MenuContents> CHARGING </MenuContents>
                                        <MenuContents> FIND US </MenuContents>
                                        <MenuContents> SEMI </MenuContents>
                                        <MenuContents> CARBON IMPACT </MenuContents>
                                        <MenuContents> SUPPORT </MenuContents>
                                    </div>
                            </div>
                        </div>
                    </section>

                <Header> 
                    <Title data-aos='fade-up' data-aos-duration='200' data-aos-once='false'> Tesla </Title>
                    <TitleTwo data-aos='fade-up' data-aos-duration='400' data-aos-once='false'> Roadster </TitleTwo>
                </Header>

                <Paragraph data-aos='fade-up' data-aos-duration='1000' data-aos-once='false'> The quickest car in the world, with record-setting acceleration, range and performance. </Paragraph>

                <StatList>
                    <Seconds data-aos='fade-zoom-in' data-aos-delay='250' data-aos-easing='ease-in' data-aos-offset='0'>
                        <TopSectionOne>
                            <Speedometer/>
                            <Shadow/>
                            <Needle/>
                                <SpeedSec>
                                    <Secs/> 
                                </SpeedSec>
                                    <Dot> . </Dot>
                                <SpeedSecTwo>
                                    <SecsTwo/> 
                                </SpeedSecTwo> <LittleS> <Sub> s </Sub> </LittleS>
                        </TopSectionOne>
                        <BottomSectionOne> 0-60 mph </BottomSectionOne>
                    </Seconds>

                    <MilesPerHour data-aos='fade-zoom-in' data-aos-delay='450' data-aos-easing='ease-in' data-aos-offset='0'>
                            <TopSectionTwo>
                                <Plus> <Sub> + </Sub> </Plus> <Number> 250 </Number> <Sub marginLeft='3.3rem'
                                                                                          position='absolute' 
                                                                                          marginTop='-26px'
                                                                                          fontSize='19px'> mph 
                                                                                     </Sub>
                            </TopSectionTwo>
                            <BottomSectionTwo> Top Speed </BottomSectionTwo>
                    </MilesPerHour>

                    <MilesRange data-aos='fade-zoom-in' data-aos-delay='650' data-aos-easing='ease-in' data-aos-offset='0'>
                        <TopSectionThree>
                            <Miles> 620 </Miles> <MilesSub> <Sub> mi </Sub> </MilesSub>
                        </TopSectionThree>
                        <BottomSectionThree> Miles Range </BottomSectionThree>
                    </MilesRange>

                    <ReserveButton data-aos='fade-zoom-in' data-aos-delay='800' data-aos-easing='ease-in' data-aos-offset='0'> 
                        RESERVE NOW
                    </ReserveButton>
                </StatList>

                <ArrowDiv data-aos='fade-zoom-in' data-aos-delay='1500' data-aos-easing='ease-in' data-aos-offset='0' onClick={() => this.scrollDown()}>
                    <Arrow/>
                </ArrowDiv>
            </Div>
        )
    }
}

export default Welcome;