import React from 'react';
import img from '../../../assets/images/about_us/contact.jpg'

const Support = () => {
    return (
        <div className="card lg:card-side bg-base-100 shadow-xl mb-5">
            <figure><img src={img} alt="Album" /></figure>
            <div className="card-body">
                <h2 className="card-title font-sans uppercase text-5xl font-extrabold mb-3">24/7 Support</h2>
                <p>Contact Us : +231314131,+2424242</p>
                <h2 className="card-title">The ultimate guide to shopping for a second hand phone.</h2>
                <p>
                    The thrill of purchasing a second-hand phone might not compare to the delight of opening a new mobile device with advanced technology and enticing features packaged in a sleek box. <br />

                    Nonetheless, buying a new phone is not always an option, especially if you consider yourself a gadget freak and are always on the lookout for the latest models that are creating waves in the mobile phone industry.<br />
                </p>
            </div>
        </div>
    );
};

export default Support;