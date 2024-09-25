import Hero from "./Hero";

const Home = () =>
{
    return(
    <>
        <Hero text='this is home page'></Hero>
        <div className="container">
            <div className="row">
                <div className="col-lg-8 offset-lg-2 my-5">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima numquam officiis aut atque eius dolor, ut rem consequatur, totam ex adipisci laudantium? Recusandae aut architecto officia incidunt, voluptas minus in!
                        </p>
                </div>
            </div>
        </div>
    </>
    )
}

export default Home;