import React from 'react';

const ModelsCard = ({ model, setModel }) => {
    const { name } = model;

    return (
        <div className="card shadow-xl">
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions justify-center">
                    <label
                        htmlFor="booking-modal"
                        className="btn btn-primary text-white"
                        onClick={() => setModel(model)}
                    >Book Appointment</label>
                </div>
            </div>
        </div>
    );
};

export default ModelsCard;