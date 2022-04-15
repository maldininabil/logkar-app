import { convertDate } from "utils";
import FilmItemLabel from "components/FilmItemLabel";

const FilmItem = ({film, handleDetail}) => {

    return (
        <div className={'list__item'} onClick={() => handleDetail(film.url)}>
            <div className="item__header">
                <h5 className="color__grey font__weight--400">
                    <span className="color__primary font__weight--600">{film.title}</span>
                </h5>
            </div>
            <div className="item__body">
                <div>
                    <FilmItemLabel label="Release Date" value={convertDate(film.release_date)} />
                    <FilmItemLabel label="Director" value={film.director} />
                    <FilmItemLabel label="Producer" value={film.producer.substring(0, 40)} />
                </div>
            </div>
        </div>
    );
};

export default FilmItem;