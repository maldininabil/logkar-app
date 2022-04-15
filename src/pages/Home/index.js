import {Fragment, Helmet, useEffect, useLocation, useNavigate, useState} from "libraries";
import {getFilms} from "services";
import {getIdentityFromHref, getSliceData} from "utils";

import HeaderTitle from "components/HeaderTitle";
import Loading from "components/Loading";
import FilmItem from "components/FilmItem";
import SeeMore from "components/SeeMore";

import "assets/scss/film.scss";

const Home = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const limit = 3;
    const params = new URLSearchParams(location.search);
    const getSlice = getSliceData(params, limit);

    const [ films, setFilms ] = useState([]);
    const [ isLoading, setIsLoading ] = useState(true);

    useEffect(() => {
        getFilms({}).then(response => {
            setFilms(response.results)
            setIsLoading(false);
        })
    }, []);

    const handleDetail = (href) => {
        navigate(`/films/${getIdentityFromHref(href)}`);
    }

    return(
        <Fragment>
            <Helmet>
                <title>Upcoming</title>
            </Helmet>
            <HeaderTitle
                title="Upcoming"
                description="Film Coming Soon"
            />
            {isLoading && <Loading />}
            {!isLoading && films.length > 0 ? (
                <Fragment>
                    <div className={'film__list'}>
                        {films.slice(getSlice.from, getSlice.to).map((film, index) => (
                            <FilmItem film={film} key={index} handleDetail={handleDetail} />
                        ))}
                    </div>
                    <SeeMore />
                </Fragment> ):(
                <div className="alert margin__left--24px margin__right--24px">
                    <h5 className="color__grey font__weight--500">Data Not Found</h5>
                </div>
            )}
        </Fragment>
    );
}

export default Home;