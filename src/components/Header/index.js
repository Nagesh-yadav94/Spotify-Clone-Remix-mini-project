import {withRouter, Link} from 'react-router-dom'
import {useState} from 'react'
import Cookies from 'js-cookie'
import {FiMenu} from 'react-icons/fi'
import {RiLogoutCircleRLine} from 'react-icons/ri'

import './index.css'

const Header = props => {
  const [isTrue, SetStatus] = useState(true)

  const isShown = () => {
    SetStatus(false)
  }

  const onClickLogout = () => {
    Cookies.remove('jwt_token')
    const {history} = props
    history.replace('/login')
  }

  const renderHeader = () => (
    <nav className="nav-bar-sm" data-testid="navBarSm">
      <Link to="/" className="link-item">
        <img
          className="nav-image"
          src="https://i.ibb.co/zZMYBmH/music.png"
          alt="website logo"
        />
      </Link>
      <div className="nav-option">
        {isTrue ? (
          <FiMenu color="#ffffff" size="21" onClick={isShown} />
        ) : (
          <button className="logout-btn" type="button" onClick={onClickLogout}>
            <RiLogoutCircleRLine aria-label="close" />
          </button>
        )}
      </div>
    </nav>
  )

  return <>{renderHeader()}</>
}

export default withRouter(Header)
