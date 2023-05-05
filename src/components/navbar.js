import React from 'react'

export class NavBar extends React.Component   {
    render(){
        return(
            <nav className="nav">
                <ul>
                    <li>Home</li>
                    <li>About Me</li>
                    <li>Contact</li>
                </ul>
             </nav>
        );
    }
}