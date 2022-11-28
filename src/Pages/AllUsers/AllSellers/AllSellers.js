import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import toast from 'react-hot-toast';

const AllSellers = () => {

    const [sellers, setSellers] = useState([])

    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await fetch("http://localhost:5000/users");
            const data = await res.json();
            // console.log(data);
            return data;
        }
    });

    const handleDelete = id => {
        console.log(id);
        const agree = window.confirm(`Are you sure you want to delete :${id} `)
        if (agree) {
            console.log("Deleting user with id:", id)
            fetch(`http://localhost:5000/users/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        toast.success('Make admin successful.')

                        const remaining = sellers.filter(dlt => dlt._id !== id)
                        setSellers(remaining)
                    }
                    console.log(data)
                })
        }
    }

    // const handleMakeAdmin = id => {
    //     fetch(`http://localhost:5000/users/admin/${id}`, {
    //         method: 'PUT',
    //         headers: {
    //             authorization: `bearer ${localStorage.getItem('accessToken')}`
    //         }
    //     })
    //         .then(res => res.json())
    //         .then(data => {
    //             console.log(data);
    //             if (data.modifiedCount > 0) {
    //                 toast.success('Make admin successful.')
    //                 refetch();
    //             }
    //         })
    // }

    return (
        <div>
            <h2 className="text-3xl">All Sellers {users.length}</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            {/* <th>Admin</th> */}
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, i) => <tr key={user._id}>
                                <th>{i + 1}</th>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                {/* <td>
                                    {
                                        user?.role !== 'admin' &&
                                        <button onClick={() => handleMakeAdmin(user._id)} className='btn btn-xs btn-primary'>Make Admin
                                        </button>
                                    }
                                </td> */}
                                <td>
                                    <button className="btn btn-outline btn-warning btn-xs mr-3 mb-5" onClick={() => handleDelete(user._id)}>Delete</button>
                                </td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllSellers;