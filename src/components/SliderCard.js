import React from 'react'
import styled from 'styled-components'
// import { Link } from 'react-router-dom'

function SliderCard(props) {



    return (
     
        <Container>
          <img src={props.bgImg}/>
        </Container>
     
    )
}

export default SliderCard

const Container=styled.div`
  cursor: pointer;
  height: 368px;
  width: 95vw;
  img {
    border: 4px solid transparent;
    width: 100%;
    height: 100%;
    border-radius: 7px;
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    transition: border 0.27s;
  }

  img:hover {
    border: 4px solid rgba(255, 255, 255, 0.7);
  }
`