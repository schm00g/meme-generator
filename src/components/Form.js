import React from "react";
import memesData from "../memesData";


export default function Form(){
    const [memeImage, setMemeImage] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "https://i.imgflip.com/30b1gx.jpg"
    });

    function grabMeme(event){
        // button default action will submit form & reload page
        event.preventDefault()
        const memesArray = memesData.data.memes;
        const randomNumber = Math.floor(Math.random() * memesArray.length);
        setMemeImage(prevState => {
            return {
                ...memeImage,
                randomImage: memesArray[randomNumber].url
            }
        });
    }

    return (
        <main>
            <form className="input--form">
                <input className="form--input" type="text" placeholder="top text"></input>
                <input className="form--input" type="text" placeholder="bottom text"></input>
                <button onClick={grabMeme} className="form--button">Get a new image 🖼</button>
            </form>
            <img src={memeImage.randomImage} alt="meme" className="meme--image"/>
        </main>
    )
}