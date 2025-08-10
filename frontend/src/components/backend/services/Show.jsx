import React, { use, useState, useEffect } from 'react'
import Header from '../../common/Header'
import Footer from '../../common/Footer'
import Sidebar from '../../common/Sidebar'
import { apiUrl, token } from '../../common/Http'
import { Link } from 'react-router-dom'

const Show = () => {

    const [services, setServices] = React.useState([]);

    const fetchServices = async () => {
        const res = await fetch(apiUrl + 'services', {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "Authorization": `Bearer ${token()}`
            }

        });
        const result = await res.json();
        setServices(result.data);
        console.log(result);
    }
    useEffect(() => {
        fetchServices();
    }, []);

    return (
        <>
            <Header />
            <main>
                <div className="container py-5">

                    <div className="row">
                        <div className="col-md-3">
                            <Sidebar />
                        </div>
                        <div className="col-md-9">
                            <div className="card shadow border-0">
                                <div className="card-body p-4">
                                    <div className="d-flex justify-content-between">
                                        <h4 className="text-primary">Services</h4>
                                        <Link to="/admin/services/create" className="btn btn-sm btn-success ms-3">Create</Link>
                                    </div>
                                    <hr />

                                    <table className="table table-hover table-striped table-bordered responsive">
                                        <thead className="thead-light">
                                            <tr>
                                                <th scope="col">ID</th>
                                                <th scope="col">Name</th>
                                                <th scope="col">Slug</th>
                                                <th scope="col">Status</th>
                                                <th scope="col">Action</th>
                                            </tr>
                                        </thead>

                                        <tbody>
                                            {
                                                services && services.map(services => {
                                                  return  (
                                                        <tr>
                                                            <th scope="row">{services.id}</th>
                                                            <td>{services.title}</td>
                                                            <td>{services.slug}</td>
                                                            <td>
                                                                {
                                                                    (services.status == 1) ? 'Active' : 'Inactive'
                                                                }
                                                            </td>
                                                            <td className="text-center d-flex gap-2">
                                                                <a href="#"  className="btn btn-sm btn-info">Edit</a>
                                                                <a href="#" className="btn btn-sm btn-danger">Delete</a>
                                                            </td>
                                                        </tr>
                                                    )
                                                })
                                            }
                                        </tbody>
                                    </table>

                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </main>
            <Footer />
        </>
    )
}

export default Show