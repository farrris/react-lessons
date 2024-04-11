import {useState} from "react";
import SearchBar from "./components/SearchBar";
import ImageList from "./components/ImageList";
import FilmShow from "./components/FilmShow";
import {searchImages, searchFilms} from "./api";


function App() {
  const [searchType, setSearchType] = useState("images")
  const [images, setImages] = useState([]);
  const [film, setFilm] = useState({});

  function onChangeValue(event) {
    setSearchType(event.target.value);
    setImages([]);
    setFilm({});
  }

  const handleSubmit = async (term) => {
    if (searchType == "images") {
      const result = await searchImages(term);
      setImages(result);
    } else if (searchType == "films") {
      const result = await searchFilms(term);
      setFilm(result);
    }
  }

  return (
      <div>
          <SearchBar onSubmit={handleSubmit} />
          <div onChange={onChangeValue}>
            <input type="radio" value="images" name="searchType" checked={searchType === "images"} /> Изображения
            <input type="radio" value="films" name="searchType" checked={searchType === "films"}/> Фильмы
          </div>
          
          {
            searchType == "films" && Object.keys(film).length != 0  ?
            (<FilmShow film={film} />)
            : 
            (<ImageList images={images} />)
          }
      </div>
  )
}

export default App;