import React from "react";
import memesData from "../memesData";


export default function Form(){
    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "https://i.imgflip.com/30b1gx.jpg"
    });

    function grabMeme(event){
        // button default action will submit form & reload page
        event.preventDefault()
        const memesArray = memesData.data.memes;
        const randomNumber = Math.floor(Math.random() * memesArray.length);
        setMeme(prevMeme => {
            return {
                ...prevMeme,
                randomImage: memesArray[randomNumber].url
            }
        });
    }

    function handleChange(event){
        const {name, value} = event.target;
        setMeme(prevState => {
            return {
                ...prevState,
                [name]: value,        
            }
        })
    }

    return (
        <main>
            <form className="input--form">
                <input onChange={handleChange} className="form--input" type="text" placeholder="top text" name="topText" value={meme.topText}></input>
                <input onChange={handleChange} className="form--input" type="text" placeholder="bottom text" name="bottomText" value={meme.bottomText}></input>
                <button onClick={grabMeme} className="form--button">Get a new image 🖼</button>
            </form>
            <div className="meme">
                <img src={meme.randomImage} alt="meme" className="meme--image" />
                <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText}</h2>
            </div>
        </main>
    )
}