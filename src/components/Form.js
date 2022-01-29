import React from "react";
import memesData from "../memesData";


export default function Form(){
    const [randomImage, setRandomImage] = React.useState("");
    function grabRandomImage(event){
        event.preventDefault()
        const memesArray = memesData.data.memes;
        const randomNumber = Math.floor(Math.random() * memesArray.length);
        setRandomImage(memesArray[randomNumber].url);
    }

    return (
        <main>
            <form className="input--form">
                <input className="form--input" type="text" placeholder="top text"></input>
                <input className="form--input" type="text" placeholder="bottom text"></input>
                <button onClick={grabRandomImage} className="form--button">Get a new image 🖼</button>
            </form>
            <img src={randomImage} alt="meme" className="meme--image"/>
        </main>
    )
}