import React from 'react';

const BoostItemCard = ({ model, setModel }) => {
    const { name, image, price, condition, location, purchaseTime } = model;
    return (
        <div className="card shadow-xl">
            <figure><img src={image} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">Name : {name}</h2>
                <p>Price : {price}$</p>
                <p>Condition : {condition}</p>
                <p>Location : {location}</p>
                <p>Purchase Time : {purchaseTime}</p>
            </div>
        </div>
    );
};

export default BoostItemCard;