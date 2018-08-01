import React, {Component} from 'react';
import glamorous, {Div, Sub} from 'glamorous';
import glamor, {css} from 'glamor';
import background from '../../images/roadster-social.jpg';
import {Logo} from '../../images/logo.js';
import {Speedometer, Shadow, Needle, Arrow} from '../../images/stats.js';


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
    width: 'calc(100% - 26rem)'
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
    paddingLeft: '14rem'
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
    backgroundColor: 'black',
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
    fontFamily: '"Gotham Medium", "M Hei PRC W45", "M Hei HK W42", "M Hei HK W40", HelveticaNeue-Regular, "Helvetica Neue Regular", "Helvetica Neue", Helvetica, Arial, sans-serif;',
    fontSize: '50px',
    color: '#333333',
    margin: '0',
    fontWeight: '500'
})

const Paragraph = glamorous.p({
    position: 'absolute',
    width: '23.75rem',
    top: '70%',
    lineHeight: '24px',
    fontFamily: '"HeiS ASC Simplified Chinese","HeiS ASC Simplified Chinese_n5","HeiT ASC Traditional Chinese","HelveticaNeue-Regular","Helvetica Neue Regular","Helvetica Neue",Helvetica,Arial,sans-serif;',
    fontWeight: '300',
    fontSize: '16px',
    color: '#fff',
    textAlign: 'center',
    opacity: '0.6',
    left: '35%'
})

const StatList = glamorous.ul({
    position: 'absolute',
    top: '85%',
    height: '2.82rem',
    width: '49.5rem',
    listStyleType: 'none',
    left: '18%',
    margin: '0'
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
    fontFamily: '"HeiS ASC Simplified Chinese", "HeiS ASC Simplified Chinese_n5", "HeiT ASC Traditional Chinese", HelveticaNeue-Regular, "Helvetica Neue Regular", "Helvetica Neue", Helvetica, Arial, sans-serif;',
    fontWeight: '400',
    fontSize: '70px',
    color: '#fff',
    position: 'absolute',
    top: '-16px',
    display: 'inline-flex'
})

const LittleS = glamorous.span({
    fontSize: '46px',
    paddingTop: '15px'
})

const BottomSectionOne = glamorous.div({
    fontFamily: '"HeiS ASC Simplified Chinese", "HeiS ASC Simplified Chinese_n5", "HeiT ASC Traditional Chinese", HelveticaNeue-Regular, "Helvetica Neue Regular", "Helvetica Neue", Helvetica, Arial, sans-serif;',
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
    fontFamily: '"HeiS ASC Simplified Chinese", "HeiS ASC Simplified Chinese_n5", "HeiT ASC Traditional Chinese", HelveticaNeue-Regular, "Helvetica Neue Regular", "Helvetica Neue", Helvetica, Arial, sans-serif;',
    fontWeight: '400',
    paddingLeft: '13.8rem',
    position: 'absolute',
    top: '-7px'
})

const Plus = glamorous.span({
    fontFamily: '"HeiS ASC Simplified Chinese", "HeiS ASC Simplified Chinese_n5", "HeiT ASC Traditional Chinese", HelveticaNeue-Regular, "Helvetica Neue Regular", "Helvetica Neue", Helvetica, Arial, sans-serif;',
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
    fontFamily: '"HeiS ASC Simplified Chinese", "HeiS ASC Simplified Chinese_n5", "HeiT ASC Traditional Chinese", HelveticaNeue-Regular, "Helvetica Neue Regular", "Helvetica Neue", Helvetica, Arial, sans-serif;',
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
    fontFamily: '"HeiS ASC Simplified Chinese", "HeiS ASC Simplified Chinese_n5", "HeiT ASC Traditional Chinese", HelveticaNeue-Regular, "Helvetica Neue Regular", "Helvetica Neue", Helvetica, Arial, sans-serif;',
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
    fontFamily: '"HeiS ASC Simplified Chinese", "HeiS ASC Simplified Chinese_n5", "HeiT ASC Traditional Chinese", HelveticaNeue-Regular, "Helvetica Neue Regular", "Helvetica Neue", Helvetica, Arial, sans-serif;',
    width: '100%',
    fontWeight: '300',
    marginTop: '34px',
    fontSize: '12px',
    color: '#fff',
    lineHeight: '20px',
    marginLeft: '26.5rem'
})

const ReserveButton = glamorous.button({
    fontFamily: '"Gotham Medium", "M Hei PRC W45", "M Hei HK W42", "M Hei HK W40", HelveticaNeue-Regular, "Helvetica Neue Regular", "Helvetica Neue", Helvetica, Arial, sans-serif;',
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
    fontSize: '15px',
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
    animation: `${bounce} 1.5s infinite`
})

class Welcome extends Component {
    constructor(){
        super()
        this.state = {

        }
    }

    render(){
        return(
            <Div height='100vh'>
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

                <Header> 
                    <Title> Tesla </Title>
                    <TitleTwo> Roadster </TitleTwo>
                </Header>

                <Paragraph> The quickest car in the world, with record-setting acceleration, range and performance. </Paragraph>

                <StatList>
                    <Seconds>
                        <TopSectionOne>
                            <Speedometer/>
                            <Shadow/>
                            <Needle/>
                                <SpeedSec>
                                    1.9 <LittleS> <Sub> s </Sub> </LittleS>
                                </SpeedSec>
                        </TopSectionOne>
                        <BottomSectionOne> 0-60 mph </BottomSectionOne>
                    </Seconds>

                    <MilesPerHour>
                            <TopSectionTwo>
                                <Plus> <Sub> + </Sub> </Plus> <Number> 250 </Number> <Sub margin-left='3.3rem'
                                                                                          position='absolute' 
                                                                                          margin-top='-26px'
                                                                                          font-size='19px'> mph 
                                                                                     </Sub>
                            </TopSectionTwo>
                            <BottomSectionTwo> Top Speed </BottomSectionTwo>
                    </MilesPerHour>

                    <MilesRange>
                        <TopSectionThree>
                            <Miles> 620 </Miles> <MilesSub> <Sub> mi </Sub> </MilesSub>
                        </TopSectionThree>
                        <BottomSectionThree> Miles Range </BottomSectionThree>
                    </MilesRange>

                    <ReserveButton> 
                        Reserve now
                    </ReserveButton>
                </StatList>

                <ArrowDiv>
                    <Arrow/>
                </ArrowDiv>
            </Div>
        )
    }
}

export default Welcome;