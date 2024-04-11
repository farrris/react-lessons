import {useState} from "react";
import "./AnimalShow.css"
import bird from "./images/bird.svg"
import cat from "./images/cat.svg"
import cow from "./images/cow.svg"
import dog from "./images/dog.svg"
import gator from "./images/gator.svg"
import horse from "./images/horse.svg"
import heart from "./images/heart.svg"

const svgMap = {
    bird,
    cat,
    cow,
    dog,
    gator,
    horse
}

function AnimalShow({type}) {
    const [clicks, setClicks] = useState(0);
    const handleClickPlus = () => {
        setClicks(clicks + 1);
    }
    const handleClickMinus = () => {
        setClicks(clicks - 1);
    }
    return (
        <div>
            <div className="animal-show" onClick={handleClickPlus}>
                <img className="animal" src={svgMap[type]} alt="animal" height="500px" width="500px" />
                <img className="heart" src={heart} alt="heart" style={{width: 10 + 10 * clicks + 'px'}} />
                <div>Нажатий: {clicks}</div>
            </div>

            <button onClick={handleClickPlus}>Увеличить</button>
            <button onClick={handleClickMinus}>Уменьшить</button>
        </div>
    )
}

export default AnimalShow;