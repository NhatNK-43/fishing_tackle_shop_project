import {NavLink, useNavigate} from "react-router-dom";
import * as authService from "../services/authService";
import {useEffect} from "react";
import {Formik, Form, Field, ErrorMessage} from "formik";
import {Header} from "./Header";
import {Footer} from "./Footer";
import {toast} from "react-toastify";

export function Login(){
    const navigate = useNavigate();
    // useEffect(() => {
    //     login();
    // }, []);

    const initValue = {
        username: "",
        password: ""
    }
    const login = async (account) => {
        try {
            const res = await authService.login(account);
            localStorage.setItem('user',JSON.stringify(res.data.token));
            console.log(res)
            if(res.status===200){
                navigate("/home");
                toast.success("Đăng nhập thành công!");
            }
        } catch (e) {

        }
    }

    return(
        <>
            <Header/>
            <button onClick={()=> localStorage.removeItem("user")}>Đăng xuất</button>
            <div className="d-flex justify-content-center">
                <div className="col-3 mt-5">
                    <div className="form-control">
                        {/* Pills content */}
                        <div className="tab-content">
                            <div
                                className="tab-pane fade show active"
                                id="pills-login"
                                role="tabpanel"
                                aria-labelledby="tab-login"
                            >
                                <Formik
                                    initialValues={initValue}
                                    onSubmit={values => {
                                        login(values);
                                    }}
                                >
                                    <Form>
                                        <div className="text-center mb-3">
                                            <p>Đăng nhập với:</p>
                                            <button
                                                data-mdb-ripple-init=""
                                                type="button"
                                                className="btn btn-secondary btn-floating mx-1"
                                            >
                                                <i className="fab fa-facebook-f" />
                                            </button>
                                            <button
                                                data-mdb-ripple-init=""
                                                type="button"
                                                className="btn btn-secondary btn-floating mx-1"
                                            >
                                                <i className="fab fa-google" />
                                            </button>
                                            <button
                                                data-mdb-ripple-init=""
                                                type="button"
                                                className="btn btn-secondary btn-floating mx-1"
                                            >
                                                <i className="fab fa-twitter" />
                                            </button>
                                            <button
                                                data-mdb-ripple-init=""
                                                type="button"
                                                className="btn btn-secondary btn-floating mx-1"
                                            >
                                                <i className="fab fa-github" />
                                            </button>
                                        </div>
                                        <p className="text-center">Hay:</p>
                                        {/* Email input */}
                                        <div data-mdb-input-init="" className="form-outline mb-4">
                                            <Field type="text" id="loginName" className="form-control" name="username"/>
                                            <label className="form-label" htmlFor="loginName">
                                                Email hoặc tên đăng nhập
                                            </label>
                                        </div>
                                        {/* Password input */}
                                        <div data-mdb-input-init="" className="form-outline mb-4">
                                            <Field
                                                type="password"
                                                id="loginPassword"
                                                className="form-control"
                                                name="password"
                                            />
                                            <label className="form-label" htmlFor="loginPassword">
                                                Mật khẩu
                                            </label>
                                        </div>
                                        {/* 2 column grid layout */}
                                        <div className="row mb-4">
                                            <div className="col-md-6 d-flex justify-content-center">
                                                {/* Checkbox */}
                                                <div className="form-check mb-3 mb-md-0">
                                                    <input
                                                        className="form-check-input"
                                                        type="checkbox"
                                                        defaultValue=""
                                                        id="loginCheck"
                                                        defaultChecked=""
                                                    />
                                                    <label className="form-check-label" htmlFor="loginCheck">
                                                        {" "}
                                                        Nhớ mật khẩu{" "}
                                                    </label>
                                                </div>
                                            </div>
                                            <div className="col-md-6 d-flex justify-content-center">
                                                {/* Simple link */}
                                                <a href="#!">Quên mật khẩu?</a>
                                            </div>
                                        </div>
                                        {/* Submit button */}
                                        <button type="submit" className="btn btn-primary btn-block mb-4">
                                            Đăng nhập
                                        </button>
                                        {/* Register buttons */}
                                        <div className="text-center">
                                            <p>
                                                Chưa có tài khoản? <NavLink to="/register">Đăng ký</NavLink>
                                            </p>
                                        </div>
                                    </Form>
                                </Formik>

                            </div>
                        </div>
                        {/* Pills content */}
                    </div>

                </div>
            </div>
            <Footer/>
        </>
    )
}