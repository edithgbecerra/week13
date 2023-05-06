import React from "react";

export default class Login extends React.Component  {
    
    render() {
       return(
        <div className="form">
          <form>
            <div className="input-container">
                <label>Username </label>
                <input type="text" name="username" />
            </div>
            <div className="input-container">
                <label>Password </label>
                <input type="password" name="password"/>
            </div>
            <div className="input-container">
                <h3 className='login'>Login</h3>
            </div>   
          </form>
        </div>
      ) 
   }

}
