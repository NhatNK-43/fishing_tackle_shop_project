import {NavLink} from "react-router-dom";

export function Header() {
    return (
        <>
            <header>
                {/* Navbar */}
                <nav className="navbar navbar-expand-lg navbar-light bg-body-tertiary p-0">
                    {/* Container wrapper */}
                    <div className="container">
                        {/* Toggle button */}
                        <button
                            data-mdb-collapse-init=""
                            className="navbar-toggler"
                            type="button"
                            data-mdb-target="#navbarSupportedContent"
                            aria-controls="navbarSupportedContent"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <i className="fas fa-bars"/>
                        </button>
                        {/* Collapsible wrapper */}
                        <div className="collapse navbar-collapse px-2" id="navbarSupportedContent">
                            {/* Navbar brand */}
                            <a className="navbar-brand mt-2 mt-lg-0" href="#">
                                <img
                                    src="/logo_fishing.png"
                                    height={60}
                                    alt="MDB Logo"
                                    loading="lazy"
                                />
                            </a>
                            {/* Left links */}
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <NavLink to="/home" className="nav-link" href="#">
                                        Trang chủ
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">
                                        Sản phẩm
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">
                                        Về chúng tôi
                                    </a>
                                </li>
                            </ul>
                            {/* Left links */}
                        </div>
                        {/* Collapsible wrapper */}
                        {/* Right elements */}
                        <div className="d-flex align-items-center">
                            {/* Icon */}
                            <NavLink to="/cart" className="text-reset me-3" href="#">
                                <i className="fas fa-shopping-cart"/>
                            </NavLink>
                            {/* Notifications */}
                            <div className="dropdown">
                                <a
                                    data-mdb-dropdown-init=""
                                    className="text-reset me-3 dropdown-toggle hidden-arrow"
                                    href="#"
                                    id="navbarDropdownMenuLink"
                                    role="button"
                                    aria-expanded="false"
                                >
                                    <i className="fas fa-bell"/>
                                    <span className="badge rounded-pill badge-notification bg-danger">1</span>
                                </a>
                                <ul
                                    className="dropdown-menu dropdown-menu-end"
                                    aria-labelledby="navbarDropdownMenuLink"
                                >
                                    <li>
                                        <a className="dropdown-item" href="#">
                                            {/*Some news*/}
                                        </a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="#">
                                            {/*Another news*/}
                                        </a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="#">
                                            {/*Something else here*/}
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            {/* Avatar */}
                            <div className="dropdown">
                                <a
                                    data-mdb-dropdown-init=""
                                    className="dropdown-toggle d-flex align-items-center hidden-arrow"
                                    href="#"
                                    id="navbarDropdownMenuAvatar"
                                    role="button"
                                    aria-expanded="false"
                                >
                                    <img
                                        src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
                                        className="rounded-circle"
                                        height={25}
                                        alt="Black and White Portrait of a Man"
                                        loading="lazy"
                                    />
                                </a>
                                <ul
                                    className="dropdown-menu dropdown-menu-end"
                                    aria-labelledby="navbarDropdownMenuAvatar"
                                >
                                    <li>
                                        <NavLink to="/information" className="dropdown-item" href="#">
                                            Thông tin cá nhân
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/setting" className="dropdown-item" href="#">
                                            Cài đặt
                                        </NavLink>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="#">
                                            Đăng xuất
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        {/* Right elements */}
                    </div>
                    {/* Container wrapper */}
                </nav>
            </header>
        </>
    )
}