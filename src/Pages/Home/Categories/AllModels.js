import React from 'react';
import { useLoaderData } from 'react-router-dom';

const AllModels = () => {
    const models = useLoaderData();

    console.log(models);

    const { name, category, _id } = models;
    console.log(category);

    return (
        <div>
            <h2>This is All Model</h2>
        </div>
    );
};

export default AllModels;