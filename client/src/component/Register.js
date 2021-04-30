import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const Register = () => {
  const history = useHistory();
  const [user, setuser] = useState({
    name: '',
    phone: '',
    email: '',
    password: '',
    cpassword: '',
  });
  let name, value;
  const handleInput = (e) => {
    console.log(e);
    name = e.target.name;
    value = e.target.value;
    setuser({ ...user, [name]: value });
  };
  const Postdata = async (e) => {
    e.preventDefault();
    const { name, phone, email, password, cpassword } = user;
    const res = await fetch('/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name,
        phone,
        email,
        password,
        cpassword,
      }),
    });
    const data = await res.json();
    if (data.status === 422 || !data) {
      window.alert('invalid reg');
    } else {
      window.alert('registration ');
      history.push('/login');
    }
  };
  return (
    <div className='container'>
      <div className='row'>
        <div className='col text-center'>
          <h1 className='display-4 text-uppercase text-dark mb-0'>
            <strong>Register</strong>
          </h1>
          <div className='title-underline bg-primary'></div>
          <p className='mt-2 text-capitalize text-muted'>
            please fill the form for Register.
          </p>
        </div>
      </div>
      <div className='col-md-7 mx-auto'>
        <div className='card '>
          <div className='card-body'>
            <form method='POST'>
              <div className='form-group'>
                <label htmlFor='name'>First Name:</label>
                <input
                  type='text'
                  name='name'
                  className='form-control'
                  id='name'
                  value={user.name}
                  onChange={handleInput}
                />
              </div>
              <div className='form-group'>
                <label htmlFor='phone'>phone</label>
                <input
                  type='tel'
                  className='form-control'
                  name='phone'
                  id='phone'
                  value={user.phone}
                  onChange={handleInput}
                />
              </div>
              <div className='form-group'>
                <label htmlFor='email'>Email address:</label>
                <input
                  type='email'
                  className='form-control'
                  placeholder='Enter email'
                  name='email'
                  id='email'
                  value={user.email}
                  onChange={handleInput}
                />
              </div>
              <div className='form-group'>
                <label htmlFor='password'>Password:</label>
                <input
                  type='password'
                  className='form-control'
                  placeholder='Enter password'
                  name='password'
                  id='password'
                  value={user.password}
                  onChange={handleInput}
                />
              </div>
              <div className='form-group'>
                <label htmlFor='cpassword'>Confirm Password:</label>
                <input
                  type='password'
                  className='form-control'
                  placeholder='Enter confirm password'
                  name='cpassword'
                  id='cpassword'
                  onChange={handleInput}
                  value={user.cpassword}
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

export default Register;
