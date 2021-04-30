import React, { useEffect, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import Context from './context/Context';
const Logout = () => {
  const { login } = useContext(Context);
  const history = useHistory();
  const calllogoutpage = async () => {
    try {
      const res = await fetch('/logout', {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        credentials: 'include',
      });
      const data = await res.json();
      if (res.status === 200) {
        history.push('/login');
        login(false);
      }

      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    calllogoutpage();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <h1>logout</h1>
    </>
  );
};

export default Logout;
