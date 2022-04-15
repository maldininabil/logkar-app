import React from "react";
import {useNavigate} from "react-router-dom";

const SeeMore = () => {
    const navigate = useNavigate();

    function handleSeeMore() {
        navigate('/films');
    }
    return(
        <div className={"margin__top--24px margin__bottom--24px cursor--pointer text__align--center"} onClick={handleSeeMore}>
            See More
        </div>
    )
}

export default SeeMore;