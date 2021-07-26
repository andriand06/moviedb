import React from 'react'
//API
//config
import { POSTER_SIZE,BACKDROP_SIZE,IMAGE_BASE_URL } from '../config';
//components
import HeroImage from '../components/HeroImage';
import Grid from '../components/Grid/';
import Thumb from '../components/Thumb';
import SearchBar from '../components/SearchBar'
import Button from '../components/Button'
import Spinner from '../components/Spinner'
//hooks
import { useHomeFetch } from '../Hooks/useHomeFetch';
//Image
import NoImage from '../assets/images/no_image.jpg';
//Functional Component
export default function Home() {
   const { state, loading, error, setSearchTerm , searchTerm, setIsLoadingMore } = useHomeFetch();
    console.log(state);

    if (error) return <div>Something went wrong... </div>
    return (
        <>
            {!searchTerm && state.results[0] &&
           <HeroImage  
           image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${state.results[0].backdrop_path}`}
           title={state.results[0].original_title}
           text={state.results[0].overview}/> 
            }
            <SearchBar setSearchTerm={setSearchTerm} />
           <Grid header={ searchTerm ? 'Search Results' : 'Popular Movies'}>
               {state.results.map(movie => (
                   <Thumb key={movie.id} clickable image={movie.poster_path ? IMAGE_BASE_URL + POSTER_SIZE + movie.poster_path : NoImage } movieId ={movie.id} />             
            
                ))}
           </Grid>
           
            {loading && <Spinner />}
           {state.page < state.total_pages && !loading && (
               <Button text="Load More" callback={() => setIsLoadingMore(true)} />
           )}

            
        </>
    )
}
