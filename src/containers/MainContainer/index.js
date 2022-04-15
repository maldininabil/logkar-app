import { Fragment, Notifications } from "libraries";
import "assets/scss/layout.scss";

import NavbarContainer from "containers/NavbarContainer";
import SidebarContainer from "containers/SidebarContainer";

const MainContainer = (props) => {

    return (
        <Fragment>
            <div className="container">
                <Notifications />
                <SidebarContainer />
                <div className="main__layout">
                    <NavbarContainer />
                    <div className="main__content">
                        {props.children}
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default MainContainer;