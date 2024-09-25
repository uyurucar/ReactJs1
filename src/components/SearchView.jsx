import Hero from "./Hero";
import {Link} from "react-router-dom";
//https://image.tmdb.org/t/p/w500/bOGkgRGdhrBYJSLpXaxhXVstddV.jpg

const MovieCard = ({movie}) =>
{
    const imgUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    const detailUrl = `/movies/${movie.id}`;

    return(
        <div className="col-sm-6 col-md-4 col-lg-2 my-4">
           <div className="card">
            <img src={imgUrl} className="card-img-top" alt="img header"/>
                <div className="card-body">
                    <h5 className="card-title">{movie.original_title}</h5>
                    {/* <p className="card-text">{movie.overview}</p> */}
                    <Link to={detailUrl} className="btn btn-primary">Show Details</Link>
                </div>
            </div>
        </div> 
    );
}



const SearchView = ({keyword, searchResults}) =>
{
    const title = `You are searching... ${keyword}`

    const resultsHtml = searchResults.map( (obj, i) => {
        return <MovieCard movie={obj} key={i}/>
    } )
    return(
    <>
        <Hero text={title}></Hero>
        <div className="container">
            <div className="row">
                {resultsHtml}
            </div>
        </div>
        
    </>
    );
};

export default SearchView;