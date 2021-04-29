import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const Login = () => {
  const history = useHistory();
  const [user, setuser] = useState({
    email: '',
    password: '',
  });
  let name, value;
  const handleInput = (e) => {
    // console.log(e);
    name = e.target.name;
    value = e.target.value;
    setuser({ ...user, [name]: value });
  };
  const Postdata = async (e) => {
    e.preventDefault();
    const { email, password } = user;
    const res = await fetch('/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });
    const data = await res.json();
    console.log(data);
    if (data.status === 400 || !data) {
      window.alert('plz fill all field');
    } else if (data.message === 'valid email') {
      window.alert('login sucessfull ');
      history.push('/');
    } else {
      window.alert('invalid login');
    }
  };
  return (
    <div className='container'>
      <div className='row'>
        <div className='col text-center'>
          <h1 className='display-4 text-uppercase text-dark mb-0'>
            <strong>Login</strong>
          </h1>
          <div className='title-underline bg-primary'></div>
          <p className='mt-2 text-capitalize text-muted'>
            Lorem ipsum dolor sit amet.
          </p>
        </div>
      </div>
      <div className='col-md-8 mx-auto'>
        <div className='card '>
          <div className='card-body'>
            <form method='POST'>
              <div className='form-group'>
                <label htmlFor='email'>Email address:</label>
                <input
                  type='email'
                  className='form-control'
                  placeholder='Enter email'
                  id='email'
                  name='email'
                  value={user.email}
                  onChange={handleInput}
                />
              </div>
              <div className='form-group'>
                <label htmlFor='pwd'>Password:</label>
                <input
                  type='password'
                  className='form-control'
                  placeholder='Enter password'
                  id='pwd'
                  name='password'
                  value={user.password}
                  onChange={handleInput}
                />
              </div>

              <button
                type='submit'
                className='btn btn-primary'
                onClick={Postdata}
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
