import { Link, Outlet, useLocation} from "react-router-dom";
import Hero from "./Hero";

const AboutView = () =>
{
    // const nav = useLocation();
    // console.log(nav);
    return (
        <>
            <Hero text='this is about page'/>
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 offset-lg-2 my-5">
                        <pre>
                            {`
test
`}
                       </pre>
                       <Link to="extra">extra</Link> <span> </span> <Link to="bonus">bonus</Link>
                       
                     </div>
                </div>
            </div>

            <Outlet></Outlet>
        </>
    )
}

export default AboutView;