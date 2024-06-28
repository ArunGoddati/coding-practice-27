import Header from '../Header'
import './index.css'
const Home = () => {
  return (
    <div>
      <Header />
      <div className="home-bottom-container">
        <div className="home-bottom-inner-container">
          <h1 className="home-main-heading">Clothes That Get YOU Noticed</h1>
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-img.png"
            alt="clothes that get you noticed"
            className="home-container-image"
          />
          <p className="home-paragraph">
            Fashion is part of the daily air and it does not quite help that it
            changes all the time.Clothes have always been a marker of the era
            and we are in a revolution.Your fashion makes you been seen and
            heard that way you are.So, celebrate the seasons new and exciting
            fashion in your own way.
          </p>
          <button className="home-button">Shop Now</button>
        </div>
        <div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-img.png"
            alt="clothes that get you noticed"
            className="home-container-image-bigScreen"
          />
        </div>
      </div>
    </div>
  )
}

export default Home
