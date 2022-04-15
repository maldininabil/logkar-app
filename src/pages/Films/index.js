import {Fragment, Helmet, useDispatch, useEffect, useLocation, useNavigate, useSelector, useState, Localbase} from "libraries";
import {getFilms} from "services";
import {filmSelector, searchFilm} from "modules";
import {getIdentityFromHref, getSliceData} from "utils";

import HeaderTitle from "components/HeaderTitle";
import Loading from "components/Loading";
import Pagination from "components/Pagination";
import FilmItem from "components/FilmItem";

import "assets/scss/film.scss";

const Films = () => {
    const dispatch = useDispatch();
    const films = useSelector(filmSelector);
    const location = useLocation();
    const navigate = useNavigate();

    const limit = 5;
    const params = new URLSearchParams(location.search);
    const getSlice = getSliceData(params, limit);

    // const [ films, setFilms ] = useState([]);
    const [ isLoading, setIsLoading ] = useState(true);

    useEffect(() => {
        const localDb = new Localbase('logkar');
        const getFilm = async () => {
            const payload = { params: { results: 30 } };
            await getFilms(payload);
        };

        localDb.collection('film').get().then(collections => {
            if (collections.length === 0 ? getFilm() : dispatch(getFilm(collections[0])));
            setIsLoading(false);
        });
    }, [dispatch]);

    const handleSearch = (value) => {
        dispatch(searchFilm(value));
        navigate('/films');
    };

    const handleDetail = (href) => {
        navigate(`/films/${getIdentityFromHref(href)}`);
    }

    return(
        <Fragment>
            <Helmet>
                <title>List Film</title>
            </Helmet>
            <HeaderTitle
                title="List Film"
                description="List Film Playing Now"
                onChangeSearch={handleSearch}
            />
            {isLoading && <Loading />}
            {!isLoading && films.length > 0 ? (
                <Fragment>
                    <div className={'film__list'}>
                        {films.slice(getSlice.from, getSlice.to).map((film, index) => (
                            <FilmItem film={film} key={index} handleDetail={handleDetail} />
                        ))}
                    </div>
                    <Pagination total={films.length} limit={limit} current={getSlice.page} />
                </Fragment> ):(
                <div className="alert margin__left--24px margin__right--24px">
                    <h5 className="color__grey font__weight--500">Data Not Found</h5>
                </div>
            )}
        </Fragment>
    );
}

export default Films;