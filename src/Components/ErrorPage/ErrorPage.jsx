import React from 'react';
import { Link, useRouteError } from 'react-router-dom';
import './ErrorPage.css'

const ErrorPage = () => {
    const {error, status}=useRouteError()
    console.log(error.message)
    return (
     <div className='error-section'>
           <div className='m-auto text-center error-description'>
        <h2 className='mb-8 text-bold  text-white'>
          <span className=''>Error</span> <span className='color'>{status || 404}</span>
        </h2>
        <p className='text-bold text-white mb-5'>
          {error?.message}
        </p>
        <Link
          to='/'
          className='btn go-to-home px-5 py-3 text-bold rounded btn-color'
        >
          Back to homepage
        </Link>
      </div>
     </div>
    );
};

export default ErrorPage;