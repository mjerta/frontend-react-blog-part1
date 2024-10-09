import logoImage from '../../assets/logo-black.png'
import "./Home.css"

function Home() {
  return (
    <>
      <div className="home-container">
        <h1>Bij BlogVenture geloven we in de kracht van woorden*</h1>
        <div className="logo-home-image">
          <img src={logoImage} alt="logo"/>
          <p className="asterisk-message">*En in billboards. Die zijn niet te missen namelijk</p>
        </div>
      </div>
    </>
  )
}

export default Home;