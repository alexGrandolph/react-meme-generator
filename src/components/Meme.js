import memesData from '../data/memeData.json'

function Meme() {

  function getMemeImage() {
    const memesArray = memesData.data.memes
    const randomNumber = Math.floor(Math.random() * memesArray.length)
    const url = memesArray[randomNumber].url
    console.log(url)
  }

  return (
    <main>
      <div className="form">
        <input type="text" className="form-input" placeholder="Top Text" />
        <input type="text" className="form-input" placeholder="Bottom Text" />
        <button className="form-button" onClick={getMemeImage}>Get a New Image</button>
      </div>
    </main>
  )
}
export default Meme