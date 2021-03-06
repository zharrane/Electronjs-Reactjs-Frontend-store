import React, { useState, useEffect } from 'react';
import './login.scss';
import image from '../../img/img-01.png';
import * as FaIcons from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import Message from '../../components/Message';
import Loader from '../../components/Loader';
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  useHistory,
} from 'react-router-dom';
import { LoginAction } from '../../actions/userActions';
import Sidebar from '../../components/sidebar/Sidebar';

const Login = ({ location }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();

  try {
    localStorage.removeItem('userInfo');
    console.log('Item removed');
  } catch (error) {
    console.log(error.message);
  }
  const dispatch = useDispatch();
  // const redirect = location.search ? location.search.split('=')[1] : '/sidebar';

  const userLogin = useSelector((state) => state.userLogin);
  const { loading, error, userInfo } = userLogin;

  useEffect(() => {
    if (userInfo) {
      history.push('/sidebar');
    }
  }, [history, userInfo]);
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(LoginAction(username, password));
  };
  return (
    <>
      {/* {userInfo ? ( */}
      <div className="LoginBody">
        <main className="Login">
          <div className="LoginImg">
            <img alt="9iw" src={image} />
          </div>
          <div>
            <h2>VENDOR LOGIN</h2>
            {error && <Message variant="danger">{error}</Message>}
            {loading && <Loader />}
            <form onSubmit={submitHandler}>
              <div className="LoginInput">
                <FaIcons.FaUserAlt className="icons" />
                <input
                  type="text"
                  name="text"
                  placeholder="Username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              <div className="LoginInput">
                <FaIcons.FaLock className="icons" />
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={password}
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
      {/* ) : (
        <Router>
          <Redirect to="/sidebar" />
          <Route path="/sidebar" component={Sidebar} />
        </Router>
      )} */}
    </>
  );
};

export default Login;
