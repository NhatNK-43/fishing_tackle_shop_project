import {NavLink} from "react-router-dom";

export function Login(){

    return(
        <>
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
                                <form>
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
                                        <input type="email" id="loginName" className="form-control" />
                                        <label className="form-label" htmlFor="loginName">
                                            Email hoặc tên đăng nhập
                                        </label>
                                    </div>
                                    {/* Password input */}
                                    <div data-mdb-input-init="" className="form-outline mb-4">
                                        <input
                                            type="password"
                                            id="loginPassword"
                                            className="form-control"
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
                                    <NavLink role="button" to="/home" className="btn btn-primary btn-block mb-4">
                                        Đăng nhập
                                    </NavLink>
                                    {/* Register buttons */}
                                    <div className="text-center">
                                        <p>
                                            Chưa có tài khoản? <NavLink to="/register">Đăng ký</NavLink>
                                        </p>
                                    </div>
                                </form>
                            </div>
                        </div>
                        {/* Pills content */}
                    </div>

                </div>
            </div>
        </>
    )
}