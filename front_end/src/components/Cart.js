import {Footer} from "./Footer";
import {Header} from "./Header";

export  function Cart(){

    return(
        <>
            <Header/>
            <section className="h-100 gradient-custom">
                <div className="container py-5">
                    <div className="row d-flex justify-content-center my-4">
                        <div className="col-md-8">
                            <div className="card mb-4">
                                <div className="card-header py-3">
                                    <h5 className="mb-0">Giỏ hàng - 2 sản phẩm</h5>
                                </div>
                                <div className="card-body">
                                    {/* Single item */}
                                    <div className="row">
                                        <div className="col-lg-3 col-md-12 mb-4 mb-lg-0">
                                            {/* Image */}
                                            <div
                                                className="bg-image hover-overlay hover-zoom ripple rounded"
                                                data-mdb-ripple-color="light"
                                            >
                                                <img
                                                    src="https://down-vn.img.susercontent.com/file/cc300da7ad4e4951ae168a9d3551ffe3"
                                                    className="w-100"
                                                    alt="can-cau-tay"
                                                />
                                                <a href="/product-detail">
                                                    <div
                                                        className="mask"
                                                        style={{ backgroundColor: "rgba(251, 251, 251, 0.2)" }}
                                                    />
                                                </a>
                                            </div>
                                            {/* Image */}
                                        </div>
                                        <div className="col-lg-5 col-md-6 mb-4 mb-lg-0">
                                            {/* Data */}
                                            <p>
                                                <strong>Cần câu tay SHIMANO</strong>
                                            </p>
                                            <p>Màu sắc: Đen</p>
                                            <p>Kích thước: 2M7</p>
                                            <button
                                                type="button"
                                                className="btn btn-primary btn-sm me-1 mb-2"
                                                data-mdb-toggle="tooltip"
                                                title="Remove item"
                                            >
                                                <i className="fas fa-trash" />
                                            </button>
                                            <button
                                                type="button"
                                                className="btn btn-danger btn-sm mb-2"
                                                data-mdb-toggle="tooltip"
                                                title="Move to the wish list"
                                            >
                                                <i className="fas fa-heart" />
                                            </button>
                                            {/* Data */}
                                        </div>
                                        <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
                                            {/* Quantity */}
                                            <div className="d-flex mb-4" style={{ maxWidth: 300 }}>
                                                <button
                                                    className="btn btn-primary px-3 me-2"
                                                    onClick="this.parentNode.querySelector('input[type=number]').stepDown()"
                                                >
                                                    <i className="fas fa-minus" />
                                                </button>
                                                <div className="form-outline">
                                                    <input
                                                        id="form1"
                                                        min={0}
                                                        name="quantity"
                                                        defaultValue={1}
                                                        type="number"
                                                        className="form-control"
                                                    />
                                                    {/*                                        <label class="form-label" for="form1">Quantity</label>*/}
                                                </div>
                                                <button
                                                    className="btn btn-primary px-3 ms-2"
                                                    onClick="this.parentNode.querySelector('input[type=number]').stepUp()"
                                                >
                                                    <i className="fas fa-plus" />
                                                </button>
                                            </div>
                                            {/* Quantity */}
                                            {/* Price */}
                                            <p className="text-start text-md-center">
                                                <strong>90.000</strong>
                                            </p>
                                            {/* Price */}
                                        </div>
                                    </div>
                                    {/* Single item */}
                                    <hr className="my-4" />
                                    {/* Single item */}
                                    <div className="row">
                                        <div className="col-lg-3 col-md-12 mb-4 mb-lg-0">
                                            {/* Image */}
                                            <div
                                                className="bg-image hover-overlay hover-zoom ripple rounded"
                                                data-mdb-ripple-color="light"
                                            >
                                                <img
                                                    src="https://down-vn.img.susercontent.com/file/cc300da7ad4e4951ae168a9d3551ffe3"
                                                    className="w-100"
                                                    alt="can-cau-tay"
                                                />
                                                <a href="/product-detail">
                                                    <div
                                                        className="mask"
                                                        style={{ backgroundColor: "rgba(251, 251, 251, 0.2)" }}
                                                    />
                                                </a>
                                            </div>
                                            {/* Image */}
                                        </div>
                                        <div className="col-lg-5 col-md-6 mb-4 mb-lg-0">
                                            {/* Data */}
                                            <p>
                                                <strong>Cần câu tay SHIMANO</strong>
                                            </p>
                                            <p>Màu sắc: Đen</p>
                                            <p>Kích thước: 3M6</p>
                                            <button
                                                type="button"
                                                className="btn btn-primary btn-sm me-1 mb-2"
                                                data-mdb-toggle="tooltip"
                                                title="Remove item"
                                            >
                                                <i className="fas fa-trash" />
                                            </button>
                                            <button
                                                type="button"
                                                className="btn btn-danger btn-sm mb-2"
                                                data-mdb-toggle="tooltip"
                                                title="Move to the wish list"
                                            >
                                                <i className="fas fa-heart" />
                                            </button>
                                            {/* Data */}
                                        </div>
                                        <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
                                            {/* Quantity */}
                                            <div className="d-flex mb-4" style={{ maxWidth: 300 }}>
                                                <button
                                                    className="btn btn-primary px-3 me-2"
                                                    onClick="this.parentNode.querySelector('input[type=number]').stepDown()"
                                                >
                                                    <i className="fas fa-minus" />
                                                </button>
                                                <div className="form-outline">
                                                    <input
                                                        id="form1"
                                                        min={0}
                                                        name="quantity"
                                                        defaultValue={1}
                                                        type="number"
                                                        className="form-control"
                                                    />
                                                    {/*                                        <label class="form-label" for="form1">Quantity</label>*/}
                                                </div>
                                                <button
                                                    className="btn btn-primary px-3 ms-2"
                                                    onClick="this.parentNode.querySelector('input[type=number]').stepUp()"
                                                >
                                                    <i className="fas fa-plus" />
                                                </button>
                                            </div>
                                            {/* Quantity */}
                                            {/* Price */}
                                            <p className="text-start text-md-center">
                                                <strong>130.000</strong>
                                            </p>
                                            {/* Price */}
                                        </div>
                                    </div>
                                    {/* Single item */}
                                </div>
                            </div>
                            <div className="card mb-4">
                                <div className="card-body">
                                    <p>
                                        <strong>Dự kiến giao hàng</strong>
                                    </p>
                                    <p className="mb-0">08/01/2023 - 12/01/2023</p>
                                </div>
                            </div>
                            <div className="card mb-4 mb-lg-0">
                                <div className="card-body">
                                    <p>
                                        <strong>Chúng tôi chỉ chấp nhận</strong>
                                    </p>
                                    <img
                                        className="me-2"
                                        width="45px"
                                        src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/visa.svg"
                                        alt="Visa"
                                    />
                                    <img
                                        className="me-2"
                                        width="45px"
                                        src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/amex.svg"
                                        alt="American Express"
                                    />
                                    <img
                                        className="me-2"
                                        width="45px"
                                        src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/mastercard.svg"
                                        alt="Mastercard"
                                    />
                                    <img
                                        className="me-2"
                                        width="45px"
                                        src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce/includes/gateways/paypal/assets/images/paypal.png"
                                        alt="PayPal acceptance mark"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card mb-4">
                                <div className="card-header py-3">
                                    <h5 className="mb-0">Thanh toán</h5>
                                </div>
                                <div className="card-body">
                                    <ul className="list-group list-group-flush">
                                        <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                                            Sản phẩm
                                            <span>220.000</span>
                                        </li>
                                        <li className="list-group-item d-flex justify-content-between align-items-center px-0">
                                            Phí vận chuyển
                                            <span>20.000</span>
                                        </li>
                                        <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                                            <div>
                                                <strong>Tổng tiền</strong>
                                                <strong>
                                                    <p className="mb-0">(Bao gồm thuế GTGT)</p>
                                                </strong>
                                            </div>
                                            <span>
                  <strong>240.000</strong>
                </span>
                                        </li>
                                    </ul>
                                    <button type="button" className="btn btn-primary btn-lg btn-block">
                                        Đặt hàng
                                    </button>
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