import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
const About = () => {
  const history = useHistory();
  const callaboutpage = async () => {
    try {
      const res = await fetch('/about', {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        credentials: 'include',
      });
      const data = await res.json();
      console.log(data);
    } catch (error) {
      console.log(error);
      history.push('/login');
    }
  };
  useEffect(() => {
    callaboutpage();
    //for esline  disable
  });
  return (
    <div className='container'>
      <h1>hello to About</h1>
    </div>
  );
};

export default About;
