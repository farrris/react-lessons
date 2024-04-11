function FilmShow({film}) {
    console.log(film);
    return (
        <div>
            <div>Название: {film.Title}</div>
            <img src={film.Poster} alt={film.Title} />
        </div>
    )
}

export default FilmShow;