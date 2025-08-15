import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../provider/Authprovider';

const Register = () => {
    const {createUser} = useContext(AuthContext);
    const handelRegister=(e)=>{
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(name, email, password)
        createUser(email,password)
        .then(res => {
            console.log(res.user)
        })
        .catch(err => {
            console.log("Error", err)
        })
    }
    return (
        <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col">
        <div className="text-center lg:text-left">
          <h1 className="text-3xl font-bold">Register now!</h1>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <div className="card-body">
            <form onSubmit={handelRegister} className="fieldset">
              <label className="label">Name</label>
              <input type="text" name="name" className="input" placeholder="name" />
              <label className="label">Email</label>
              <input type="email" name="email" className="input" placeholder="Email" />
              <label className="label">Password</label>
              <input type="password" name="password" className="input" placeholder="Password" />
              <div>
                <a className="link link-hover">Forgot password?</a>
              </div>
              <button className="btn btn-neutral mt-4">Register</button>
            </form>
            <p className='my-4'>Already have an account <Link to={'/login'}>Login</Link></p>
          </div>
        </div>
      </div>
    </div>
    );
};

export default Register;