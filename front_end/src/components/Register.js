import {NavLink} from "react-router-dom";

export function Register(){

    return(
        <>
            <div className="d-flex justify-content-center">
                <div className="col-3">
                    {/* Pills content */}
                    <div className="tab-content">
                        <div
                            className="tab-pane fade show active"
                            id="pills-register"
                            role="tabpanel"
                            aria-labelledby="tab-register"
                        >
                            <form>
                                <div className="text-center mb-3">
                                    <p>Đăng ký với:</p>
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
                                {/* Name input */}
                                <div data-mdb-input-init="" className="form-outline mb-4">
                                    <input type="text" id="registerName" className="form-control" />
                                    <label className="form-label" htmlFor="registerName">
                                        Tên
                                    </label>
                                </div>
                                {/* Username input */}
                                <div data-mdb-input-init="" className="form-outline mb-4">
                                    <input type="text" id="registerUsername" className="form-control" />
                                    <label className="form-label" htmlFor="registerUsername">
                                        Tên đăng nhập
                                    </label>
                                </div>
                                {/* Email input */}
                                <div data-mdb-input-init="" className="form-outline mb-4">
                                    <input type="email" id="registerEmail" className="form-control" />
                                    <label className="form-label" htmlFor="registerEmail">
                                        Email
                                    </label>
                                </div>
                                {/* Password input */}
                                <div data-mdb-input-init="" className="form-outline mb-4">
                                    <input
                                        type="password"
                                        id="registerPassword"
                                        className="form-control"
                                    />
                                    <label className="form-label" htmlFor="registerPassword">
                                        Mật khẩu
                                    </label>
                                </div>
                                {/* Repeat Password input */}
                                <div data-mdb-input-init="" className="form-outline mb-4">
                                    <input
                                        type="password"
                                        id="registerRepeatPassword"
                                        className="form-control"
                                    />
                                    <label className="form-label" htmlFor="registerRepeatPassword">
                                        Nhập lại mật khẩu
                                    </label>
                                </div>
                                {/* Checkbox */}
                                <div className="form-check d-flex justify-content-center mb-4">
                                    <input
                                        className="form-check-input me-2"
                                        type="checkbox"
                                        defaultValue=""
                                        id="registerCheck"
                                        defaultChecked=""
                                        aria-describedby="registerCheckHelpText"
                                    />
                                    <label className="form-check-label" htmlFor="registerCheck">
                                        Tôi đã đọc và đồng ý với các điều khoản
                                    </label>
                                </div>
                                {/* Submit button */}
                                <NavLink
                                    data-mdb-ripple-init=""
                                    role="button"
                                    className="btn btn-primary btn-block mb-3"
                                    to="/login"
                                >
                                    Đăng ký
                                </NavLink>
                            </form>
                        </div>
                    </div>
                    {/* Pills content */}
                </div>
            </div>
        </>
    )
}