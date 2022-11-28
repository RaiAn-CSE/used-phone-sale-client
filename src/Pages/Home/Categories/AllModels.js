import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import BookingModal from './BookingModal/BookingModal';
import ModelsCard from './ModelsCard';

const AllModels = () => {
    const models = useLoaderData();
    console.log(models);
    const [model, setModel] = useState(null);

    // console.log(models);

    // const { categoryName, _id } = models;
    // console.log(category);

    return (
        <div>
            <h2>This is All Model:</h2>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-6'>
                {
                    models.map(model => <ModelsCard
                        key={model._id}
                        model={model}
                        setModel={setModel}
                    ></ModelsCard>)
                }
            </div>
            {
                model &&
                <BookingModal
                    model={model}
                    setModel={setModel}
                ></BookingModal>
            }
        </div>
    );
};

export default AllModels;