import { Link } from 'react-router-dom'
import { useState } from 'react'
import useLogin from '../../hooks/useLogin.js'
const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const { loading, login } = useLogin();

    const handleSubmit = async (e) => {
        e.preventDefault();
        await login(username, password);
    }

    return (
    <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
        <div className='w-full p-6 rounded-lg shadow-md bg-zinc-900'>
            <h1 className='text-3xl font-semibold text-center text-slate-200 mb-4'>Login <span className='text-lime-600 font-montserrat font-light'>Talk</span></h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label className='label input input-bordered bg-neutral-800 gap-2 mb-4'>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 mr-1 opacity-70"><path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" /></svg>
                        <input type="text" placeholder='Username' className='grow text-slate-200'
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        />
                    </label>
                </div>
                <div>
                    <label className='label input input-bordered bg-neutral-800 gap-2 mb-4'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 mr-1 opacity-70"><path fillRule="evenodd" d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z" clipRule="evenodd" /></svg>
                        <input type="password" placeholder='Password' className='grow text-slate-200'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        />
                    </label>
                </div>
                <Link to={"/signup"} href='#' className='text-sm hover:underline text-blue-500 inline-block'>
                    {"Don't"} have an account ?
                </Link>
                <div>
                    <button className='btn btn-block text-slate-50 font-montserrat border-blue-950 bg-blue-800 hover:bg-blue-950 mt-4'
                    disabled={loading}>
                    {loading ? <span className='loading loading-spinner'></span> : "Login"}
                    </button>
                </div>
            </form>
        </div>
    </div>
    )
}

export default Login;

/* import React from 'react'

const Login = () => {
  return (
    <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
        <div className='w-full p-6 rounded-lg shadow-md bg-zinc-900'>
            <h1 className='text-3xl font-semibold text-center text-slate-200 mb-4'>Login <span className='text-lime-700 font-montserrat font-light'>Talk</span></h1>
            <form action="">
                <div>
                    <label className='label input input-bordered bg-neutral-800 gap-2 mb-4'>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 mr-1 opacity-70"><path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" /></svg>
                        <input type="text" placeholder='Username' className='grow' />
                    </label>
                </div>
                <div>
                    <label className='label input input-bordered bg-neutral-800 gap-2 mb-4'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 mr-1 opacity-70"><path fillRule="evenodd" d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z" clipRule="evenodd" /></svg>
                        <input type="password" placeholder='Password' className='grow' />
                    </label>
                </div>
                <a href="#" className='text-sm hover:underline text-blue-500 inline-block'>
                    {"Don't"} have an account ?
                </a>
                <div>
                    <button className='btn btn-block text-slate-50 font-montserrat border-blue-950 bg-blue-800 hover:bg-blue-950 mt-4'>Login</button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Login; */