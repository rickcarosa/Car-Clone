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
    zIndex: '5'
})

const Title = glamorous.h1({
    fontFamily: '"Gotham Medium", "M Hei PRC W45", "M Hei HK W42", "M Hei HK W40", HelveticaNeue-Regular, "Helvetica Neue Regular", "Helvetica Neue", Helvetica, Arial, sans-serif;',
    color: '#fff',
    fontSize: '23px',
    lineHeight: '23px',
    fontWeight: '400'
})

const TextDiv = glamorous.div({
    position: 'absolute',
    marginTop: '34%',
    left: '31%',
    width: '26%',
    zIndex: '5'
})

const Text = glamorous.p({
    fontFamily: '"HeiS ASC Simplified Chinese", "HeiS ASC Simplified Chinese_n5", "HeiT ASC Traditional Chinese", HelveticaNeue-Regular, "Helvetica Neue Regular", "Helvetica Neue", Helvetica, Arial, sans-serif;',
    position: 'absolute',
    color: '#fff',
    fontSize: '16px',
    fontWeight: '300',
    lineHeight: '23px'
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

