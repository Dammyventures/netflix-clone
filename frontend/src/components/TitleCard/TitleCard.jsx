import React, { useEffect, useRef, useState } from 'react'
import './TitleCard.css'
import cards_data from '../../assets/cards/Cards_data'



const TitleCard = ({title,category}) => {


  const [apiData, setApiData] = useState([]);

  const cardsRef = useRef();
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2NTUxYmJhYmQ3YWQzOTRmMjBhZGVlN2Y0NWZmMjg0MCIsIm5iZiI6MTcyNDYyMzc2Mi4yNjM2OTcsInN1YiI6IjY2YWEwMGQ5MzRjYTc0NjIwZjc1NjliMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.GBqFFXDXc8tZhOUVe5Krf2JuigGsubHJhPRoj2iMMo8'
    }
  };
 


const handleWheel = (event)=>{
event.preventDefault();
cardsRef.current.scrollLeft += event.deltaY;
}

useEffect(()=>{
 
  fetch(`https://api.themoviedb.org/3/movie/${category?category:"now_playing"}?language=en-US&page=1`, options)
    .then(response => response.json())
    .then(response => setApiData(response.results))
    .catch(err => console.error(err));

cardsRef.current.addEventListener('wheel', handleWheel);
},[])

  return (
    <div className='titlecards'>
      <h2>{title?title:"Popular on Netflix"}</h2>
      <div className="card-list" ref={cardsRef}>
        {apiData.map((card, index)=>{
      return <div className="card" key={index}>
        <img src={`https://image.tmdb.org/t/p/w500`+card.backdrop_path} alt="" />
        <p>{card.original_title}</p>
      </div>
        })}
      </div>
    </div>
  )
}

export default TitleCard