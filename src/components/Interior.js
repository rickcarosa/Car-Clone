import React, {Component} from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import glamorous from 'glamorous';
import IntView from '../images/interior@2.jpg';

const InteriorDiv = glamorous.div({
    width: '100%',
    height: '31rem',
    display: 'flex',
    justifyContent: 'center',
    marginTop: '4rem'
})

const InteriorImg = glamorous.img({
    height: '375px',
    width: '48rem'
})

const TitleDiv = glamorous.div({
    position: 'absolute',
    marginTop: '31%',
    left: '31%',
    zIndex: '5',
    height: '3rem',
    width: '90px',
    '@media(min-width: 930px) and (max-width: 1023px)': {
        left: '25%',
        marginTop: '41.5%'
    },
    '@media(min-width: 1024px) and (max-width: 1079px)': {
        left: '27%',
        marginTop: '37.5%'
    },
    '@media(min-width: 1080px) and (max-width: 1129px)': {
        left: '28%',
        marginTop: '35.5%'
    },
    '@media(min-width: 1130px) and (max-width: 1239px)': {
        left: '29%',
        marginTop: '34.5%'
    }
})

const Title = glamorous.h1({
    fontFamily: '"Gotham Medium", "M Hei PRC W45", "M Hei HK W42", "M Hei HK W40", HelveticaNeue-Regular, "Helvetica Neue Regular", "Helvetica Neue", Helvetica, Arial, sans-serif',
    color: '#fff',
    fontSize: '23px',
    lineHeight: '23px',
    fontWeight: '400'
})

const TextDiv = glamorous.div({
    position: 'absolute',
    marginTop: '33.5%',
    left: '31%',
    width: '300px',
    zIndex: '5',
    height: '5.5rem',
    '@media(min-width: 930px) and (max-width: 1023px)': {
        left: '25%',
        marginTop: '44.5%'
    },
    '@media(min-width: 1024px) and (max-width: 1079px)': {
        left: '27%',
        marginTop: '40.5%'
    },
    '@media(min-width: 1080px) and (max-width: 1129px)': {
        left: '28%',
        marginTop: '38.5%'
    },
    '@media(min-width: 1130px) and (max-width: 1239px)': {
        left: '29%',
        marginTop: '37.5%'
    }
})

const Text = glamorous.p({
    fontFamily: '"HeiS ASC Simplified Chinese", "HeiS ASC Simplified Chinese_n5", "HeiT ASC Traditional Chinese", HelveticaNeue-Regular, "Helvetica Neue Regular", "Helvetica Neue", Helvetica, Arial, sans-serif',
    position: 'absolute',
    color: '#fff',
    fontSize: '16px',
    fontWeight: '300',
    lineHeight: '23px',
    width: '96%'
})

class Interior extends Component {
    constructor(){
        super()
        this.super = {

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
            <InteriorDiv>
                <InteriorImg src={IntView} alt='interior view' data-aos='fade-up' data-aos-duration='1000' data-aos-once='false'/>
                <TitleDiv>
                    <Title>
                        Interior
                    </Title>
                </TitleDiv>
                <TextDiv>
                    <Text>
                        The first supercar to set every performance record and still fit seating for four.
                    </Text>
                </TextDiv>
            </InteriorDiv>
        )
    }
}

export default Interior;

