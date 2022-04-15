import {Fragment, Link, useSelector, useDispatch, useLocation} from "libraries";
import { logo } from "libraries/image";
import { AiOutlineTeam, AiTwotoneCalendar } from "libraries/icon";
import { menuSelector, toggleMenu } from "modules";

const SidebarContainer = () => {

    const showMenu = useSelector(menuSelector);
    const dispatch = useDispatch();
    const location = useLocation();

    const closeMenu = () => {
        dispatch(toggleMenu(false));
    };

    return (
        <Fragment>
            {showMenu &&
                <div className="overlay" onClick={closeMenu} />
            }
            <div className={`sidebar ${showMenu ? 'show' : ''}`}>
                <div className="logo margin__bottom--16px">
                    <img src={logo.image} alt={logo.alt} />
                </div>
                <div className="sidebar__menu">
                    <Link to="/" className={`${location.pathname === '/' && 'active'}`}><AiTwotoneCalendar className="icon" /> Upcoming</Link>
                    <Link to="/films" className={`${location.pathname !== '/' && 'active'}`}><AiOutlineTeam className="icon" /> List Film</Link>
                </div>
            </div>
        </Fragment>
    );
};

export default SidebarContainer;