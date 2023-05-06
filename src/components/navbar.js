import React from 'react'

export default class NavBar extends React.Component   {

render() {
    return (
    <nav className="nav">
        <div className="container-fluid">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a className="link-offset-2 link-underline link-underline-opacity-75" href="home">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="link-offset-2 link-underline link-underline-opacity-75" href="contact">Contact</a>
                    </li>
                </ul>
        </div>
    </nav>
    )
  }
}