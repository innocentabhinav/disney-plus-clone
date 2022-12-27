import React, { useState } from 'react'
import Fade from 'react-reveal';
import styled from 'styled-components';
// import Fade from 'react-reveal/Fade';

function RecommendedMovie(props) {

    const [isHovering, setIsHovering] = useState(false);


    const mouseOverHandle = () => setIsHovering(true);
    const mouseOutHandle = () => setIsHovering(false);

    const overview = props.description;
    const year = props.year;
    const mediaType = props.mediaType;
    const image = props.imageURL;
    const id = props.id;
    const name = props.name;

    return (
        <Container onMouseOver={mouseOverHandle} onMouseOut={mouseOutHandle}>
            <img src={props.imageURL} />

            {isHovering && (
                <MovieDetail>
                    <Fade bottom duration={100}>
                        <Wrapper>
                            <div className="name-div">
                                {props.name} <span>|</span>
                            </div>
                            <div class="rating-div">
                                <div className="logo-div">
                                    <img src="/images/star.png" />
                                </div>
                                <div className="rating">
                                    <p>
                                        {props.rating}
                                    </p>
                                </div>
                            </div>
                        </Wrapper>
                    </Fade>

                </MovieDetail>
            )
            }
        </Container>

    )
}

export default RecommendedMovie

const Container = styled.div`
display: flex;
justify-content: center;
align-items: center;
position:relative;
height: 215px;
width: 375px;
border-radius: 10px;
border: 4px solid rgba(249,249,249,0.1);
box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
  rgb(0 0 0 / 73%) 0px 16px 10px -10px;
overflow: hidden;
cursor: pointer;
transition:  all cubic-bezier(0.25, 0.46, 0.45,0.94) 0.5s;

&:hover {
    border-color: rgba(255,255,255,0.75) ;
    transform: scale(1.07 );
    font-weight: 700;
}


img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

`

const MovieDetail = styled.div`
padding-top: 20px;
padding-left: 3px;
position: absolute;
bottom:0;
left: 0;
right: 0;
height: 80px;
display: flex;
align-items: center;
color: rgba(244,234,234,0.87);
/* box-shadow: insert 0 -100px 56px -30px rgba(14 ,14, 14 ,0.95); */

`

const Wrapper = styled.div`
width: 100%;
height: 50px;
display: flex;
justify-content: center;
align-items: center;

.name-div{

    padding-left: 12px;
    padding-right: 2px;
    font-family: Inter;
    font-weight: 506;
    font-size: 19px;
    white-space: pre-line;
    span{
        margin-left: 3px;
        vertical-align: center;
        font-size: 17px;

    }

}

.rating-div {
    flex:1;
    display: flex;
    align-items: center;
    font-family: Inter;
    font-weight: 506;

.logo-div {
    padding-left: 5px;
    display: flex;
    justify-content: center;
    align-items: center;

    img {
        width: 19px;
        height: 19px;
        margin-right: 5px;

    }
}

.rating {
    display: flex;
    justify-content: center;

    p{
        font-size: 17.5px;
        letter-spacing: 1.5px;
        margin-top: 20px;
        margin-left: 2px;
        font-weight: 556;
    }
}

}

`