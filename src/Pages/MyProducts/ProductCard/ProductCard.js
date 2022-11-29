import React from 'react';

const ProductCard = ({ product, setDeletingProduct, setAdvertise }) => {
    const { name, image, price, condition, location, purchaseTime } = product;
    return (
        <div className="card card-compact shadow-xl">
            <figure><img src={image} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">Name : {name}</h2>
                <p>Price : {price}$</p>
                <p>Condition : {condition}</p>
                <p>Location : {location}</p>
                <p>Purchase Time : {purchaseTime}</p>
                <div className="card-actions justify-end">
                    <label onClick={() => setAdvertise(product)} className="btn btn-sm btn-error">Advertise</label>
                </div>
                <div className="card-actions justify-end">
                    <label onClick={() => setDeletingProduct(product)} htmlFor="confirmation-modal" className="btn btn-sm btn-error">Delete</label>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;