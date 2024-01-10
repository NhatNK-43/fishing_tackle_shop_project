import {Header} from "./Header";
import {Footer} from "./Footer";
import {Carousel} from "./Carousel";

export function HomePage() {

    return (
        <>
            <Header/>
            <Carousel/>
            <section className="" style={{backgroundColor: "#eee"}}>
                <div className="text-center container py-5">
                    <h4 className="mt-4 mb-5">
                        <strong>Bán chạy nhất</strong>
                    </h4>
                    <div className="row">
                        <div className="col-lg-4 col-md-6 mb-4">
                            <div className="card">
                                <div
                                    className="bg-image hover-zoom ripple"
                                    data-mdb-ripple-color="light"
                                >
                                    <img
                                        src="https://down-vn.img.susercontent.com/file/cc300da7ad4e4951ae168a9d3551ffe3"
                                        className="w-100"
                                    />
                                    <a href="/product-detail">
                                        <div className="mask">
                                            <div className="d-flex justify-content-start align-items-end h-100">
                                                <h5>
                                                    <span className="badge bg-primary ms-2">New</span>
                                                    {/*<span className="badge bg-success ms-2">Eco</span>*/}
                                                    <span className="badge bg-danger ms-2">-10%</span>
                                                </h5>
                                            </div>
                                        </div>
                                        <div className="hover-overlay">
                                            <div
                                                className="mask"
                                                style={{backgroundColor: "rgba(251, 251, 251, 0.15)"}}
                                            />
                                        </div>
                                    </a>
                                </div>
                                <div className="card-body">
                                    <div className="d-flex justify-content-between">
                                        <p className="small">
                                            <a href="/product-detail" className="text-muted">
                                                Cần câu tay
                                            </a>
                                        </p>
                                        <p className="small text-danger">
                                            <s>100.000</s>
                                        </p>
                                    </div>
                                    <div className="d-flex justify-content-between mb-3">
                                        <h5 className="mb-0">SHIMANO</h5>
                                        <h5 className="text-dark mb-0">90.000</h5>
                                    </div>
                                    <div className="d-flex justify-content-between mb-2">
                                        <p className="text-muted mb-0">
                                            Sản phẩm có sẵn: <span className="fw-bold">5</span>
                                        </p>
                                        <div className="ms-auto text-warning">
                                            <i className="fa fa-star"/>
                                            <i className="fas fa-star"/>
                                            <i className="fas fa-star"/>
                                            <i className="fas fa-star"/>
                                            <i className="fas fa-star-half-alt"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 mb-4">
                            <div className="card">
                                <div
                                    className="bg-image hover-zoom ripple"
                                    data-mdb-ripple-color="light"
                                >
                                    <img
                                        src="https://down-vn.img.susercontent.com/file/cc300da7ad4e4951ae168a9d3551ffe3"
                                        className="w-100"
                                    />
                                    <a href="/product-detail">
                                        <div className="mask">
                                            <div className="d-flex justify-content-start align-items-end h-100">
                                                <h5>
                                                    <span className="badge bg-primary ms-2">New</span>
                                                    {/*<span className="badge bg-success ms-2">Eco</span>*/}
                                                    <span className="badge bg-danger ms-2">-10%</span>
                                                </h5>
                                            </div>
                                        </div>
                                        <div className="hover-overlay">
                                            <div
                                                className="mask"
                                                style={{backgroundColor: "rgba(251, 251, 251, 0.15)"}}
                                            />
                                        </div>
                                    </a>
                                </div>
                                <div className="card-body">
                                    <div className="d-flex justify-content-between">
                                        <p className="small">
                                            <a href="/product-detail" className="text-muted">
                                                Cần câu tay
                                            </a>
                                        </p>
                                        <p className="small text-danger">
                                            <s>100.000</s>
                                        </p>
                                    </div>
                                    <div className="d-flex justify-content-between mb-3">
                                        <h5 className="mb-0">SHIMANO</h5>
                                        <h5 className="text-dark mb-0">90.000</h5>
                                    </div>
                                    <div className="d-flex justify-content-between mb-2">
                                        <p className="text-muted mb-0">
                                            Sản phẩm có sẵn: <span className="fw-bold">5</span>
                                        </p>
                                        <div className="ms-auto text-warning">
                                            <i className="fa fa-star"/>
                                            <i className="fas fa-star"/>
                                            <i className="fas fa-star"/>
                                            <i className="fas fa-star"/>
                                            <i className="fas fa-star-half-alt"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 mb-4">
                            <div className="card">
                                <div
                                    className="bg-image hover-zoom ripple"
                                    data-mdb-ripple-color="light"
                                >
                                    <img
                                        src="https://down-vn.img.susercontent.com/file/cc300da7ad4e4951ae168a9d3551ffe3"
                                        className="w-100"
                                    />
                                    <a href="/product-detail">
                                        <div className="mask">
                                            <div className="d-flex justify-content-start align-items-end h-100">
                                                <h5>
                                                    <span className="badge bg-primary ms-2">New</span>
                                                    {/*<span className="badge bg-success ms-2">Eco</span>*/}
                                                    <span className="badge bg-danger ms-2">-10%</span>
                                                </h5>
                                            </div>
                                        </div>
                                        <div className="hover-overlay">
                                            <div
                                                className="mask"
                                                style={{backgroundColor: "rgba(251, 251, 251, 0.15)"}}
                                            />
                                        </div>
                                    </a>
                                </div>
                                <div className="card-body">
                                    <div className="d-flex justify-content-between">
                                        <p className="small">
                                            <a href="/product-detail" className="text-muted">
                                                Cần câu tay
                                            </a>
                                        </p>
                                        <p className="small text-danger">
                                            <s>100.000</s>
                                        </p>
                                    </div>
                                    <div className="d-flex justify-content-between mb-3">
                                        <h5 className="mb-0">SHIMANO</h5>
                                        <h5 className="text-dark mb-0">90.000</h5>
                                    </div>
                                    <div className="d-flex justify-content-between mb-2">
                                        <p className="text-muted mb-0">
                                            Sản phẩm có sẵn: <span className="fw-bold">5</span>
                                        </p>
                                        <div className="ms-auto text-warning">
                                            <i className="fa fa-star"/>
                                            <i className="fas fa-star"/>
                                            <i className="fas fa-star"/>
                                            <i className="fas fa-star"/>
                                            <i className="fas fa-star-half-alt"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 mb-4">
                            <div className="card">
                                <div
                                    className="bg-image hover-zoom ripple"
                                    data-mdb-ripple-color="light"
                                >
                                    <img
                                        src="https://down-vn.img.susercontent.com/file/cc300da7ad4e4951ae168a9d3551ffe3"
                                        className="w-100"
                                    />
                                    <a href="/product-detail">
                                        <div className="mask">
                                            <div className="d-flex justify-content-start align-items-end h-100">
                                                <h5>
                                                    <span className="badge bg-primary ms-2">New</span>
                                                    {/*<span className="badge bg-success ms-2">Eco</span>*/}
                                                    <span className="badge bg-danger ms-2">-10%</span>
                                                </h5>
                                            </div>
                                        </div>
                                        <div className="hover-overlay">
                                            <div
                                                className="mask"
                                                style={{backgroundColor: "rgba(251, 251, 251, 0.15)"}}
                                            />
                                        </div>
                                    </a>
                                </div>
                                <div className="card-body">
                                    <div className="d-flex justify-content-between">
                                        <p className="small">
                                            <a href="/product-detail" className="text-muted">
                                                Cần câu tay
                                            </a>
                                        </p>
                                        <p className="small text-danger">
                                            <s>100.000</s>
                                        </p>
                                    </div>
                                    <div className="d-flex justify-content-between mb-3">
                                        <h5 className="mb-0">SHIMANO</h5>
                                        <h5 className="text-dark mb-0">90.000</h5>
                                    </div>
                                    <div className="d-flex justify-content-between mb-2">
                                        <p className="text-muted mb-0">
                                            Sản phẩm có sẵn: <span className="fw-bold">5</span>
                                        </p>
                                        <div className="ms-auto text-warning">
                                            <i className="fa fa-star"/>
                                            <i className="fas fa-star"/>
                                            <i className="fas fa-star"/>
                                            <i className="fas fa-star"/>
                                            <i className="fas fa-star-half-alt"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 mb-4">
                            <div className="card">
                                <div
                                    className="bg-image hover-zoom ripple"
                                    data-mdb-ripple-color="light"
                                >
                                    <img
                                        src="https://down-vn.img.susercontent.com/file/cc300da7ad4e4951ae168a9d3551ffe3"
                                        className="w-100"
                                    />
                                    <a href="/product-detail">
                                        <div className="mask">
                                            <div className="d-flex justify-content-start align-items-end h-100">
                                                <h5>
                                                    <span className="badge bg-primary ms-2">New</span>
                                                    {/*<span className="badge bg-success ms-2">Eco</span>*/}
                                                    <span className="badge bg-danger ms-2">-10%</span>
                                                </h5>
                                            </div>
                                        </div>
                                        <div className="hover-overlay">
                                            <div
                                                className="mask"
                                                style={{backgroundColor: "rgba(251, 251, 251, 0.15)"}}
                                            />
                                        </div>
                                    </a>
                                </div>
                                <div className="card-body">
                                    <div className="d-flex justify-content-between">
                                        <p className="small">
                                            <a href="/product-detail" className="text-muted">
                                                Cần câu tay
                                            </a>
                                        </p>
                                        <p className="small text-danger">
                                            <s>100.000</s>
                                        </p>
                                    </div>
                                    <div className="d-flex justify-content-between mb-3">
                                        <h5 className="mb-0">SHIMANO</h5>
                                        <h5 className="text-dark mb-0">90.000</h5>
                                    </div>
                                    <div className="d-flex justify-content-between mb-2">
                                        <p className="text-muted mb-0">
                                            Sản phẩm có sẵn: <span className="fw-bold">5</span>
                                        </p>
                                        <div className="ms-auto text-warning">
                                            <i className="fa fa-star"/>
                                            <i className="fas fa-star"/>
                                            <i className="fas fa-star"/>
                                            <i className="fas fa-star"/>
                                            <i className="fas fa-star-half-alt"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 mb-4">
                            <div className="card">
                                <div
                                    className="bg-image hover-zoom ripple"
                                    data-mdb-ripple-color="light"
                                >
                                    <img
                                        src="https://down-vn.img.susercontent.com/file/cc300da7ad4e4951ae168a9d3551ffe3"
                                        className="w-100"
                                    />
                                    <a href="/product-detail">
                                        <div className="mask">
                                            <div className="d-flex justify-content-start align-items-end h-100">
                                                <h5>
                                                    <span className="badge bg-primary ms-2">New</span>
                                                    {/*<span className="badge bg-success ms-2">Eco</span>*/}
                                                    <span className="badge bg-danger ms-2">-10%</span>
                                                </h5>
                                            </div>
                                        </div>
                                        <div className="hover-overlay">
                                            <div
                                                className="mask"
                                                style={{backgroundColor: "rgba(251, 251, 251, 0.15)"}}
                                            />
                                        </div>
                                    </a>
                                </div>
                                <div className="card-body">
                                    <div className="d-flex justify-content-between">
                                        <p className="small">
                                            <a href="/product-detail" className="text-muted">
                                                Cần câu tay
                                            </a>
                                        </p>
                                        <p className="small text-danger">
                                            <s>100.000</s>
                                        </p>
                                    </div>
                                    <div className="d-flex justify-content-between mb-3">
                                        <h5 className="mb-0">SHIMANO</h5>
                                        <h5 className="text-dark mb-0">90.000</h5>
                                    </div>
                                    <div className="d-flex justify-content-between mb-2">
                                        <p className="text-muted mb-0">
                                            Sản phẩm có sẵn: <span className="fw-bold">5</span>
                                        </p>
                                        <div className="ms-auto text-warning">
                                            <i className="fa fa-star"/>
                                            <i className="fas fa-star"/>
                                            <i className="fas fa-star"/>
                                            <i className="fas fa-star"/>
                                            <i className="fas fa-star-half-alt"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 mb-4">
                            <div className="card">
                                <div
                                    className="bg-image hover-zoom ripple"
                                    data-mdb-ripple-color="light"
                                >
                                    <img
                                        src="https://down-vn.img.susercontent.com/file/cc300da7ad4e4951ae168a9d3551ffe3"
                                        className="w-100"
                                    />
                                    <a href="/product-detail">
                                        <div className="mask">
                                            <div className="d-flex justify-content-start align-items-end h-100">
                                                <h5>
                                                    <span className="badge bg-primary ms-2">New</span>
                                                    {/*<span className="badge bg-success ms-2">Eco</span>*/}
                                                    <span className="badge bg-danger ms-2">-10%</span>
                                                </h5>
                                            </div>
                                        </div>
                                        <div className="hover-overlay">
                                            <div
                                                className="mask"
                                                style={{backgroundColor: "rgba(251, 251, 251, 0.15)"}}
                                            />
                                        </div>
                                    </a>
                                </div>
                                <div className="card-body">
                                    <div className="d-flex justify-content-between">
                                        <p className="small">
                                            <a href="/product-detail" className="text-muted">
                                                Cần câu tay
                                            </a>
                                        </p>
                                        <p className="small text-danger">
                                            <s>100.000</s>
                                        </p>
                                    </div>
                                    <div className="d-flex justify-content-between mb-3">
                                        <h5 className="mb-0">SHIMANO</h5>
                                        <h5 className="text-dark mb-0">90.000</h5>
                                    </div>
                                    <div className="d-flex justify-content-between mb-2">
                                        <p className="text-muted mb-0">
                                            Sản phẩm có sẵn: <span className="fw-bold">5</span>
                                        </p>
                                        <div className="ms-auto text-warning">
                                            <i className="fa fa-star"/>
                                            <i className="fas fa-star"/>
                                            <i className="fas fa-star"/>
                                            <i className="fas fa-star"/>
                                            <i className="fas fa-star-half-alt"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer/>
        </>
    )
}