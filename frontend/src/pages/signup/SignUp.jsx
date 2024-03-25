import React, { useState } from 'react'
import GenderRadio from './GenderRadio.jsx';
import { Link } from 'react-router-dom';
import useSignup from '../../hooks/useSignup.js';


const SignUp = () => {
    const [inputs, setInputs] = useState({
        fullName: '',
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
        gender: ''
    });
    const { loading, signup } = useSignup();
    const handleGenderChange = (gender) => {
        setInputs({...inputs, gender})
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        await signup(inputs);
    }

    return (
    <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
        <div className='w-full p-6 rounded-lg shadow-md bg-zinc-900'>
            <h1 className='text-3xl font-semibold text-center text-slate-200 mb-4'>Sign Up <span className='text-lime-700 font-montserrat font-light'>Talk</span></h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label className='label input input-bordered bg-neutral-800 gap-2 mb-4'>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 mr-1 opacity-70"><path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" /></svg>
                        <input type="text" placeholder='Full name' className='grow'
                        value={inputs.fullName}
                        onChange={(e) => setInputs({...inputs, fullName: e.target.value})}
                        />
                    </label>
                </div>
                <div>
                    <label className='label input input-bordered bg-neutral-800 gap-2 mb-4'>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 mr-1 opacity-70"><path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" /></svg>
                        <input type="text" placeholder='Username' className='grow' 
                        value={inputs.username}
                        onChange={(e) => setInputs({...inputs, username: e.target.value})}
                        />
                    </label>
                </div>
                <div>
                    <label className='label input input-bordered bg-neutral-800 gap-2 mb-4'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 mr-1 opacity-70"><path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" /><path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" /></svg>
                        <input type="text" placeholder='Email' className='grow' 
                        value={inputs.email}
                        onChange={(e) => setInputs({...inputs, email: e.target.value})}
                        />
                    </label>
                </div>
                <div>
                    <label className='label input input-bordered bg-neutral-800 gap-2 mb-4'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 mr-1 opacity-70"><path fillRule="evenodd" d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z" clipRule="evenodd" /></svg>
                        <input type="password" placeholder='Password' className='grow' 
                        value={inputs.password}
                        onChange={(e) => setInputs({...inputs, password: e.target.value})}
                        />
                    </label>
                </div>
                <div>
                    <label className='label input input-bordered bg-neutral-800 gap-2 mb-4'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 mr-1 opacity-70"><path fillRule="evenodd" d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z" clipRule="evenodd" /></svg>
                        <input type="password" placeholder='Confirm Password' className='grow' 
                        value={inputs.confirmPassword}
                        onChange={(e) => setInputs({...inputs, confirmPassword: e.target.value})}
                        />
                    </label>
                </div>
                <GenderRadio onRadioChange={handleGenderChange} selectedGender={inputs.gender} />
                <Link to={"/login"} className='text-sm hover:underline text-blue-500 inline-block'>
                    Already have an account ?
                </Link>
                <div>
                    <button className='btn btn-block text-slate-50 font-montserrat border-blue-950 bg-blue-800 hover:bg-blue-950 mt-4'
                    disabled={loading}>
                        {loading ? <span className='loading loading-spinner'></span> : "Sign Up"}
                    </button>
                </div>
            </form>
        </div>
    </div>
    )
}

export default SignUp;

/*
import React from 'react'
import GenderCheckbox from './GenderCheckbox';

const SignUp = () => {
  return (
    <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
        <div className='w-full p-6 rounded-lg shadow-md bg-zinc-900'>
            <h1 className='text-3xl font-semibold text-center text-slate-200 mb-4'>Sign Up <span className='text-lime-700 font-montserrat font-light'>Talk</span></h1>
            <form action="">
                <div>
                    <label className='label input input-bordered bg-neutral-800 gap-2 mb-4'>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 mr-1 opacity-70"><path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" /></svg>
                        <input type="text" placeholder='Full name' className='grow' />
                    </label>
                </div>
                <div>
                    <label className='label input input-bordered bg-neutral-800 gap-2 mb-4'>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 mr-1 opacity-70"><path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" /></svg>
                        <input type="text" placeholder='Username' className='grow' />
                    </label>
                </div>
                <div>
                    <label className='label input input-bordered bg-neutral-800 gap-2 mb-4'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 mr-1 opacity-70"><path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" /><path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" /></svg>
                        <input type="text" placeholder='Email' className='grow' />
                    </label>
                </div>
                <div>
                    <label className='label input input-bordered bg-neutral-800 gap-2 mb-4'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 mr-1 opacity-70"><path fillRule="evenodd" d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z" clipRule="evenodd" /></svg>
                        <input type="password" placeholder='Password' className='grow' />
                    </label>
                </div>
                <div>
                    <label className='label input input-bordered bg-neutral-800 gap-2 mb-4'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 mr-1 opacity-70"><path fillRule="evenodd" d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z" clipRule="evenodd" /></svg>
                        <input type="password" placeholder='Confirm Password' className='grow' />
                    </label>
                </div>
                <GenderCheckbox />
                <a href="#" className='text-sm hover:underline text-blue-500 inline-block'>
                    Already have an account ?
                </a>
                <div>
                    <button className='btn btn-block text-slate-50 font-montserrat border-blue-950 bg-blue-800 hover:bg-blue-950 mt-4'>Sign Up</button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default SignUp; */