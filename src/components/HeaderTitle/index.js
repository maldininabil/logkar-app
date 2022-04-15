import { AiOutlineSearch } from "libraries/icon";
import TextSearch from "components/TextSearch";
import "assets/scss/header.scss";

const HeaderTitle = (props) => {

    return (
        <div className="header">
            <div className="header__title">
                <h1 className="font__size--26 font__weight--700 color__primary text__transform--uppercase">{props.title}</h1>
                <h5 className="font__weight--400">{props.description}</h5>
            </div>
            {props.onChangeSearch &&
                <div className="header__content">
                    <TextSearch
                        onChange={(e) => props.onChangeSearch(e.target.value)}
                        placeholder="Search"
                        icon={<AiOutlineSearch className="icon font__size--18 color__primary" />}
                    />
                </div>
            }
        </div>
    );
};

export default HeaderTitle;