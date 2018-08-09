import React, {Component} from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import glamorous from 'glamorous';
import GlassTop from '../images/top@2.jpg'

const GlassRoofDiv = glamorous.div({
    height: '896px',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    marginTop: '-5rem'
})

const GlassTopImg = glamorous.img({
    height: '896px'
})

const GlassTitleDiv = glamorous.div({
    position: 'absolute',
    marginTop: '60%',
    left: '31%',
})

const GlassTitle = glamorous.h1({
    fontFamily: '"Gotham Medium", "M Hei PRC W45", "M Hei HK W42", "M Hei HK W40", HelveticaNeue-Regular, "Helvetica Neue Regular", "Helvetica Neue", Helvetica, Arial, sans-serif;',
    color: '#fff',
    fontSize: '23px',
    lineHeight: '23px',
    fontWeight: '400'
})

const GlassTextDiv = glamorous.div({
    position: 'absolute',
    marginTop: '63%',
    left: '31%',
    width: '33%',
})

const GlassText = glamorous.p({
    ontFamily: '"HeiS ASC Simplified Chinese", "HeiS ASC Simplified Chinese_n5", "HeiT ASC Traditional Chinese", HelveticaNeue-Regular, "Helvetica Neue Regular", "Helvetica Neue", Helvetica, Arial, sans-serif;',
    position: 'absolute',
    color: '#fff',
    fontSize: '16px',
    fontWeight: '300',
    lineHeight: '24px'
})

class GlassRoof extends Component{
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
            <GlassRoofDiv>
                <GlassTopImg src={GlassTop} alt='glass top car' data-aos='fade-up' data-aos-duration='1000' data-aos-once='false'/>
                <GlassTitleDiv>
                    <GlassTitle>
                        Glass Roof
                    </GlassTitle>
                </GlassTitleDiv>
                <GlassTextDiv>
                    <GlassText>
                        A lightweight, removable Glass Roof stores in the trunk for an open-air, convertible driving experience.
                    </GlassText>
                </GlassTextDiv>
            </GlassRoofDiv>
        )
    }
}

export default GlassRoof;