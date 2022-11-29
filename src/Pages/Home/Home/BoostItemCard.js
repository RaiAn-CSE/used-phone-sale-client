import React from 'react';
import { Link } from 'react-router-dom';

const BoostItemCard = ({ model }) => {
    const { name, image, price, condition, location, purchaseTime, saleStatus, categoryName } = model;
    return (
        <div className="card shadow-xl">
            <figure><img src={image} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">Name : {name}</h2>
                <p>Price : {price}$</p>
                <p>Condition : {condition}</p>
                <p>Location : {location}</p>
                <p>Purchase Time : {purchaseTime}</p>
                {/* <div className="card-actions justify-center">
                    <label
                        htmlFor="booking-modal"
                        className="btn btn-primary text-white"
                        onClick={() => setModel(model)}
                    >Book Now</label>
                </div> */}
            </div>
        </div>
    );
};

export default BoostItemCard;