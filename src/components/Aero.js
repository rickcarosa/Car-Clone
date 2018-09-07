import React, {Component} from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import glamorous from 'glamorous';
import BackView from '../images/back@2.jpg'


const AeroDiv = glamorous.div({
    height: '46.875rem',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    marginTop: '-14rem'
})

const BackViewImg = glamorous.img({
    height: '46.875rem',
    width: '62.5rem'
})

const HeadingDiv = glamorous.div({
    position: 'absolute',
    width: '440px',
    height: '5rem',
    marginTop: '43%',
    left: '31%',
    lineHeight: '1',
    '@media(min-width: 930px) and (max-width: 1023px)': {
        left: '25%',
        marginTop: '57%'
    },
    '@media(min-width: 1024px) and (max-width: 1079px)': {
        left: '27%',
        marginTop: '52%'
    },
    '@media(min-width: 1080px) and (max-width: 1129px)': {
        left: '28%',
        marginTop: '49%'
    },
    '@media(min-width: 1130px) and (max-width: 1239px)': {
        left: '29%',
        marginTop: '47%'
    }
})

const Heading = glamorous.h1({
    fontFamily: '"Gotham Medium", "M Hei PRC W45", "M Hei HK W42", "M Hei HK W40", HelveticaNeue-Regular, "Helvetica Neue Regular", "Helvetica Neue", Helvetica, Arial, sans-serif',
    position: 'absolute',
    color: '#fff',
    fontSize: '28px',
    fontWeight: '400',
    width: '85%'
})

const AeroParagraph = glamorous.div({
    position: 'absolute',
    width: '440px',
    height: '7rem',
    left: '31%',
    marginTop: '49%',
    lineHeight: '24px',
    '@media(min-width: 930px) and (max-width: 1023px)': {
        left: '25%',
        marginTop: '65%'
    },
    '@media(min-width: 1024px) and (max-width: 1079px)': {
        left: '27%',
        marginTop: '59%'
    },
    '@media(min-width: 1080px) and (max-width: 1129px)': {
        left: '28%',
        marginTop: '56%'
    },
    '@media(min-width: 1130px) and (max-width: 1239px)': {
        left: '29%',
        marginTop: '53%'
    }
})

const Paragraph = glamorous.p({
    fontFamily: '"HeiS ASC Simplified Chinese", "HeiS ASC Simplified Chinese_n5", "HeiT ASC Traditional Chinese", HelveticaNeue-Regular, "Helvetica Neue Regular", "Helvetica Neue", Helvetica, Arial, sans-serif',
    position: 'absolute',
    color: '#fff',
    fontSize: '16px',
    fontWeight: '300',
    width: '87%'
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
                <BackViewImg src={BackView} alt='back view' data-aos='fade-up' data-aos-duration='1000' data-aos-once='false'/>
                <HeadingDiv>
                    <Heading>
                        Designed for Performance and Aero Efficiency
                    </Heading>
                </HeadingDiv>
                <AeroParagraph>
                    <Paragraph>
                        As an all-electric supercar, Roadster maximizes the potential of aerodynamic engineering—with record-setting performance and efficiency.
                    </Paragraph>
                </AeroParagraph>
            </AeroDiv>
        )
    }
}

export default Aero;