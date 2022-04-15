import {Fragment, Helmet, useState} from "libraries";
import HeaderTitle from "components/HeaderTitle";
import Loading from "components/Loading";
import {useEffect} from "react";
import {getFilms} from "services";
import {useLocation} from "react-router-dom";
import {getIdentityFromHref} from "utils";
import FilmDetail from "components/FilmDetail";

import "assets/scss/film.scss";

const Detail = () => {
    const location = useLocation();

    const [ films, setFilms ] = useState([]);
    const [ isLoading, setIsLoading ] = useState(true);

    useEffect(() => {
        getFilms({'path': getIdentityFromHref(location.pathname)}).then(response => {
            setFilms(response)
            setIsLoading(false);
        })
    }, [])

    return(
        <Fragment>
            <Helmet>
                <title>Detail Film</title>
            </Helmet>
            <HeaderTitle
                title="Detail"
                description="Detail Film"
            />
            {isLoading && <Loading />}
            <Fragment>
                <div className={'film__list'}>
                    <FilmDetail film={films} />
                </div>
            </Fragment>
        </Fragment>
    )
}

export default Detail;