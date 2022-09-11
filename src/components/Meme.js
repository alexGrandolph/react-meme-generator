import memesData from '../data/memeData.json'
import React from 'react'

function Meme() {
  const [memeImage, setMemeImage] = React.useState("")
  
  function getMemeImage() {
    const memesArray = memesData.data.memes
    const randomNumber = Math.floor(Math.random() * memesArray.length)
    const url = memesArray[randomNumber].url
    setMemeImage(url)
  }

  return (
    <main>
      <div className="form">
        <input type="text" className="form-input" placeholder="Top Text" />
        <input type="text" className="form-input" placeholder="Bottom Text" />
        <button className="form-button" onClick={getMemeImage}>Get a New Image</button>
      </div>
      <div className="image-container">
        <img className="meme-image" src={memeImage} alt="meme-image"/>
      </div>
    </main>
  )
}
export default Meme