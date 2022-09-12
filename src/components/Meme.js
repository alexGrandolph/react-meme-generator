import memesData from '../data/memeData.json'
import React from 'react'

function Meme() {
  const [allMemes, setAllMemes] = React.useState([])
  
  React.useEffect(() => {
    fetch(`https://api.imgflip.com/get_memes`)
    .then(response => response.json())
    .then(data => setAllMemes(data.data.memes))
  }, [])

  console.log(allMemes[3])

  const [meme, setMeme] = React.useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg"
  })
  

  const [formData, setFormData] = React.useState({
    topText: "",
    bottomText: ""
  })

  function getMemeImage() {
    const randomNumber = Math.floor(Math.random() * allMemes.length)
    const url = allMemes[randomNumber].url
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