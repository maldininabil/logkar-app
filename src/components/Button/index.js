import "assets/scss/button.scss";

const Button = (props) => {

    return (
        <button data-testid="button" className={`button ${props.type}`} >
            {props.children}
        </button>
    );
};

export default Button;