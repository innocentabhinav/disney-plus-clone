import React from 'react'
import styled from 'styled-components'
import ViewCard from './ViewCard'
import { data } from '../viewCardData'

function Viewers() {

    const cards=data.map((card)=>{
        return (
            <ViewCard
            id={card.id}
            logo={card.logo}
            bgVideo={card.bgVideo}
            />
        )
    })

  return (
    <Container>
        {cards}
        </Container>
  )
}

export default Viewers

const Container=styled.div`
margin-left: 30px;

margin-top: 20px;
display: flex;
align-items: center;
justify-content: space-between;
height: 200px;
width: 95vw;
`