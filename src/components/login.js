import React from "react";

export class login extends React.Component  {
    render() {
       return(
        <div className="form">
          <form>
            <div className="input-container">
                <label>Username </label>
                <input type="text" name="uname" required />
            </div>
            <div className="input-container">
                <label>Password </label>
                <input type="password" name="pass" required />
            </div>
            <div className="input-container">
                <h3 className='login'>Login</h3>
            </div>   
          </form>
        </div>
       ) 
    }
}