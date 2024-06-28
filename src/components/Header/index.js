import './index.css'
const Header = () => {
  return (
    <nav>
      <div className="logo-and-lagout-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
          alt="website logo"
          className="logo-image"
        />
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-log-out-img.png"
          alt="nav logout"
          className="nav-icons"
        />
        <ul className="list-item-text-container">
          <li className="list-text-item">Home</li>
          <li className="list-text-item">Products</li>
          <li className="list-text-item">Cart</li>
          <li className="list-text-item">
            <button className="lagout-button">Lagout</button>
          </li>
        </ul>
      </div>
      <ul className="nav-list-item-icons-container">
        <li className="nav-list-item">
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-icon.png"
            alt="nav home"
            className="nav-icons"
          />
        </li>
        <li className="nav-list-item">
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-products-icon.png"
            alt="nav products"
            className="nav-icons"
          />
        </li>
        <li className="nav-list-item">
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-cart-icon.png"
            alt="nav cart"
            className="nav-icons"
          />
        </li>
      </ul>
    </nav>
  )
}

export default Header
