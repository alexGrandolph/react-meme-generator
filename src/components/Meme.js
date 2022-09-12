import memesData from '../data/memeData.json'
import React from 'react'

function Meme() {
  const [meme, setMeme] = React.useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg"
  })
  
  const [allMemeImages, setAllMemeImages] = React.useState(memesData.data.memes)

  const [formData, setFormData] = React.useState({
    topText: "",
    bottomText: ""
  })
  console.log(formData)
  function getMemeImage() {
    const randomNumber = Math.floor(Math.random() * allMemeImages.length)
    const url = allMemeImages[randomNumber].url
    setMeme(prevMeme => ({
      ...prevMeme,
      randomImage: url
    }))
  }

  function handleChange(event) {
    const {name, value, type} = event.target
    setFormData(prevFormData => ({
      ...prevFormData,
      [name]: value
    }))
  }

  return (
    <main>
      <div className="form">
        <input
          type="topText"
          placeholder="Top text"
          className="form--input"
          name="topText"
          onChange={handleChange}
          value={formData.topText}
        />
        <input
          type="text"
          placeholder="Bottom text"
          className="form--input"
          name="bottomText"
          onChange={handleChange}
          value={formData.bottomText}
        />
        <button
          className="form--button"
          onClick={getMemeImage}
        >
          Get a new meme image 🖼
        </button>
      </div>
      <div className="meme">
        <img src={meme.randomImage} className="meme--image" />
        <h2 className="meme--text top">{formData.topText}</h2>
        <h2 className="meme--text bottom">{formData.bottomText}</h2>
      </div>
    </main>
  )
}
export default Meme