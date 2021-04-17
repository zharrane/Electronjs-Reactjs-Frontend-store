import { useEffect } from 'react';

const Logout = ({ history }) => {
  useEffect(() => {
    {
      localStorage.removeItem('userInfo');
      console.log('Item removed');
      history.push('/');
    }
  }, [history]);
  return (
    <div>
      <h1>Good Bye</h1>
    </div>
  );
};

export default Logout;
