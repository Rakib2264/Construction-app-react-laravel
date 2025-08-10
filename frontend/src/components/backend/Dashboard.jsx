import React from 'react'
import Header from '../common/Header'
import Footer from '../common/Footer'
import Sidebar from '../common/Sidebar'

const Dashboard = () => {
    return (
        <>
            <Header />
            <main>
                <div className="container py-5">

                    <div className="row">
                        <div className="col-md-3">
                              <Sidebar />
                        </div> 
                        <div className="col-md-9 dashboard">
                             <div className="card shadow border-0">
                                 <div className="card-body d-flex align-items-center justify-content-center">
                                     <h4>Welcome to admin dashboard</h4>
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

export default Dashboard
