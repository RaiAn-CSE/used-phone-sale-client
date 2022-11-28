import React, { useContext } from 'react';
import { useNavigate, useRouteError } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider';
import img from '../../../assets/images/notFound/notfound.png'

const DisplayError = () => {
    const { logOut } = useContext(AuthContext);
    const error = useRouteError();
    const navigate = useNavigate();

    const handleLogOut = () => {
        logOut()
            .then(() => {
                navigate('/login');
            })
            .catch(err => console.log(err));
    }

    return (
        <div>
            <div className="card shadow-xl">
                <figure><img src={img} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">  <p className='text-red-400'>{error.statusText || error.message}</p></h2>
                    <p className='text-red-500'>Something went wrong!!!</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary" onClick={handleLogOut}>Sign out</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DisplayError;