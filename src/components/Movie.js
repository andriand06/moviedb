import React from 'react'
import { useParams } from 'react-router-dom'
//Config

import { IMAGE_BASE_URL, POSTER_SIZE} from '../config'
//Components
import Grid from './Grid'
import Spinner from './Spinner'
import BreadCrumb from './BreadCrumb'
import MovieInfo from './MovieInfo'
import MovieInfoBar from './MovieInfoBar'
import Actor from './Actor'
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
            <MovieInfoBar time={movie.runtime} budget={movie.budget} revenue={movie.revenue} />
            <Grid header='Actors'>
                {movie.actors.map(actor => (
                    <Actor 
                    key={actor.credit_id} 
                    name={actor.name} 
                    character={actor.character} 
                    imageUrl={
                        actor.profile_path  
                        ? `${IMAGE_BASE_URL}${POSTER_SIZE}${actor.profile_path}`
                        : NoImage
                    } />
                ))}
            </Grid>
        </>
    );
}

export default Movie;