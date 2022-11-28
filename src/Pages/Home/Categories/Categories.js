import React, { useEffect, useState } from 'react';
import Models from './Models';

const Categories = () => {
    const [phoneModels, setPhoneModels] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/categories')
            .then(res => res.json())
            .then(data => setPhoneModels(data))
    }, [])
    return (
        <section>
            <p className='text-2xl text-center font-bold'>Categories</p>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-6'>
                {
                    phoneModels.map(model => <Models
                        key={model._id}
                        model={model}
                    ></Models>)
                }
            </div>
        </section>
    );
};

export default Categories;