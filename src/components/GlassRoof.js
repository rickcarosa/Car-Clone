import React, {Component} from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import glamorous from 'glamorous';
import GlassTop from '../images/top@2.jpg';
import NoGlassTop from '../images/top_2@2.jpg'
import {connect} from 'react-redux';
import {updateYoffset} from '../ducks/reducer';

const GlassRoofDiv = glamorous.div({
    height: '896px',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    marginTop: '-5rem'
})

const GlassTopImg = glamorous.img({
    height: '896px',
    opacity: '0',
    transition: 'opacity .7s'
})

const GlassTitleDiv = glamorous.div({
    position: 'absolute',
    marginTop: '60%',
    left: '31%',
    height: '3rem',
    '@media(max-width: 930px)': {
        marginTop: '81%',
        left: '25%'
    }
})

const GlassTitle = glamorous.h1({
    fontFamily: '"Gotham Medium", "M Hei PRC W45", "M Hei HK W42", "M Hei HK W40", HelveticaNeue-Regular, "Helvetica Neue Regular", "Helvetica Neue", Helvetica, Arial, sans-serif',
    color: '#fff',
    fontSize: '23px',
    lineHeight: '23px',
    fontWeight: '400'
})

const GlassTextDiv = glamorous.div({
    position: 'absolute',
    marginTop: '62.5%',
    left: '31%',
    width: '30%',
    height: '6rem',
    '@media(max-width: 930px)': {
        left: '25%',
        marginTop: '84%',
        width: '39%'
    }
})

const GlassText = glamorous.p({
    fontFamily: '"HeiS ASC Simplified Chinese", "HeiS ASC Simplified Chinese_n5", "HeiT ASC Traditional Chinese", HelveticaNeue-Regular, "Helvetica Neue Regular", "Helvetica Neue", Helvetica, Arial, sans-serif',
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
        // console.log(this.props.yOffset)
        
        const {yOffset} = this.props

        let roofImg = yOffset <= 2903 ? GlassTop : NoGlassTop
        
        return(
            <GlassRoofDiv>
                <GlassTopImg src={roofImg} alt='glass top car' data-aos='fade-up' data-aos-duration='1000' data-aos-once='false'/>
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

function mapStateToProps(state){
    return{
        yOffset: state.yOffset
    }
}

export default connect(mapStateToProps, {updateYoffset}) (GlassRoof);