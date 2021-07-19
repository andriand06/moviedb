import React , { useState, useEffect} from 'react'
//API
import API from '../API'
//config
import { POSTER_SIZE,BACKDROP_SIZE,IMAGE_BASE_URL } from '../config';
//components
import HeroImage from '../components/HeroImage';
import Grid from '../components/Grid/';
import Thumb from '../components/Thumb';
//hooks
import { useHomeFetch } from '../Hooks/useHomeFetch';
//Image
import NoImage from '../assets/images/no_image.jpg';

export default function Home() {
   const { state, loading, error } = useHomeFetch();
    console.log(state);
    return (
        <>
            {state.results[0] &&
           <HeroImage  
           image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${state.results[0].backdrop_path}`}
           title={state.results[0].original_title}
           text={state.results[0].overview}/> 
            }
           <Grid header='Popular Movies'>
               {state.results.map(movie => (
                   <Thumb key={movie.id} clickable image={movie.poster_path ? IMAGE_BASE_URL + POSTER_SIZE + movie.poster_path : NoImage } movieId ={movie.id} />             
            
                ))}
           </Grid>
            
        </>
    )
}
