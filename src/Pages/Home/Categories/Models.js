import React from 'react';
import { Link } from 'react-router-dom';

const Models = ({ model }) => {
    const { categoryName, categoryImage, Description, categoryId, _id } = model;
    return (
        <div className="card shadow-xl mb-5">
            <figure><img src={categoryImage} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{categoryName}</h2>
                <p>{Description}</p>
                <div className="card-actions justify-end">
                    <Link to={`/category/${categoryId}`}>
                        <button className="btn btn-primary">Search</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Models;