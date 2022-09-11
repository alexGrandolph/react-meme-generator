import memesData from '../data/memeData.json'
import React from 'react'

function Meme() {
  const [meme, setMeme] = React.useState({
    topText: '',
    bottomText: '',
    randomImage: 'http://i.imgflip.com/1bij.jpg'
  })
  
  function getMemeImage() {
    const memesArray = memesData.data.memes
    const randomNumber = Math.floor(Math.random() * memesArray.length)
    const url = memesArray[randomNumber].url
    setMeme(prevMeme => ({
      ...prevMeme,
      randomImage: url
    }))
  }

  return (
    <main>
      <div className="form">
        <input type="text" className="form-input" placeholder="Top Text" />
        <input type="text" className="form-input" placeholder="Bottom Text" />
        <button className="form-button" onClick={getMemeImage}>Get a New Image</button>
      </div>
      <div className="image-container">
        <img className="meme-image" src={meme.randomImage} alt="meme-image"/>
      </div>
    </main>
  )
}
export default Meme