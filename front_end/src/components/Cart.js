import {Footer} from "./Footer";
import {Header} from "./Header";
import {useEffect, useState} from "react";
import * as cartService from "../services/cartService";
import * as util from "../services/utils/util";
import {formatCurrency} from "../services/utils/util";
import {Link} from "react-router-dom";

export function Cart() {
    const payload = util.getPayload();
    const [carts, setCarts] = useState();
    const [idDelete, setIdDelete] = useState();
    const [quantityUpdate, setQuantityUpdate] = useState(0);

    useEffect(() => {
        getCart();
    }, []);
    const getCart = async () => {
        try {
            const res = await cartService.getCart(payload.sub);
            setCarts(res.data);
        } catch (e) {
            setCarts([]);
        }
    }

    const updateProductInCart = async (cart) => {
        try {
            await cartService.updateProductInCart(cart);
            await getCart();
        } catch (e) {
            setCarts([]);
        }
    }

    const handleDelete = async (id) => {
        const res = await cartService.deleteProductInCart(id)
        if (res.status===200){
            await getCart();
        }
    }

    const handleCartDto = (cart) => {
        return {
            id: cart.cartId,
            quantity: cart.quantity,
            accountId: cart.accountId,
            sizeDetailId: cart.sizeDetailId
        }
    }
    const handleQuantityTrash = async (item) => {
        await updateProductInCart({
            ...handleCartDto(item),
            quantity: item.quantity - 1
        });
    }

    const handleQuantityPlus = async (item) => {
        await updateProductInCart(
            {
                ...handleCartDto(item),
                quantity: item.quantity + 1
            }
        );
    }

    if (!carts) {
        return null;
    }

    const handleTotal = carts.reduce((sum, item) => {
        return sum + item.quantity * item.price * (1 - item.promotion)
    }, 0);

    return (
        <>
            <Header/>
            {/*<section className="h-100 gradient-custom">*/}
            {/*    <div className="container py-5">*/}
            {/*        <div className="row d-flex justify-content-center my-4">*/}
            {/*            <div className="col-md-8">*/}
            {/*                <div className="card mb-4">*/}
            {/*                    <div className="card-header py-3">*/}
            {/*                        <h5 className="mb-0">Giỏ hàng - 2 sản phẩm</h5>*/}
            {/*                    </div>*/}
            {/*                    <div className="card-body">*/}
            {/*                        /!* Single item *!/*/}
            {/*                        <div className="row">*/}
            {/*                            <div className="col-lg-3 col-md-12 mb-4 mb-lg-0">*/}
            {/*                                /!* Image *!/*/}
            {/*                                <div*/}
            {/*                                    className="bg-image hover-overlay hover-zoom ripple rounded"*/}
            {/*                                    data-mdb-ripple-color="light"*/}
            {/*                                >*/}
            {/*                                    <img*/}
            {/*                                        src="https://down-vn.img.susercontent.com/file/cc300da7ad4e4951ae168a9d3551ffe3"*/}
            {/*                                        className="w-100"*/}
            {/*                                        alt="can-cau-tay"*/}
            {/*                                    />*/}
            {/*                                    <a href="/product-detail">*/}
            {/*                                        <div*/}
            {/*                                            className="mask"*/}
            {/*                                            style={{ backgroundColor: "rgba(251, 251, 251, 0.2)" }}*/}
            {/*                                        />*/}
            {/*                                    </a>*/}
            {/*                                </div>*/}
            {/*                                /!* Image *!/*/}
            {/*                            </div>*/}
            {/*                            <div className="col-lg-5 col-md-6 mb-4 mb-lg-0">*/}
            {/*                                /!* Data *!/*/}
            {/*                                <p>*/}
            {/*                                    <strong>Cần câu tay SHIMANO</strong>*/}
            {/*                                </p>*/}
            {/*                                <p>Màu sắc: Đen</p>*/}
            {/*                                <p>Kích thước: 2M7</p>*/}
            {/*                                <button*/}
            {/*                                    type="button"*/}
            {/*                                    className="btn btn-primary btn-sm me-1 mb-2"*/}
            {/*                                    data-mdb-toggle="tooltip"*/}
            {/*                                    title="Remove item"*/}
            {/*                                >*/}
            {/*                                    <i className="fas fa-trash" />*/}
            {/*                                </button>*/}
            {/*                                <button*/}
            {/*                                    type="button"*/}
            {/*                                    className="btn btn-danger btn-sm mb-2"*/}
            {/*                                    data-mdb-toggle="tooltip"*/}
            {/*                                    title="Move to the wish list"*/}
            {/*                                >*/}
            {/*                                    <i className="fas fa-heart" />*/}
            {/*                                </button>*/}
            {/*                                /!* Data *!/*/}
            {/*                            </div>*/}
            {/*                            <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">*/}
            {/*                                /!* Quantity *!/*/}
            {/*                                <div className="d-flex mb-4" style={{ maxWidth: 300 }}>*/}
            {/*                                    <button*/}
            {/*                                        className="btn btn-primary px-3 me-2"*/}
            {/*                                        onClick="this.parentNode.querySelector('input[type=number]').stepDown()"*/}
            {/*                                    >*/}
            {/*                                        <i className="fas fa-minus" />*/}
            {/*                                    </button>*/}
            {/*                                    <div className="form-outline">*/}
            {/*                                        <input*/}
            {/*                                            id="form1"*/}
            {/*                                            min={0}*/}
            {/*                                            name="quantity"*/}
            {/*                                            defaultValue={1}*/}
            {/*                                            type="number"*/}
            {/*                                            className="form-control"*/}
            {/*                                        />*/}
            {/*                                        /!*                                        <label class="form-label" for="form1">Quantity</label>*!/*/}
            {/*                                    </div>*/}
            {/*                                    <button*/}
            {/*                                        className="btn btn-primary px-3 ms-2"*/}
            {/*                                        onClick="this.parentNode.querySelector('input[type=number]').stepUp()"*/}
            {/*                                    >*/}
            {/*                                        <i className="fas fa-plus" />*/}
            {/*                                    </button>*/}
            {/*                                </div>*/}
            {/*                                /!* Quantity *!/*/}
            {/*                                /!* Price *!/*/}
            {/*                                <p className="text-start text-md-center">*/}
            {/*                                    <strong>90.000</strong>*/}
            {/*                                </p>*/}
            {/*                                /!* Price *!/*/}
            {/*                            </div>*/}
            {/*                        </div>*/}
            {/*                        /!* Single item *!/*/}
            {/*                        <hr className="my-4" />*/}
            {/*                        /!* Single item *!/*/}
            {/*                        <div className="row">*/}
            {/*                            <div className="col-lg-3 col-md-12 mb-4 mb-lg-0">*/}
            {/*                                /!* Image *!/*/}
            {/*                                <div*/}
            {/*                                    className="bg-image hover-overlay hover-zoom ripple rounded"*/}
            {/*                                    data-mdb-ripple-color="light"*/}
            {/*                                >*/}
            {/*                                    <img*/}
            {/*                                        src="https://down-vn.img.susercontent.com/file/cc300da7ad4e4951ae168a9d3551ffe3"*/}
            {/*                                        className="w-100"*/}
            {/*                                        alt="can-cau-tay"*/}
            {/*                                    />*/}
            {/*                                    <a href="/product-detail">*/}
            {/*                                        <div*/}
            {/*                                            className="mask"*/}
            {/*                                            style={{ backgroundColor: "rgba(251, 251, 251, 0.2)" }}*/}
            {/*                                        />*/}
            {/*                                    </a>*/}
            {/*                                </div>*/}
            {/*                                /!* Image *!/*/}
            {/*                            </div>*/}
            {/*                            <div className="col-lg-5 col-md-6 mb-4 mb-lg-0">*/}
            {/*                                /!* Data *!/*/}
            {/*                                <p>*/}
            {/*                                    <strong>Cần câu tay SHIMANO</strong>*/}
            {/*                                </p>*/}
            {/*                                <p>Màu sắc: Đen</p>*/}
            {/*                                <p>Kích thước: 3M6</p>*/}
            {/*                                <button*/}
            {/*                                    type="button"*/}
            {/*                                    className="btn btn-primary btn-sm me-1 mb-2"*/}
            {/*                                    data-mdb-toggle="tooltip"*/}
            {/*                                    title="Remove item"*/}
            {/*                                >*/}
            {/*                                    <i className="fas fa-trash" />*/}
            {/*                                </button>*/}
            {/*                                <button*/}
            {/*                                    type="button"*/}
            {/*                                    className="btn btn-danger btn-sm mb-2"*/}
            {/*                                    data-mdb-toggle="tooltip"*/}
            {/*                                    title="Move to the wish list"*/}
            {/*                                >*/}
            {/*                                    <i className="fas fa-heart" />*/}
            {/*                                </button>*/}
            {/*                                /!* Data *!/*/}
            {/*                            </div>*/}
            {/*                            <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">*/}
            {/*                                /!* Quantity *!/*/}
            {/*                                <div className="d-flex mb-4" style={{ maxWidth: 300 }}>*/}
            {/*                                    <button*/}
            {/*                                        className="btn btn-primary px-3 me-2"*/}
            {/*                                        onClick="this.parentNode.querySelector('input[type=number]').stepDown()"*/}
            {/*                                    >*/}
            {/*                                        <i className="fas fa-minus" />*/}
            {/*                                    </button>*/}
            {/*                                    <div className="form-outline">*/}
            {/*                                        <input*/}
            {/*                                            id="form1"*/}
            {/*                                            min={0}*/}
            {/*                                            name="quantity"*/}
            {/*                                            defaultValue={1}*/}
            {/*                                            type="number"*/}
            {/*                                            className="form-control"*/}
            {/*                                        />*/}
            {/*                                        /!*                                        <label class="form-label" for="form1">Quantity</label>*!/*/}
            {/*                                    </div>*/}
            {/*                                    <button*/}
            {/*                                        className="btn btn-primary px-3 ms-2"*/}
            {/*                                        onClick="this.parentNode.querySelector('input[type=number]').stepUp()"*/}
            {/*                                    >*/}
            {/*                                        <i className="fas fa-plus" />*/}
            {/*                                    </button>*/}
            {/*                                </div>*/}
            {/*                                /!* Quantity *!/*/}
            {/*                                /!* Price *!/*/}
            {/*                                <p className="text-start text-md-center">*/}
            {/*                                    <strong>130.000</strong>*/}
            {/*                                </p>*/}
            {/*                                /!* Price *!/*/}
            {/*                            </div>*/}
            {/*                        </div>*/}
            {/*                        /!* Single item *!/*/}
            {/*                    </div>*/}
            {/*                </div>*/}
            {/*                <div className="card mb-4">*/}
            {/*                    <div className="card-body">*/}
            {/*                        <p>*/}
            {/*                            <strong>Dự kiến giao hàng</strong>*/}
            {/*                        </p>*/}
            {/*                        <p className="mb-0">08/01/2023 - 12/01/2023</p>*/}
            {/*                    </div>*/}
            {/*                </div>*/}
            {/*                <div className="card mb-4 mb-lg-0">*/}
            {/*                    <div className="card-body">*/}
            {/*                        <p>*/}
            {/*                            <strong>Chúng tôi chỉ chấp nhận</strong>*/}
            {/*                        </p>*/}
            {/*                        <img*/}
            {/*                            className="me-2"*/}
            {/*                            width="45px"*/}
            {/*                            src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/visa.svg"*/}
            {/*                            alt="Visa"*/}
            {/*                        />*/}
            {/*                        <img*/}
            {/*                            className="me-2"*/}
            {/*                            width="45px"*/}
            {/*                            src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/amex.svg"*/}
            {/*                            alt="American Express"*/}
            {/*                        />*/}
            {/*                        <img*/}
            {/*                            className="me-2"*/}
            {/*                            width="45px"*/}
            {/*                            src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/mastercard.svg"*/}
            {/*                            alt="Mastercard"*/}
            {/*                        />*/}
            {/*                        <img*/}
            {/*                            className="me-2"*/}
            {/*                            width="45px"*/}
            {/*                            src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce/includes/gateways/paypal/assets/images/paypal.png"*/}
            {/*                            alt="PayPal acceptance mark"*/}
            {/*                        />*/}
            {/*                    </div>*/}
            {/*                </div>*/}
            {/*            </div>*/}
            {/*            <div className="col-md-4">*/}
            {/*                <div className="card mb-4">*/}
            {/*                    <div className="card-header py-3">*/}
            {/*                        <h5 className="mb-0">Thanh toán</h5>*/}
            {/*                    </div>*/}
            {/*                    <div className="card-body">*/}
            {/*                        <ul className="list-group list-group-flush">*/}
            {/*                            <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">*/}
            {/*                                Sản phẩm*/}
            {/*                                <span>220.000</span>*/}
            {/*                            </li>*/}
            {/*                            <li className="list-group-item d-flex justify-content-between align-items-center px-0">*/}
            {/*                                Phí vận chuyển*/}
            {/*                                <span>20.000</span>*/}
            {/*                            </li>*/}
            {/*                            <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">*/}
            {/*                                <div>*/}
            {/*                                    <strong>Tổng tiền</strong>*/}
            {/*                                    <strong>*/}
            {/*                                        <p className="mb-0">(Bao gồm thuế GTGT)</p>*/}
            {/*                                    </strong>*/}
            {/*                                </div>*/}
            {/*                                <span>*/}
            {/*      <strong>240.000</strong>*/}
            {/*    </span>*/}
            {/*                            </li>*/}
            {/*                        </ul>*/}
            {/*                        <button type="button" className="btn btn-primary btn-lg btn-block">*/}
            {/*                            Đặt hàng*/}
            {/*                        </button>*/}
            {/*                    </div>*/}
            {/*                </div>*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</section>*/}
            <div className="container-xxl" style={{fontSize: "16px"}}>
                <div className="row">
                    <div className="col-lg-12">
                        <div className="shadow d-flex align-items-center mt-3 p-2" style={{height: "50px"}}>
                            <h5 className="text-primary text-center">Giỏ hàng - {carts.length} sản phẩm</h5>
                        </div>
                        <table className="table shadow">
                            <thead className="table-primary">
                            <tr>
                                <th><input type="checkbox" className="form-check-input"/></th>
                                <th scope="col" className="col-4">Sản phẩm</th>
                                <th className="text-center">Phân loại</th>
                                <th className="text-center">Đơn giá</th>
                                <th className="text-center">Số lượng</th>
                                <th className="text-center">Thành tiền</th>
                                <th></th>
                            </tr>
                            </thead>
                            <tbody className="align-text-top">
                            {
                                carts.map((item, index) => (
                                    <tr>
                                        <td><input type="checkbox" className="form-check-input"/></td>
                                        <td>
                                            <div className="row">
                                                <div className="col-3">
                                                    <img src={item.imageSet.split(",")[0]} alt="image-product"
                                                         className="w-100"/>
                                                </div>
                                                <div className="col-9 d-flex align-items-center">
                                                    <Link to={`/product-detail/${item.productCode}`}
                                                          className="product-name text-decoration-underline text-dark">
                                                        {item.name}
                                                    </Link>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="text-center">{item.sizeName}</td>
                                        <td className="text-center">{formatCurrency(item.price)}</td>
                                        <td className="text-center">
                                            <div className="d-flex justify-content-center">
                                                <button className="btn btn-outline-secondary btn-sm rounded-0"
                                                        disabled={quantityUpdate < 0}
                                                        onClick={() => {
                                                            handleQuantityTrash(item)
                                                        }}
                                                ><i
                                                    className="bi bi-dash"/></button>
                                                <div style={{width: "40px"}}>
                                                    <input
                                                        className="text-center form-control form-control-sm rounded-0 border-secondary"
                                                        value={item.quantity}/>
                                                </div>
                                                <button className="btn btn-outline-secondary btn-sm rounded-0"
                                                        onClick={() => {
                                                            handleQuantityPlus(item)
                                                        }}
                                                >
                                                    <i className="bi bi-plus"/></button>
                                            </div>
                                        </td>
                                        <td className="text-center fw-semibold">{formatCurrency(item.price * item.quantity * (1 - item.promotion))}</td>
                                        <td className="text-center">
                                            <button className="btn btn-outline-light" id="icon-trash"
                                                onClick={()=>handleDelete(item.cartId)}
                                            >
                                                <i className="bi bi-trash fs-5 text-danger"/>
                                            </button>
                                        </td>
                                    </tr>
                                ))
                            }
                            </tbody>
                        </table>
                    </div>
                    <div className="col-lg-12">
                        <div className="shadow-2-primary d-flex align-items-center mt-3 p-2" style={{height: "50px"}}>
                            <h5 className="text-primary">Thanh toán</h5>
                        </div>
                        <div className="shadow d-flex justify-content-between p-2 align-items-center">
                            <div>
                                <input type="checkbox" className="form-check-input me-3"/>Chọn tất cả
                            </div>
                            <strong className="">Tổng tạm tính (? sản phẩm)</strong>
                            <div>
                                <span className="text-danger fw-bold me-4">{formatCurrency(handleTotal)}</span>
                                <button className="btn btn-danger rounded-0">Thanh toán</button>
                            </div>
                        </div>
                    </div>
                    {/*<div className="col-lg-3">*/}
                    {/*    <div className="shadow-2-primary d-flex align-items-center mt-3 p-2" style={{height: "50px"}}>*/}
                    {/*        <h5 className="text-primary">Thanh toán</h5>*/}
                    {/*    </div>*/}
                    {/*    <div className="shadow d-flex justify-content-between p-2">*/}
                    {/*        <span className="">Tổng tạm tính</span>*/}
                    {/*        <span className="">{formatCurrency(handleTotal)}</span>*/}
                    {/*    </div>*/}
                    {/*</div>*/}
                </div>
            </div>
            <Footer/>
        </>
    )
}