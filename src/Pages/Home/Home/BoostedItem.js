import React, { useEffect, useState } from 'react';
import BookingModal from '../Categories/BookingModal/BookingModal';
import BoostItemCard from './BoostItemCard';

const BoostedItem = () => {
    const [phoneModels, setPhoneModels] = useState([]);
    const [model, setModel] = useState(null);

    useEffect(() => {
        fetch('https://y-five-snowy.vercel.app/ad')
            .then(res => res.json())
            .then(data => setPhoneModels(data))
    }, [])
    return (
        <div className='mb-5'>
            <h2 className='mt-5, text-center text-2xl font-bold'>Boosted Items :</h2>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-6'>
                {
                    phoneModels.map(model => <BoostItemCard
                        key={model._id}
                        model={model}
                    >
                    </BoostItemCard>)
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

export default BoostedItem;