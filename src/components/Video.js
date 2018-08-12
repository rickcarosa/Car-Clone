import React, {Component} from 'react';
import glamorous from 'glamorous';


const VideoDiv = glamorous.div({
    height: '900px',
    width: '100%',
    display: 'flex',
    justifyContent: 'center'
})

const TextDiv = glamorous.div({
    display: 'flex',
    justifyContent: 'center',
    position: 'absolute',
    marginTop: '33rem'
})

const UnveilDate = glamorous.p({
    fontFamily: '"HeiS ASC Simplified Chinese", "HeiS ASC Simplified Chinese_n5", "HeiT ASC Traditional Chinese", HelveticaNeue-Regular, "Helvetica Neue Regular", "Helvetica Neue", Helvetica, Arial, sans-serif;',
    color: '#fff',
    fontSize: '15px',
    fontWeight: '300'
})

const LineDiv = glamorous.div({
    position: 'absolute',
    display: 'flex',
    justifyContent: 'center',
    marginTop: '37.5rem',
    ':before':{
        width: '1px',
        height: '75px',
        content: `''`,
        position: 'absolute',
        backgroundColor: 'gray'
    }
})

const ButtonDiv = glamorous.div({
    width: '178px',
    height: '99px',
    position: 'absolute',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    marginTop: '45rem'
})

const ReserveButton = glamorous.button({
    fontFamily: '"Gotham Medium", "M Hei PRC W45", "M Hei HK W42", "M Hei HK W40", HelveticaNeue-Regular, "Helvetica Neue Regular", "Helvetica Neue", Helvetica, Arial, sans-serif;',
    width: '178px',
    height: '40px',
    border: '3px solid white',
    borderRadius: '21px',
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

const NewsButton = glamorous.button({
    fontFamily: '"Gotham Medium", "M Hei PRC W45", "M Hei HK W42", "M Hei HK W40", HelveticaNeue-Regular, "Helvetica Neue Regular", "Helvetica Neue", Helvetica, Arial, sans-serif;',
    width: '178px',
    height: '40px',
    border: '3px solid white',
    borderRadius: '21px',
    fontWeight: '400',
    cursor: 'pointer',
    color: '#fff',
    backgroundColor: 'transparent',
    fontSize: '15px',
    marginTop: '10px',
    ':hover':{
        color: '#333',
        transition: '.5s',
        backgroundColor: '#fff'
    }
})

class Video extends Component {
    constructor(){
        super()
        this.state = {

        }
    }

    render(){
        return(
            <VideoDiv>
                <video src='https://player.vimeo.com/video/249563752' style={{width: 'auto', height: '530px'}}></video>
                <TextDiv>
                    <UnveilDate>
                        Watch the Roadster Unveil · November 16, 2017
                    </UnveilDate>
                </TextDiv>
                <LineDiv/>
                <ButtonDiv>
                    <ReserveButton> Reserve Now </ReserveButton>
                    <NewsButton> Get Newsletter </NewsButton>
                </ButtonDiv>
            </VideoDiv>
        )
    }
}

export default Video;