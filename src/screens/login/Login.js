import React, { useState, useEffect } from 'react';
import './login.scss';
import image from '../../img/img-01.png';
import * as FaIcons from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import Message from '../../components/Message';
import Loader from '../../components/Loader';
import { Login } from '../../actions/userActions';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

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
                <input
                  type="text"
                  name="text"
                  placeholder="Username"
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              <div className="LoginInput">
                <FaIcons.FaLock className="icons" />
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  onChange={(e) => setPassword(e.target.value)}
                />
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
