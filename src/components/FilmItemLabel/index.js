const FilmItemLabel = ({label, value}) => {
    return (
        <div className="item__label" data-testid="filmlabel">
            <h6 className="color__grey font__weight--400">{label}</h6>
            <h5 className="font__weight--400">{value}</h5>
        </div>
    );
};

export default FilmItemLabel;
