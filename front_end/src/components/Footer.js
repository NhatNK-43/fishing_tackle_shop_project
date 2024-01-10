export function Footer(){

    return(
        <>
            <footer className="text-center text-lg-start bg-body-tertiary text-muted">
                {/* Section: Social media */}
                <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom container">
                    {/* Left */}
                    <div className="me-5 d-none d-lg-block">
                        <span>Theo dõi chúng tôi trên:</span>
                    </div>
                    {/* Left */}
                    {/* Right */}
                    <div>
                        <a href="" className="me-4 text-reset">
                            <i className="fab fa-facebook-f" />
                        </a>
                        <a href="" className="me-4 text-reset">
                            <i className="fab fa-google" />
                        </a>
                        <a href="" className="me-4 text-reset">
                            <i className="fab fa-instagram" />
                        </a>
                        <a href="" className="me-4 text-reset">
                            <i className="fab fa-youtube" />
                        </a>
                        <a href="" className="me-4 text-reset">
                            <i className="fab fa-tiktok" />
                        </a>
                    </div>
                    {/* Right */}
                </section>
                {/* Section: Social media */}
                {/* Section: Links  */}
                <section className="">
                    <div className="container text-center text-md-start mt-5">
                        {/* Grid row */}
                        <div className="row mt-3">
                            {/* Grid column */}
                            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                                <a className="navbar-brand mt-2 mt-lg-0" href="#">
                                    <img
                                        src="/logo_fishing_2.png"
                                        height={150}
                                        alt="MDB Logo"
                                        loading="lazy"
                                    />
                                </a>
                            </div>
                            {/* Grid column */}
                            {/* Grid column */}
                            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                                {/* Content */}
                                <h6 className="text-uppercase fw-bold mb-4">
                                    <i className="fas fa-gem me-3" />
                                    JHIN FISHING
                                </h6>
                                <p>
                                    Chúng tôi chuyên cung cấp đồ câu cá chính hãng với giá cả hợp lý. Luôn phục vụ nhiệt tình và chu đáo.
                                    Rất hân hạnh được phục quý khách!
                                </p>
                            </div>
                            {/* Grid column */}
                            {/* Grid column */}
                            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                                {/* Links */}
                                <h6 className="text-uppercase fw-bold mb-4">Sản phẩm</h6>
                                    <a href="#!" className="text-reset">
                                        Cần câu tay
                                    </a>
                                <br/>
                                    <a href="#!" className="text-reset">
                                        Cần câu máy
                                    </a>
                                <br/>
                                    <a href="#!" className="text-reset">
                                        Lưỡi câu
                                    </a>
                                <br/>
                                    <a href="#!" className="text-reset">
                                        Dây câu
                                    </a>
                                <br/>
                            </div>
                            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                                {/* Links */}
                                <h6 className="text-uppercase fw-bold mb-4">Liên hệ</h6>
                                    <i className="fas fa-home me-3" /> 280 Trần Hưng Đạo, Tp. Đà Nẵng<br/>
                                    <i className="fas fa-envelope me-3" />jhinfishing@gamil.com<br/>
                                    <i className="fas fa-phone me-3" /> +(84) 783 495 322<br/>
                                        <img src="/icons8-zalo-50.png" alt="s" className="me-3" style={{width: "18px", height: "20px"}}/> +(84) 783 495 322
                            </div>
                            {/* Grid column */}
                        </div>
                        {/* Grid row */}
                    </div>
                </section>
                {/* Section: Links  */}
                {/* Copyright */}
                <div
                    className="text-center p-4"
                    style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
                >
                    © 2024 Bản quyền thuộc về:{" "}
                    <a className="text-reset fw-bold" href="/home">
                        Jhin Fishing
                    </a>
                </div>
                {/* Copyright */}
            </footer>
        </>
    )
}