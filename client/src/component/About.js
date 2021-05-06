import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
const About = () => {
  const [Data, setData] = useState({ email: '', name: '', phone: '' });
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

      if (res.status === 200) {
        // console.log(data);
        setData(data);
      }
    } catch (error) {
      console.log('no login detail found');
      history.push('/login');
    }
  };
  useEffect(() => {
    callaboutpage();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className='container'>
      <div className='row'>
        <div className='col text-center'>
          <h1 className='display-4 text-uppercase text-dark my-4'>
            <strong>about me</strong>
          </h1>
        </div>
      </div>
      <div className='col-md-8 mx-auto'>
        <div className='card '>
          <div className='card-body w-75'>
            <div className='h5  py-3 px-auto'>
              <span className='px-3'>Name:</span>
              <span className='pl-3'>{Data.name}</span>
            </div>
            <div className='h5 py-3 px-auto'>
              <span className='px-3'>Email: </span>
              <span className='pl-3'>{Data.email}</span>
            </div>
            <div className='h5  py-3 px-auto'>
              <span className='px-3'>Phone:</span>
              <span className='pl-3'>{Data.phone}</span>
            </div>

            {/*<form>
              <div className='form-group row'>
                <label htmlFor='Name' className='col-sm-2 col-form-label'>
                  Name
                </label>
                <div className='col-sm-10'>
                  <input
                    type='text'
                    readOnly
                    className='form-control-plaintext w-50'
                    id='Name'
                    value={Data.name}
                    disabled
                  />
                </div>
              </div>

              <div className='form-group row'>
                <label
                  htmlFor='staticEmail'
                  className='col-sm-2  col-form-label'
                >
                  Email:
                </label>
                <div className='col-sm-10'>
                  <input
                    type='text'
                    readOnly
                    className='form-control-plaintext'
                    id='staticEmail'
                    value={Data.email}
                    disabled
                  />
                </div>
              </div>

              <div className='form-group row'>
                <label htmlFor='Phone' className='col-sm-2 col-form-label'>
                  Phone
                </label>
                <div className='col-sm-10'>
                  <input
                    type='text'
                    readOnly
                    className='form-control-plaintext'
                    id='Phone'
                    value={Data.phone}
                    disabled
                  />
                </div>
              </div>
            </form>*/}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
