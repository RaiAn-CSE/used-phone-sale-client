import React from 'react';

const BookingModal = ({ model, setModel }) => {
    const { name } = model;

    const handleBooking = event => {
        event.preventDefault();
        const form = event.target;
        // const name = form.name.value;
        // const email = form.email.value;
        const phone = form.phone.value;
        const location = form.location.value;

        // console.log(phone, location);
        // [3, 4, 5].map((value, i) => console.log(value))
        const booking = {
            name,
            // email,
            phone,
            location
        }
        console.log(booking);
        setModel(null);
    }

    return (
        <>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">{name}</h3>
                    <form onSubmit={handleBooking} className='grid grid-cols-1 gap-3 mt-10'>
                        <input type="text" className="input w-full input-bordered " />

                        {/* <input name="name" type="text" defaultValue={user?.displayName} disabled placeholder="Your Name" className="input w-full input-bordered" />
                        <input name="email" type="email" defaultValue={user?.email} disabled placeholder="Email Address" className="input w-full input-bordered" /> */}
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