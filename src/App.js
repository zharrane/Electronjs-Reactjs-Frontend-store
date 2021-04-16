import Sidebar from './components/sidebar/Sidebar';
import { useEffect } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Login from './screens/login/Login';

/////
function App() {
  // const userInfosFromStorage = localStorage.getItem('userInfo')
  //   ? JSON.parse(localStorage.getItem('userInfo'))
  //   : null;
  useEffect(() => {
    {
      console.log('useEffect');
    }
  });
  return (
    <Router>
      <Route path="/sidebar" component={Sidebar} />
      <Route path="/" component={Login} exact />
    </Router>
  );
}

export default App;
