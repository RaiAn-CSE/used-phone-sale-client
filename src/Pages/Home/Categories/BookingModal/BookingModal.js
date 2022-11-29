// import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import toast from 'react-hot-toast';
// import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';
import { AuthContext } from '../../../../contexts/AuthProvider'

const BookingModal = ({ model, setModel }) => {
    const { user } = useContext(AuthContext)
    const { _id, name, price } = model;



    const handleBooking = (event) => {
        event.preventDefault()

        const form = event.target;
        const phone = form.phone.value;
        const location = form.location.value;
        const email = form.email.value;

        const bookProduct = {
            name,
            location,
            phone,
            email,
            price,
        }

        console.log(bookProduct);

        fetch('http://localhost:5000/bookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(bookProduct)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    console.log(data);
                    setModel(null)
                    toast.success("Booking is confirmed")
                } else {
                    toast.error(data.message)
                }
            })
    }

    return (
        <>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">Item Name: {name}</h3>
                    <h3 className="text-lg">Price: {price}</h3>
                    <form onSubmit={handleBooking} className='grid grid-cols-1 gap-3 mt-10'>

                        <input name="name" type="text" defaultValue={user?.displayName} disabled placeholder="Your Name" className="input w-full input-bordered" />
                        <input name="email" type="email" defaultValue={user?.email} disabled placeholder="Email Address" className="input w-full input-bordered" />

                        <input name="phone" type="text" placeholder="Phone Number" className="input w-full input-bordered" />
                        <input name="location" type="text" placeholder="Your Location" className="input w-full input-bordered" />
                        <br />
                        <input className='btn btn-accent w-full' type="submit" value="Submit" />
                    </form>
                </div>
            </div>
        </>
    );
};

export default BookingModal;
