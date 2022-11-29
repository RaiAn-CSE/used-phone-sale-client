import React from 'react';
import toast from 'react-hot-toast';

const ModelsCard = ({ model, setModel }) => {
    const { _id, name, image, price, condition, location, purchaseTime } = model;


    const handleReportedItems = id => {

        const reportedItems = {
            name,
            image,
            price,
        }

        fetch(`http://localhost:5000/reportedItems`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',

            },
            body: JSON.stringify(reportedItems)
        })
            .then(res => {
                if (res.status === 200) {
                    toast.success("Reported successfully")

                } else {
                    toast.error("Something is wrong")
                }
            })
            .catch(error => toast.error(error.message))
    }


    return (
        <div className="card shadow-xl">
            <figure><img src={image} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">Name : {name}</h2>
                <p>Price : {price}$</p>
                <p>Condition : {condition}</p>
                <p>Location : {location}</p>
                <p>Purchase Time : {purchaseTime}</p>
                <div>
                    <button onClick={() => handleReportedItems(_id)} className="btn btn-sm border-0 bg-red-600 gap-2">
                        Report
                    </button>
                </div>
                <div className="card-actions justify-center">
                    <label
                        htmlFor="booking-modal"
                        className="btn btn-primary text-white"
                        onClick={() => setModel(model)}
                    >Book Now</label>
                </div>
            </div>
        </div>
    );
};

export default ModelsCard;