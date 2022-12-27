import React ,{useState}from 'react'
import { useLocation } from 'react-router-dom'
import styled from 'styled-components'
import DetailWrapper from './DetailWrapper';

function Detail() {

const {state}=useLocation();
console.log(state);
const year=state.year;
const image=state.poster;
const overview=state.overview;
const mediaType=state?.mediaType;
const name=state.name;
const id=state.id;

console.log(mediaType);

// const temp=state?.trailerKey;

const renderStuff =() =>{
return (
    <DetailWrapper
    year={year}
    mediaType={mediaType}
    overview={overview}
    />
)
}

    return (
        <Container>

            <BackgroundImg>
                <img src="/images/frozen.jpg" alt="frozen-image" />
            </BackgroundImg>

            <BackgroundTitle>
                <p className="movie-name">{name}</p>
            </BackgroundTitle>

            <Controls>

                <PlayButton >
                    <img src="/images/play-button.png" alt="play-button" />
                    PLAY
                </PlayButton>

                <TrailerButton>
                    <img src="/images/play-button-white.png" alt="trailer-button" />
                    TRAILER {/* {trailerButtonText} */}
                </TrailerButton>

                <AddButton>
                    <img src="/images/plus-button-white.png" alt="plus-button-image" />
                </AddButton>

                <WatchInGroupButton>
                    <img src="/images/group-icon.png" alt="group-button-image" />
                </WatchInGroupButton>

            </Controls>

            <Wrapper>
            { renderStuff ()}
            </Wrapper>

            <PosterImage>
            <img src={image}/>
          </PosterImage>


        </Container>
    )
}

export default Detail

const Container = styled.div`
    color:white;
position: relative;
  height: calc(100vh - 70px);
  padding: 0 calc(3.5vw + 5px);
  padding: 60px 60px;

`
const BackgroundImg = styled.div`
position: fixed;
z-index:-1;
top:0;
bottom:0;
left:0;
right:0;
opacity:0.25;

img{
    width: 100%;
    height: 100%;
    object-fit: cover;
}

`

const BackgroundTitle = styled.div`
 height: 25vh;
 width: 55vw;
 min-width: 470px;
 min-height: 200px;
 display: flex;
 align-items: center;

p {
    font-family: waltographUI;
    font-size: 50px;
    letter-spacing: 1px;
    line-height: 65px;

}
`
const Controls = styled.div`
 width:710px;
 margin-top:0px;
 display: flex;
 gap:25px;
 
`
const PlayButton = styled.button`
border: none;
height:48px ;
width:120px ;
border-radius:3px ;
font-family: Inter;
font-size: 16px;
cursor: pointer;
display: flex;
justify-content: center;
align-items: center;
letter-spacing: 1px;
transition: all 0.25s;

  img {
    margin-right: 3px;
    vertical-align: top;
    width: 24px;
    height: 24px;

  }

  &:hover {
    background-color: rgba(223 ,227, 228,0.9);
  }

`
const TrailerButton = styled(PlayButton)`
 border:1px solid white;
 background-color: rgba(0,0,0,0.56);
 height: 48px;
 width: 150px;
 color:white;

`
const AddButton = styled.button`
border: 2px solid white;
height: 48px;
width: 48px;
border-radius: 24px;
background-color: rgba(0,0,0,0.56);
cursor:pointer;
display: flex;
justify-content: center;
align-items: center;

img{
    opacity: 0.8;
    width: 27px;
    height: 27px;

}

`
const WatchInGroupButton = styled(AddButton)`
background-color: rgba(0,0,0,0.78);

`
const PosterImage=styled.div`
position: absolute;
z-index: 5;
width: 490px;
height: 740px;
top: 85px;
right: 250px;
overflow: hidden;
border-radius: 10px;
border: 7px solid rgba(249,49,249 ,0.1);
cursor: pointer;
box-shadow: rgb(0 0 0 / 69%) 0px 26px 150px -10px,
  rgb(0 0 0 / 73%) 0px 16px 50px -10px;
  transition: all cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
  opacity: 0.92;

  img {
    width: 100% ;
    height: 100%;

  }

  &:hover {
    border-color: rgba(255 ,255, 255 ,0.75);
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 150px -10px,
    rgb(0 0 0 / 73%) 0px 16px 90px -10px;
    transform: scale(1.05);
  }

`
const Wrapper = styled.div`
margin-top: 2px;
width: 750px;
display: inline-block;
height: 480px;

`




