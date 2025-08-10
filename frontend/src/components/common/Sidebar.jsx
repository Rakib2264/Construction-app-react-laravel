import React, { useContext } from 'react'
import { AuthContext } from '../backend/context/Auth'

const Sidebar = () => {
    const {logout} = useContext(AuthContext);
    return (
        <>
            <div className="card shadow-sm border-0">
                <div className="card-body p-0">
                    <h4 className="text-center bg-primary text-white py-3 m-0">
                        Sidebar
                    </h4>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">
                            <a href="#" className="text-decoration-none text-dark d-block">
                                📊 Dashboard
                            </a>
                        </li>
                        <li className="list-group-item">
                            <a href="#" className="text-decoration-none text-dark d-block">
                                🛠 Services
                            </a>
                        </li>
                        <li className="list-group-item">
                            <a href="#" className="text-decoration-none text-dark d-block">
                                📂 Projects
                            </a>
                        </li>
                        <li className="list-group-item">
                            <a href="#" className="text-decoration-none text-dark d-block">
                                📰 Articles
                            </a>
                        </li>
                        <li className="list-group-item text-center">
                            <button onClick={logout} className="btn btn-sm btn-danger w-100">
                                🚪 Logout
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Sidebar
