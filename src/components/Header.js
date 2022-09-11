import Background from '../assets/images/header-background.png';
import Logo from '../assets/images/header-logo.png';

function Header() {
  return (
    <div className="header-container">
      <img className="header-logo" src={Logo} alt="header-logo" />
      <img className="header-background" src={Background} alt="header-background" />
      <span className="header-text">Meme Generator</span>
    </div>
  )
}

export default Header