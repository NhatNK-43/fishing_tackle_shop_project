import {Header} from "./Header";
import {Footer} from "./Footer";
import {useParams} from "react-router-dom";
import * as productService from "../services/productService";
import * as cartService from "../services/cartService";
import {useEffect, useState} from "react";
import {formatCurrency, getPayload} from "../services/utils/util";
import {toast} from "react-toastify";

export function ProductDetail() {
    const payload = getPayload();
    const [product, setProduct] = useState({});
    const [imageSet, setImageSet] = useState([]);
    const [priceSet, setPriceSet] = useState([]);
    const [sizeNameSet, setSizeNameSet] = useState([]);
    const [sizeDetailIdSet, setSizeDetailIdSet] = useState([]);
    const [price, setPrice] = useState("0");
    const [indexImage, setIndexImage] = useState(0);
    const [indexSize, setIndexSize] = useState(0);
    const [indexImageShow, setIndexImageShow] = useState(0);
    const [quantity, setQuantity] = useState(1);
    const [sizeDetailId, setSizeDetailId] = useState(0);
    const {productCode} = useParams();
    const imgArray = [0, 1, 2, 3, 4, 5]

    useEffect(() => {
        getProductByProductCode();
    }, []);

    const getProductByProductCode = async () => {
        const data = await productService.getProductByProductCode(productCode);
        if (!data) {
            setProduct({});
        } else {
            setProduct(data);
            setImageSet(data.imageSet.split(","));
            setPriceSet(data.priceSet.split(","));
            setSizeNameSet(data.sizeNameSet.split(","));
            setSizeDetailIdSet(data.sizeDetailIdSet.split(","));
            setPrice(data.priceSet.split(",")[0]);
            setSizeDetailId(data.sizeDetailIdSet.split(",")[0]);
        }
    }

    const addToCart = async () => {
        const cart = {
            quantity: quantity,
            accountId: payload.id,
            sizeDetailId: +sizeDetailId,
        }
        const res = await cartService.addToCart(cart);
        if (res.status === 200) {
            toast.success("Sản phẩm đã được thêm vào giỏ hàng");
        } else {
            toast.error("Thêm vào giỏ hàng thất bại")
        }
    }

    const handleImageArray = imgArray.map(item => {
        return item + indexImage;
    })

    const handlePrev = () => {
        if (indexImage > 0) {
            setIndexImage(indexImage - 1)
        } else {
            setIndexImage(imageSet.length - 1)
        }
    }

    const handleNext = () => {
        if (indexImage < imageSet.length - 1) {
            setIndexImage(indexImage + 1)
        } else {
            setIndexImage(0)
        }
    }

    const handlePrevSlide = () => {
        if (indexImageShow > 0) {
            setIndexImageShow(indexImageShow - 1)
        } else {
            setIndexImageShow(imageSet.length - 1)
        }
    }

    const handleNextSlide = () => {
        if (indexImageShow < imageSet.length - 1) {
            setIndexImageShow(indexImageShow + 1)
        } else {
            setIndexImageShow(0)
        }
    }

    return (
        <>
            <Header/>
            <section className="py-5">
                <div className="container-xxl">
                    <div className="row gx-5">
                        <aside className="col-lg-6">
                            <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="false">
                                <div className="carousel-inner">
                                    {
                                        imageSet.map((item, index) => (
                                            <div
                                                className={`carousel-item ${index === indexImageShow ? "active" : ""}`}>
                                                <img src={item} className="d-block w-100" alt="..."/>
                                            </div>
                                        ))
                                    }
                                </div>
                                <button className="carousel-control-prev" type="button"
                                    // data-bs-target="#carouselExampleIndicators" data-bs-slide="prev"
                                        onClick={handlePrevSlide}
                                >
                                    <i className="bi bi-chevron-left text-dark fs-3 bg-white" aria-hidden="true"></i>
                                    <span className="visually-hidden">Previous</span>
                                </button>
                                <button className="carousel-control-next" type="button"
                                    // data-bs-target="#carouselExampleIndicators" data-bs-slide="next"
                                        onClick={handleNextSlide}
                                >
                                    <i className="bi bi-chevron-right text-dark fs-3 bg-white" aria-hidden="true"></i>
                                    <span className="visually-hidden">Next</span>
                                </button>
                            </div>
                            <div id="carouselIndicators" className="carousel mt-3">
                                <div className="row active">
                                    {
                                        handleImageArray.map((item) => {
                                            item = item % imageSet.length;
                                            return (
                                                <div className="col-2 btn-carouselIndicators">
                                                    <button type="button"
                                                        // data-bs-target="#carouselExampleIndicators"
                                                        //     data-bs-slide-to={item}
                                                            className={`btn w-100 rounded-0 p-0 ${item === indexImageShow ?
                                                                "border border-warning border-4 " : "border-dark"}`}
                                                            aria-current={item === indexImageShow ? "true" : "false"}
                                                            aria-label={`Slide ${item + 1}`}
                                                            onClick={() => setIndexImageShow(item)}
                                                    >
                                                        <img src={imageSet[item]} className="w-100" alt="..."/>
                                                    </button>
                                                </div>
                                            )
                                        })
                                    }
                                </div>

                                <button className="carousel-control-prev border-dark bg-white m-0" type="button"
                                        onClick={handlePrev}
                                >
                                    <i className="bi bi-chevron-left text-dark fs-3" aria-hidden="true"></i>
                                    <span className="visually-hidden">Previous</span>
                                </button>

                                <button className="carousel-control-next bg-white m-0" type="button"
                                        onClick={handleNext}
                                >
                                    <i className="bi bi-chevron-right text-dark fs-3" aria-hidden="true"></i>
                                    <span className="visually-hidden">Next</span>
                                </button>
                            </div>
                        </aside>
                        <main id="main" className="col-lg-6">
                            <div className="ps-lg-3">
                                <h4 className="title text-dark">
                                    {product.name}
                                </h4>
                                <div className="d-flex flex-row my-3">
                                    <div className="text-warning mb-1 me-2">
                                        <i className="fa fa-star"/>
                                        <i className="fa fa-star"/>
                                        <i className="fa fa-star"/>
                                        <i className="fa fa-star"/>
                                        <i className="fas fa-star-half-alt"/>
                                        <span className="ms-1">4.5</span>
                                    </div>
                                    <span className="text-muted">
                                        <i className="fas fa-shopping-basket fa-sm mx-1"/>154 đơn đặt hàng
                                    </span>
                                    <span className="text-success ms-2">Còn hàng</span>
                                </div>
                                <div className="mb-3">
                                    <span className="h5">
                                        {formatCurrency(price)}
                                    </span>
                                    {/*<span className="text-muted">/cần</span>*/}
                                </div>
                                <p>
                                    {product.description}
                                </p>
                                <div className="row">
                                    <dt className="col-3">Loại:</dt>
                                    <dd className="col-9">{product.productTypeName}</dd>
                                    <dt className="col-3">Hãng:</dt>
                                    <dd className="col-9">{product.manufacturer}</dd>
                                </div>
                                <hr/>
                                <label className="mb-2">Kích thước</label>
                                <div className="row">
                                    {
                                        sizeNameSet.map((item, index) => (
                                            <div className="me-3 col-1 d-flex align-items-center">
                                                <button className={`rounded-0 btn btn-light hover 
                                            ${index === indexSize ? "border border-danger border-3" : "border-dark"}`}
                                                        type="button"
                                                        onClick={() => {
                                                            setPrice(priceSet[index]);
                                                            setIndexSize(index);
                                                            setSizeDetailId(sizeDetailIdSet[index]);
                                                        }}
                                                >{item}</button>
                                            </div>
                                        ))
                                    }
                                </div>
                                <hr/>
                                <div className="col-md-4 col-6 mb-3">
                                    <label className="mb-2 d-block">Số lượng</label>
                                    <div className="input-group mb-3">
                                        <button type="button" className="btn btn-outline-secondary rounded-0"
                                                disabled={quantity < 2}
                                                onClick={() => {
                                                    setQuantity(quantity - 1);
                                                }}
                                        ><i
                                            className="bi bi-dash"/></button>
                                        <input type="text"
                                               className="text-center form-control border-secondary rounded-0"
                                               value={quantity}
                                               onChange={(event) => setQuantity(parseInt(event.target.value))}
                                        />
                                        <button type="button" className="btn btn-outline-secondary rounded-0"
                                                onClick={() => {
                                                    setQuantity(quantity + 1)
                                                }}
                                        >
                                            <i className="bi bi-plus"/>
                                        </button>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-6">
                                        <button className="btn btn-warning rounded-0 w-100">
                                            Mua ngay{" "}
                                        </button>
                                    </div>
                                    <div className="col-6">
                                        <button className="btn btn-primary rounded-0 w-100"
                                                onClick={addToCart}
                                        >
                                            <i className="me-1 bi bi-cart"/> Thêm vào giỏ hàng{" "}
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </main>
                    </div>
                </div>
            </section>
            <Footer/>
        </>
    )
}