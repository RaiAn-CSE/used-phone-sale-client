import React, { useEffect, useState } from 'react';
import BoostItemCard from './BoostItemCard';

const BoostedItem = () => {
    const [phoneModels, setPhoneModels] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/ad')
            .then(res => res.json())
            .then(data => setPhoneModels(data))
    }, [])
    return (
        <div className='mb-5'>
            <h2>This is Boosted Item :</h2>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-6'>
                {
                    phoneModels.map(model => <BoostItemCard
                        key={model._id}
                        model={model}
                    >
                    </BoostItemCard>)
                }
            </div>
        </div>
    );
};

export default BoostedItem;