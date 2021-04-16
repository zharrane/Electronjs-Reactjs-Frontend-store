import { useEffect } from 'react';

const Logout = ({ history }) => {
  useEffect(() => {
    {
      localStorage.removeItem('userInfo');
      console.log('Item removed');
      history.push('/');
    }
  }, [history]);
};

export default Logout;
