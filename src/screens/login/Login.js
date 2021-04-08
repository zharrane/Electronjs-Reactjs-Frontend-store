import React from 'react';
import './login.scss';
import image from '../../img/img-01.png';
import * as FaIcons from 'react-icons/fa';

const Login = () => {
  return (
    <>
      <div className="LoginBody">
        <main className="Login">
          <div className="LoginImg">
            <img src={image} />
          </div>
          <div>
            <form>
              <h2>VENDOR LOGIN</h2>
              <div className="LoginInput">
                <FaIcons.FaUserAlt className="icons" />
                <input type="text" name="text" placeholder="Username" />
              </div>
              <div className="LoginInput">
                <FaIcons.FaLock className="icons" />
                <input type="password" name="password" placeholder="Password" />
              </div>
              <input className="LoginSubmit" type="submit" value="LOGIN" />
              <div className="ForgotInfo">
                Forgot login information <a href="/">click here</a>
              </div>
            </form>
          </div>
        </main>
      </div>
    </>
  );
};

export default Login;
