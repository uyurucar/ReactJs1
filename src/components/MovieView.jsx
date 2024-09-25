import Hero from "./Hero";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const MovieView = () =>
{
    const [movieDetail, setMovieDetail] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const {id} = useParams();
	/* add auth key */
    useEffect( () =>
        {
            const options = {
                method: 'GET',
                headers: {
                  accept: 'application/json',
                  Authorization: undefined
                }
              };
              
              fetch(`https://api.themoviedb.org/3/movie/${id}?language=en-US`, options)
                .then(response => response.json())
                .then(response => { setMovieDetail(response); setIsLoading(false);})
                .catch(err => console.error(err));
              
        },[id]);

    function setHero()
    {
        if(isLoading) 
        {
            return <Hero text="Loading..."></Hero>
        }
        else if(movieDetail)
        {
            return <Hero text={ movieDetail.original_title}></Hero>;
        }
    }
    return(
        <>
        {setHero()}
        
        
        </>
    )


}

export default MovieView;