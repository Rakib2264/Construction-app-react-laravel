import Header from '../common/Header';
import Footer from '../common/Footer';
import { useForm } from "react-hook-form";
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../backend/context/Auth';

const Login = () => {
    const {login} = useContext(AuthContext);
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = async (data) => {

        const res = await fetch("http://backend.test/api/authenticate", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });
        const result = await res.json();

        if(result.status == false){
            toast.error(result.message);
        }else if(result.status == true){
            const userInfo = {
                id: result.id,
                token: result.token,
            }
            localStorage.setItem("userInfo", JSON.stringify(userInfo));
            login(userInfo);
            navigate("/admin/dashboard");
        }
    };

    return (
        <>
            <Header />

            <main>
                <div className="container my-5 d-flex justify-content-center">
                    <div className="login-form">
                        <div className="card border-0 shadow">
                            <div className="card-body p-5">
                                <form onSubmit={handleSubmit(onSubmit)}>
                                    <h4 className="text-center mb-4">Login Here</h4>

                                    {/* Email */}
                                    <div className="mb-3">
                                        <label htmlFor="exampleInputEmail1" className="form-label">
                                            Email address
                                        </label>
                                        <input
                                            {...register("email", {
                                                required: "Email is required",
                                                pattern: {
                                                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                                    message: "Please enter a valid email address"
                                                }
                                            })}

                                            type="text"
                                            className={`form-control ${errors.email ? "is-invalid" : ""}`}
                                            id="exampleInputEmail1"
        
                                        />
                                        {errors.email && (
                                            <span className="invalid-feedback">{errors.email?.message}</span>
                                        )}
                                        <div id="emailHelp" className="form-text">
                                            We'll never share your email with anyone else.
                                        </div>
                                    </div>

                                    {/* Password */}
                                    <div className="mb-3">
                                        <label htmlFor="exampleInputPassword1" className="form-label">
                                            Password
                                        </label>
                                        <input
                                            {...register("password", { required: "Password is required" })}
                                            type="password"
                                            className={`form-control ${errors.password ? "is-invalid" : ""}`}
                                            id="exampleInputPassword1"
                                        />
                                        {errors.password && (
                                            <span className="invalid-feedback">{errors.password?.message}</span>
                                        )}
                                    </div>

                                    <button type="submit" className="btn btn-sm btn-primary">
                                        Submit
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </>
    );
};

export default Login;
