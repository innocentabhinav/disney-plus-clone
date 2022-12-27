import React, { useEffect ,useState } from 'react'
import styled from 'styled-components'
import RecommendedMovie from './RecommendedMovie';

function Movies() {
    
     const [movies, setmovies] = useState([]);

     useEffect( () =>{
       async function fetchApi(){
            const response= await fetch('https://api.themoviedb.org/3/trending/all/day?api_key=20771c1b28c58de4f40a4f221be84f5a');
            const dataReceived =await response.json();
            console.log('data : ', dataReceived);
            setmovies(dataReceived.results);
        }
        fetchApi();
     } ,[])

     const  getImageURL=(path)=>{
         return `http://image.tmdb.org/t/p/w500${path}`
     }
    
     const cards = movies.map((card) =>{
        let name;

        if('original_title' in card){
            name=card.original_title;
        }
        else if ( 'original_name' in card ) {
            name = card.original_name;
          }
        const image = getImageURL(card.poster_path)
        const rating=card.vote_average.toFixed(2);
        const description=card.overview;
        const mediaType=card.media_type;
        const year=card.release_date;
        const id=card.id;

        return (

            <RecommendedMovie
                imageURL={getImageURL(card.poster_path)}
                name={name}
                rating={rating}
                description={description}
                mediaType={mediaType}
                year={year}
                id={id}
            />
        )
        
    
     })

    return (
        <Container>
            <h4>Trending</h4>
            <GridWrapper>
                <div className="movie-card-div">
                    {cards}
                </div>
            </GridWrapper>

        </Container>
    )
}

export default Movies

const Container = styled.div`
margin-left: 31px;
flex: 1;
width: 95vw;

h4{
    padding-top: 15px;
    padding-bottom: 30px;
    margin: 0;
    margin-left: 5px;
    font-family: Inter;
    font-size: 20px;
    letter-spacing: 0.15px;

}

.movie-card-div {
    display: grid;
    grid-template-columns: 375px 375px 375px 375px;
    grid-column-gap: 91px;
    align-content: space-between;
    grid-row-gap:70px ;

}


`



const GridWrapper = styled.div`
width: 100%;
padding-top: 12px;
display: flex;
justify-content: center;

`
