import { useDispatch } from "libraries";
import { AiOutlineMenu } from "libraries/icon";
import { logo, userImage } from "libraries/image";
import { toggleMenu } from "modules";

const NavbarContainer = () => {

    const dispatch = useDispatch();
    const openMenu = () => {
        dispatch(toggleMenu(true));
    };

    return (
        <div className="navbar">
            <div className="mobile__menu">
                <AiOutlineMenu className="font__size--24 margin__right--16px" onClick={openMenu} />
                <img src={logo.image} alt={logo.alt} className="menu__logo" />
            </div>
            <h5 className="username font__size--12 font__weight--600 margin__right--8px">
                Hello, <span className="color__primary">User</span>
            </h5>
            <img src={userImage.image} alt={userImage.alt} className="avatar" />
        </div>
    );
};

export default NavbarContainer;