import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
const Logout = () => {
  const history = useHistory();
  const calllogoutpage = async () => {
    try {
      const res = await fetch('/logout', {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      });
      const data = await res.json();
      history.push('/login');
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    calllogoutpage();
    //for esline  disable
  }, []);
  return (
    <>
      <h1>logout</h1>
    </>
  );
};

export default Logout;
