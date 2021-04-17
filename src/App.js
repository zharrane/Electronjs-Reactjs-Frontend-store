import Sidebar from './components/sidebar/Sidebar';
import { useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Login from './screens/login/Login';

/////
function App() {
  // const [path, setpath] = useState('');
  // const userInfosFromStorage = localStorage.getItem('userInfo')
  //   ? JSON.parse(localStorage.getItem('userInfo'))
  //   : null;

  // if (userInfosFromStorage === null) {
  //   setpath('/');
  // } else {
  //   setpath('/sidebar');
  // }

  return (
    <Router>
      {/* <Route path="/sidebar" component={Sidebar} />
      <Route path="/" component={Login} exact /> */}
      <Route path="/sidebar" component={Sidebar} />

      <Login />
    </Router>
  );
}

export default App;
