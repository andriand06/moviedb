import React from 'react'
import { useParams } from 'react-router-dom'
//Config

import { IMAGE_BASE_URL, POSTER_SIZE} from '../config'
//Components
import Grid from './Grid'
import Spinner from './Spinner'
import BreadCrumb from './BreadCrumb'
import MovieInfo from './MovieInfo'
//Hook
import { useMovieFetch } from '../Hooks/useMovieFetch'

//Image
import NoImage from '../assets/images/no_image.jpg'
const Movie = () => {
    //mengambil movie id dari link to menggunakan use params hook
    const { movieId } = useParams();
    const { state:movie, loading, error} = useMovieFetch(movieId);

    if(loading) return <Spinner/>
    if(error) return <div>Something went wrong...</div>

    console.log(movie);
    return (
        <>
            <BreadCrumb movieTitle={movie.original_title}/>
            <MovieInfo movie={movie}></MovieInfo>
            
        </>
    );
}

export default Movie;