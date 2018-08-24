import React, {Component} from 'react';
import glamorous from 'glamorous';
import ReactPlayer from 'react-player';


const VideoDiv = glamorous.div({
    height: '925px',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    marginTop: '5rem'
})

const PlayerDiv = glamorous.div({
    maxWidth: '1060px',
    height: '575px',
    width: '100%',
    marginLeft: 'auto',
    marginRight: 'auto',
    paddingLeft: '20px',
    paddingRight: '20px'
})

const TextDiv = glamorous.div({
    display: 'flex',
    justifyContent: 'center',
    position: 'absolute',
    marginTop: '36rem'
})

const UnveilDate = glamorous.p({
    fontFamily: '"HeiS ASC Simplified Chinese", "HeiS ASC Simplified Chinese_n5", "HeiT ASC Traditional Chinese", HelveticaNeue-Regular, "Helvetica Neue Regular", "Helvetica Neue", Helvetica, Arial, sans-serif',
    color: '#fff',
    fontSize: '15px',
    fontWeight: '300'
})

const LineDiv = glamorous.div({
    position: 'absolute',
    display: 'flex',
    justifyContent: 'center',
    marginTop: '40.5rem',
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
    marginTop: '48.5rem'
})

const ReserveButton = glamorous.button({
    fontFamily: '"Gotham Medium", "M Hei PRC W45", "M Hei HK W42", "M Hei HK W40", HelveticaNeue-Regular, "Helvetica Neue Regular", "Helvetica Neue", Helvetica, Arial, sans-serif',
    width: '178px',
    height: '40px',
    border: '3px solid white',
    borderRadius: '21px',
    fontWeight: '400',
    cursor: 'pointer',
    color: '#fff',
    backgroundColor: 'transparent',
    fontSize: '12px',
    textTransform: 'uppercase',
    ':hover':{
        color: '#333',
        transition: '.5s',
        backgroundColor: '#fff'
    }
})

const NewsButton = glamorous.button({
    fontFamily: '"Gotham Medium", "M Hei PRC W45", "M Hei HK W42", "M Hei HK W40", HelveticaNeue-Regular, "Helvetica Neue Regular", "Helvetica Neue", Helvetica, Arial, sans-serif',
    width: '178px',
    height: '40px',
    border: '3px solid white',
    borderRadius: '21px',
    fontWeight: '400',
    cursor: 'pointer',
    color: '#fff',
    backgroundColor: 'transparent',
    fontSize: '12px',
    marginTop: '15px',
    textTransform: 'uppercase',
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
                <PlayerDiv>
                    <ReactPlayer
                    url='https://player.vimeo.com/video/249563752?color=ff0000&title=0&byline=0&portrait=0&autoplay=0&autopause=0&player_id=249563752'
                    width='100%'
                    height='100%'
                    />
                 </PlayerDiv>
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