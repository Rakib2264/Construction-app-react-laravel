import React from 'react'
import Header from '../../common/Header'
import Footer from '../../common/Footer'
import Sidebar from '../../common/Sidebar'
import { Link } from 'react-router-dom'

const Create = () => {
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
                                        <h4 className="text-primary">Services / Create</h4>
                                        <Link to="/admin/services" className="btn btn-sm btn-success ms-3">Back</Link>
                                    </div>
                                    <hr />

                                    <form action="">
                                        <div className="mb-3">
                                            <label htmlFor="title" className="form-label">Title</label>
                                            <input type="text" className="form-control" id="title" placeholder="Enter title" />
                                        </div>
                                         <div className="mb-3">
                                            <label htmlFor="slug" className="form-label">Slug</label>
                                            <input type="text" className="form-control" id="slug" placeholder="Enter slug" />
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="description" className="form-label">Short Description</label>
                                            <textarea className="form-control" id="description" rows="3" placeholder="Enter description"></textarea>
                                        </div>
                                          <div className="mb-3">
                                            <label htmlFor="content" className="form-label">Content</label>
                                            <textarea className="form-control" id="content" rows="3" placeholder="Enter content"></textarea>
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="status" className="form-label">Status</label>
                                            <select className="form-select">
                                                <option value="1">Active</option>
                                                <option value="0">Inactive</option>
                                            </select>
                                        </div>
                                        <button type="submit" className="btn btn-sm btn-info">Submit</button>
                                    </form>

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

export default Create