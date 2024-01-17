import {Header} from "./Header";
import {Footer} from "./Footer";
import {useParams} from "react-router-dom";
import * as productService from "../services/productService";
import {useEffect, useState} from "react";
import {set} from "mdb-ui-kit/src/js/mdb/perfect-scrollbar/lib/css";

export function ProductDetail() {
    const [product, setProduct] = useState({});
    const [imageSet, setImageSet] = useState([]);
    const [priceSet, setPriceSet] = useState([]);
    const [sizeNameSet, setSizeNameSet] = useState([]);
    const [price, setPrice] = useState("0");
    const [image, setImage] = useState("")
    const [indexImage, setIndexImage] = useState(0);
    const {productCode} = useParams();
    const imgArray = [0, 1, 2, 3, 4]

    useEffect(() => {
        getProductByProductCode();
    }, []);

    console.log(indexImage);
    const getProductByProductCode = async () => {
        try {
            const res = await productService.getProductByProductCode(productCode);
            setProduct(res.data);
            setImageSet(res.data.imageSet.split(","));
            setPriceSet(res.data.priceSet.split(","));
            setSizeNameSet(res.data.sizeNameSet.split(","));
            setPrice(res.data.priceSet.split(",")[0]);
            setImage(res.data.imageSet.split(",")[0]);
        } catch (e) {

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


    return (
        <>
            <Header/>
            <section className="py-5">
                <div className="container">
                    <div className="row gx-5">
                        <aside className="col-lg-6">
                            <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="true">

                                <div className="carousel-inner">
                                    {
                                        imageSet.map((item) => (
                                            <div className={`carousel-item ${item === image ? "active" : ""}`}>
                                                <img src={item} className="d-block w-100" alt="..."/>
                                            </div>
                                        ))
                                    }
                                </div>
                                <button className="carousel-control-prev" type="button"
                                        data-bs-target="#carouselExampleIndicators" data-bs-slide="prev"
                                        onClick={handlePrev}
                                >
                                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">Previous</span>
                                </button>
                                <button className="carousel-control-next" type="button"
                                        data-bs-target="#carouselExampleIndicators" data-bs-slide="next"
                                        onClick={handleNext}
                                >
                                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">Next</span>
                                </button>
                            </div>
                            <div id="carouselIndicators" className="carousel slide" data-bs-ride="true">
                                <div className="carousel-inner">
                                    <div className={`d-flex carousel-item active justify-content-between`}>
                                        {
                                            handleImageArray.map((item, index) => {
                                                item = item % imageSet.length;
                                                return (
                                                    <button type="button" data-bs-target="#carouselExampleIndicators"
                                                            data-bs-slide-to={item}
                                                            className={`btn btn-outline-danger mx-2 p-2 ${item === indexImage ? "active" : ""}`}
                                                        // aria-current={item===image?"true":""}
                                                            aria-label={`Slide ${item + 1}`}
                                                            onClick={() => setIndexImage(item)}
                                                    >
                                                        <img src={imageSet[item]} className="w-100" alt="..."/>
                                                    </button>
                                                )
                                            })
                                        }
                                    </div>
                                </div>

                                <button className="carousel-control-prev" type="button"
                                        onClick={handlePrev}
                                >
                                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">Previous</span>
                                </button>

                                <button className="carousel-control-next" type="button"
                                        onClick={handleNext}
                                >
                                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">Next</span>
                                </button>
                            </div>
                            {/*<div className="d-flex justify-content-between mt-3">*/}
                            {/*    {*/}
                            {/*        imageSet.map((item, index) => (*/}
                            {/*            <button type="button" data-bs-target="#carouselExampleIndicators"*/}
                            {/*                    data-bs-slide-to={index}*/}
                            {/*                    className={item === indexImage ? "active" : ""}*/}
                            {/*                // aria-current={item===image?"true":""}*/}
                            {/*                    aria-label={`Slide ${index + 1}`}>*/}
                            {/*                <img src={item} className="d-block w-100" alt="..."/>*/}
                            {/*            </button>*/}
                            {/*        ))*/}
                            {/*    }*/}
                            {/*</div>*/}
                        </aside>
                        <main className="col-lg-6">
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
              <i className="fas fa-shopping-basket fa-sm mx-1"/>
              154 đơn đặt hàng
            </span>
                                    <span className="text-success ms-2">Còn hàng</span>
                                </div>
                                <div className="mb-3">
                                    <span className="h5">
                                        {parseFloat(price).toLocaleString("vi-VN", {
                                            style: 'currency',
                                            currency: 'VND',
                                        })}
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
                                {/*<div className="row mb-4">*/}
                                {/*    <div className="col-md-12">*/}
                                <label className="mb-2">Kích thước</label>
                                {/*<select*/}
                                {/*    className="form-select border border-secondary"*/}
                                {/*    style={{height: 35}}*/}
                                {/*    onChange={event => setPrice(priceSet[getIndex(event.target.value)])}*/}
                                {/*>*/}
                                {/*    {*/}
                                {/*        sizeNameSet.map((item, index) => (*/}
                                {/*            <option value={item}>{item}</option>*/}
                                {/*        ))*/}
                                {/*    }*/}
                                {/*</select>*/}
                                <div className="d-flex">
                                    {
                                        sizeNameSet.map((item, index) => (
                                            <button className="btn btn-sm btn-outline-secondary me-2"
                                                    type="button"
                                                    onClick={() => setPrice(priceSet[index])}
                                            >{item}</button>
                                        ))
                                    }
                                </div>

                                {/*</div>*/}
                                {/* col.// */}
                                <div className="col-md-4 col-6 mb-3">
                                    <label className="mb-2 d-block">Số lượng</label>
                                    <div className="input-group mb-3" style={{width: 170}}>
                                        <button
                                            className="btn btn-white border border-secondary px-3"
                                            type="button"
                                            id="button-addon1"
                                            data-mdb-ripple-color="dark"
                                        >
                                            <i className="fas fa-minus"/>
                                        </button>
                                        <input
                                            type="text"
                                            className="form-control text-center border border-secondary"
                                            placeholder={1}
                                            aria-label="Example text with button addon"
                                            aria-describedby="button-addon1"
                                        />
                                        <button
                                            className="btn btn-white border border-secondary px-3"
                                            type="button"
                                            id="button-addon2"
                                            data-mdb-ripple-color="dark"
                                        >
                                            <i className="fas fa-plus"/>
                                        </button>
                                    </div>
                                </div>
                                {/*</div>*/}
                                <a href="#" className="btn btn-primary shadow-0 me-3">
                                    {" "}
                                    <i className="me-1 fa fa-shopping-basket"/> Thêm vào giỏ hàng{" "}
                                </a>
                                <a href="#" className="btn btn-warning shadow-0">
                                    {" "}
                                    Mua ngay{" "}
                                </a>
                            </div>
                        </main>
                    </div>
                </div>
            </section>
            <Footer/>
        </>
    )
}