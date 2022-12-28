import React from 'react'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from 'styled-components';
import {movieData} from '../sliderData'
import SliderCard from './SliderCard';

function ImgSlider() {
  console.log("hello")
  console.log('movie data : ', movieData);
  let settings = {
    dots: true,
    infinte: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true

  }
 
  const sliders= movieData.map((slider)=>{
    return (
      <SliderCard 
      id={slider.id}
      bgImg={slider.bgImg}
      poster={slider.poster}
      mediaType={slider.mediaType}
      overview={slider.overview}
      year={slider.year}
      name={slider.name}
      trailerKey={slider.key}
      />
    )
  })

  return (
    <Carousel {...settings}>
      {sliders}
    </Carousel>
  )
}

export default ImgSlider

const Carousel = styled(Slider)`
margin-top:20px;
width:95vw;
margin-left: 31px;


ul li button{
  &:before{
    font-size:10px;
    color:rgb(150 ,158,171);
  }

}

 li.slick-active button::before{
    color:white;
 }
   .slick-list{
  overflow: visible;
}

button{
  z-index:1;
}

`
// const Wrap = styled.div`
// cursor:pointer;


//    img {
//     margin-left: 16px;
//     border: 4px solid transparent;
//     border-radius:4px;
//     width:99%;
//     height:100%;
//     box-shadow: rgb(0 0 0 /69%) 0px 26px 30px -10px,
//     rgb(0 0 0 /73%) 0px 16px 10px -10px;
//     transition-duration: 300ms;

//    &:hover {
//     border:4px solid rgba(249,249 ,249,0.8);

//    }

// }

// `