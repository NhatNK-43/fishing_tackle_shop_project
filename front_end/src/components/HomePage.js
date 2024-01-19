import {Header} from "./Header";
import {Footer} from "./Footer";
import {Carousel} from "./Carousel";
import {useEffect, useState} from "react";
import * as productService from "../services/productService";
import RangeSlider from "./RangeSlider";
import {Link} from "react-router-dom";

export function HomePage() {
    const [products, setProducts] = useState([]);
    const [productTypes, setProductTypes] = useState([]);
    const [productTypeName, setProductTypeName] = useState("");
    const [keyword, setKeyword] = useState("");
    const [gtePrice, setGtePrice] = useState("0");
    const [ltePrice, setLtePrice] = useState("90000000");
    const [page, setPage] = useState(0);
    const [totalPages, setTotalPages] = useState(0);
    const price = 5000000;

    console.log(products)
    useEffect(() => {
        getListProductType();
    }, []);

    useEffect(() => {
        getPageProduct();
    }, [page, productTypeName, gtePrice, ltePrice, keyword]);


    const getListProductType = async () => {
        try {
            const res = await productService.getListProductType();
            setProductTypes(res.data)
        } catch (e) {
            setProductTypes([]);
        }
    }

    const getPageProduct = async () => {
        try {
            const res = await productService.getPageProduct(page, productTypeName, gtePrice, ltePrice, keyword)
            setProducts(res.data.content);
        } catch (e) {
            setProducts([]);
            setTotalPages(0);
            setPage(0);
        }
    }


    const handleImageSet = (imageSet) => {
        let arrayImage = [];
        if (products.length > 0) {
            arrayImage = imageSet.split(",");
        }
        return arrayImage;
    }

    return (
        <>
            <Header/>
            <div className="container py-5">
                <div className="d-flex">
                    <input className="form-control form-control-sm rounded-0 border-dark"
                           placeholder="Tìm kiếm..."
                           value={keyword} type="text"
                           onChange={event => setKeyword(event.target.value)}
                    />
                    <select className="rounded-0 ms-3"
                            onChange={e => setProductTypeName(e.target.value)}>
                        <option value={""}>Loại sản phẩm</option>
                        {
                            productTypes.map(pt => (
                                <option value={pt.name} key={pt.id}>
                                    {pt.name}
                                </option>
                            ))
                        }
                    </select>

                    <button className="btn btn-outline-dark btn-sm rounded-0 border-1 ms-3"><i
                        className="bi bi-search"></i>
                    </button>
                </div>
            </div>
            <Carousel/>
            <section className="" style={{backgroundColor: "#eee"}}>
                <div className="text-center container py-5">
                    <h4 className="mt-4 mb-5">
                        <strong>Sản phẩm mới nhất</strong>
                    </h4>
                    <div className="row">
                        {
                            products.map(p => (
                                <div className="col-lg-3 col-md-6 col-sm-6 mb-4" key={p.productCode}>

                                    <div className="card">
                                        <div
                                            className="bg-image hover-zoom ripple"
                                            data-mdb-ripple-color="light"
                                        >

                                            <Link to={`/product-detail/${p.productCode}`}>
                                                {/* eslint-disable-next-line jsx-a11y/img-redundant-alt */}
                                                <img
                                                    src={handleImageSet(p.imageSet)[0]}
                                                    className="w-100"
                                                    alt={"product-image"}/>
                                                {/*<div className="mask">*/}
                                                {/*    <div className="d-flex justify-content-start align-items-end h-100">*/}
                                                {/*        <h5>*/}
                                                {/*            <span className="badge bg-primary ms-2">New</span>*/}
                                                {/*            /!*<span className="badge bg-success ms-2">Eco</span>*!/*/}
                                                {/*            <span className="badge bg-danger ms-2">-10%</span>*/}
                                                {/*        </h5>*/}
                                                {/*    </div>*/}
                                                {/*</div>*/}
                                                {/*<div className="hover-overlay">*/}
                                                {/*    <div*/}
                                                {/*        className="mask"*/}
                                                {/*        style={{backgroundColor: "rgba(251, 251, 251, 0.15)"}}*/}
                                                {/*    />*/}
                                                {/*</div>*/}
                                            </Link>
                                        </div>
                                        <div className="card-body">
                                            <Link to={`/product-detail/${p.productCode}`} className="text-reset product-name">
                                                <h5 className="card-title mb-3">{p.name}</h5>
                                            </Link>
                                            <a href="" className="text-reset">
                                                <p>{p.manufacturer}</p>
                                            </a>
                                            <h6 className="mb-3">{parseFloat(p.priceSet.split(",")[0]).toLocaleString("vi-VN", {
                                                style: 'currency',
                                                currency: 'VND',
                                            })}</h6>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </section>
            <Footer/>
        </>
    )
}