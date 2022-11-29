import { useQuery } from '@tanstack/react-query';
import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../contexts/AuthProvider';
import ConfirmationModal from '../Shared/ConfirmationModal/ConfirmationModal';
import Loading from '../Shared/Loading/Loading';
import ProductCard from './ProductCard/ProductCard';


const MyProducts = () => {
    const { user } = useContext(AuthContext)
    const [deletingProduct, setDeletingProduct] = useState(null);

    const closeModal = () => {
        setDeletingProduct(null);
    }


    const { data: products, isLoading, refetch } = useQuery({
        queryKey: ['products'],
        queryFn: async () => {
            try {
                const res = await fetch(`http://localhost:5000/products?email=${user?.email}`, {
                    headers: {
                        authorization: `bearer ${localStorage.getItem('accessToken')}`
                    }
                });
                const data = await res.json();
                return data;
            }
            catch (error) {

            }
        }
    });

    const setAdvertise = p => {

        const { _id, name, image, price, condition, location, purchaseTime, categoryName, sellerEmail } = p;

        const product = {
            productId: _id,
            name: name,
            image,
            price,
            condition,
            location,
            purchaseTime,
            sellerEmail,
        }

        fetch(`http://localhost:5000/advertise`, {
            method: 'POST',
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(product)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged) {
                    console.log(data.insertId);
                    toast.success(`Product Advertise successfully`)

                }
            })

    }


    const handleDeleteProduct = product => {
        fetch(`http://localhost:5000/products/${product._id}`, {
            method: 'DELETE',
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    refetch();
                    toast.success(`Product ${product.name} deleted successfully`)
                }
            })
    }

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div>
            <h2 className="text-3xl">Total Products: {products?.length}</h2>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-6'>
                {
                    products.map((product, i) => <ProductCard
                        key={product._id}
                        product={product}
                        setDeletingProduct={setDeletingProduct}
                        deletingProduct={deletingProduct}
                        setAdvertise={setAdvertise}
                    >
                    </ProductCard>)
                }
            </div>

            {
                deletingProduct && <ConfirmationModal
                    title={`Are you sure you want to delete?`}
                    message={`If you delete ${deletingProduct.name}. It cannot be undone.`}
                    successAction={handleDeleteProduct}
                    successButtonName="Delete"
                    modalData={deletingProduct}
                    closeModal={closeModal}
                >
                </ConfirmationModal>
            }
        </div >
    );
};

export default MyProducts;