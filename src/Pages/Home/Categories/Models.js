import React from 'react';
import { Link } from 'react-router-dom';

const Models = ({ model }) => {
    const { name, _id } = model;
    return (
        <div className="card shadow-xl">
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions justify-end">
                    <Link to={`/allmodels/${_id}`}>
                        <button className="btn btn-primary">Buy Now</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Models;