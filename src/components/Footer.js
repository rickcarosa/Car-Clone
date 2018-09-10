import React, {Component} from 'react';
import glamorous from 'glamorous';
import {Flag} from '../images/usa.js';

const FooterDiv = glamorous.div({
    height: '32px',
    maxWidth: '1060px',
    width: 'auto',
    padding: '0 20px',
    marginLeft: 'auto',
    marginRight: 'auto',
    '@media(min-width: 930px) and (max-width: 1023px)': {
        padding: '0'
    },
    '@media(min-width: 1024px) and (max-width: 1079px)': {
        padding: '0'
    },
    '@media(min-width: 1080px) and (max-width: 1129px)': {
        padding: '0'
    }
})

const FooterNav = glamorous.ul({
    display: 'flex',
    flexDirection: 'row',
    listStyleType: 'none',
    marginLeft: '-1.5rem'
})

const FooterList = glamorous.li({
    fontFamily: '"HeiS ASC Simplified Chinese", "HeiS ASC Simplified Chinese_n5", "HeiT ASC Traditional Chinese", HelveticaNeue-Regular, "Helvetica Neue Regular", "Helvetica Neue", Helvetica, Arial, sans-serif',
    fontSize: '12px',
    lineHeight: '16px',
    fontWeight: '400',
    paddingRight: '10px',
    paddingLeft: '10px',
    color: '#666666',
    textAlign: 'center',
    borderRight: '1px solid rgba(255,255,255,0.4)',
    ':nth-last-child(1)': {
        border: 'none',
        display: 'flex',
        width: '7rem',
        justifyContent: 'right'
    }
})

const FlagSpan = glamorous.span({
    width: '16px',
    height: '11px',
    paddingRight: '10px'
})

class Footer extends Component {
    constructor(){
        super()
        this.state = {

        }
    }

    render(){
        return(
            <FooterDiv>
                <FooterNav>
                    <FooterList> Tesla &copy; 2018  </FooterList>
                    <FooterList> Privacy & Legal </FooterList>
                    <FooterList> Contact </FooterList>
                    <FooterList> Careers </FooterList>
                    <FooterList> Get Newsletter </FooterList>
                    <FooterList> Forums </FooterList>
                    <FooterList> Locations </FooterList>
                    <FooterList>  <FlagSpan> <Flag/> </FlagSpan>  United States  </FooterList>
                </FooterNav>
            </FooterDiv>
        )
    }
}

export default Footer;