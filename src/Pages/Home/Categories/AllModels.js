import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import BookingModal from './BookingModal/BookingModal';
import ModelsCard from './ModelsCard';

const AllModels = () => {
    const models = useLoaderData();

    const [model, setModel] = useState(null);

    // console.log(models);

    const { name, category, _id } = models;
    // console.log(category);

    return (
        <div>
            <h2>This is All Model: {name}</h2>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-6'>
                {
                    category.map(model => <ModelsCard
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

                ></BookingModal>
            }
        </div>
    );
};

export default AllModels;