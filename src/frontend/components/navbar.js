import React from 'react'
import {Link} from 'react-router'

class NavBarBox extends React.Component{

    render() {
        return (
          <nav className="navbar navbar-inverse navbar-fixed-top">
            <div className="container-fluid">
              <div className="navbar-header">
                <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                  <span className="sr-only">Toggle navigation</span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                </button>
                <a className="navbar-brand" href="#">Risk Quizz</a>
              </div>

              <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                <ul className="nav navbar-nav">
                  <li role="presentation">
                    <Link to="/map" activeClassName="link-active">Map</Link>
                  </li>
                  <li role="presentation">
                    <Link to="/profile" activeClassName="link-active">Profile</Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        )
    }
}

export default NavBarBox
