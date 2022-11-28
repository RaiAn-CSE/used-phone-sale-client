import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import Loading from '../Shared/Loading/Loading';


const AddProducts = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const imageHostKey = process.env.REACT_APP_imgbb_key;

    const navigate = useNavigate();

    const { isLoading } = useQuery({
        queryKey: [''],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/products');
            const data = await res.json();
            return data;
        }
    })

    const handleAddProduct = data => {
        const image = data.image[0];
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imgData => {
                if (imgData.success) {
                    console.log(imgData.data.url);
                    const product = {
                        name: data.name,
                        image: imgData.data.url,
                        price: data.price,
                        condition: data.condition,
                        location: data.location,
                        description: data.description,
                        purchaseTime: data.purchaseTime,
                        saleStatus: 'Available'
                    }

                    // Save Products information to the database
                    fetch('http://localhost:5000/products', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json',
                            authorization: `bearer ${localStorage.getItem('accessToken')}`
                        },
                        body: JSON.stringify(product)
                    })
                        .then(res => res.json())
                        .then(result => {
                            console.log(result);
                            toast.success(`${data.name} is added successfully`);
                            navigate('/myproducts')
                        })
                }
            })
    }

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div className='flex justify-center items-center'>
            <div className='w-96 p-7 text-center'>
                <h2 className="text-4xl font-bold">Add Products :</h2>
                <form onSubmit={handleSubmit(handleAddProduct)}>
                    {/* Name : */}
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Name</span></label>
                        <input type="text" {...register("name", {
                            required: "Name is Required"
                        })} className="input input-bordered w-full max-w-xs" />
                        {errors.name && <p className='text-red-500'>{errors.name.message}</p>}
                    </div>
                    {/* Image :  */}
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Photo</span></label>
                        <input type="file" {...register("image", {
                            required: "Photo is Required"
                        })} className="input input-bordered w-full max-w-xs" />
                        {errors.img && <p className='text-red-500'>{errors.img.message}</p>}
                    </div>
                    {/* Price : */}
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Price</span></label>
                        <input type="text" {...register("price", {
                            required: "Price is Required"
                        })} className="input input-bordered w-full max-w-xs" />
                        {errors.price && <p className='text-red-500'>{errors.price.message}</p>}
                    </div>
                    {/* Condition Type :  */}
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Condition</span></label>
                        <input type="text" {...register("condition", {
                            required: "Price is Required"
                        })} className="input input-bordered w-full max-w-xs" />
                        {errors.condition && <p className='text-red-500'>{errors.condition.message}</p>}
                    </div>
                    {/* Location :  */}
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Location</span></label>
                        <input type="text" {...register("location", {
                            required: "Price is Required"
                        })} className="input input-bordered w-full max-w-xs" />
                        {errors.location && <p className='text-red-500'>{errors.location.message}</p>}
                    </div>
                    {/* Description :  */}
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Description</span></label>
                        <input type="text" {...register("location", {
                            required: "Price is Required"
                        })} className="input input-bordered w-full max-w-xs" />
                        {errors.description && <p className='text-red-500'>{errors.description.message}</p>}
                    </div>
                    {/* Year of purchase : */}
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Year of purchase</span></label>
                        <input type="text" {...register("purchaseTime", {
                            required: "Price is Required"
                        })} className="input input-bordered w-full max-w-xs" />
                        {errors.purchaseTime && <p className='text-red-500'>{errors.purchaseTime.message}</p>}
                    </div>

                    {/* Submit Button : */}
                    <input className='btn btn-accent w-full mt-4' value="Add Product" type="submit" />
                </form>
            </div>
        </div>
    );
};

export default AddProducts;