import React from "react";
import Page_card from "../components/page_card";
import "./Outline.css";
import Footer from "../components/Footer";

const Outline = () => {
  return (
    <>
      <div className="container">
        <div className="row outline-align">
          <div className="text-white text-center my-4">
            <h2 className="display-6 fw-semibold">Outline Premium VPN</h2>
            <p className="fs-6">ချိတ်ဆက်မှု ၂ဆပိုမြန်ဆန် Outline Premium VPN</p>

            <div className="container">
              <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 my-lg-5 my-md-3">
                <div className="col px-0 d-flex d-md-block d-lg-block justify-content-center">
                  <div
                    class="card text-center text-black"
                    style="width: 18rem;"
                  >
                    <div class="card-header bg-first fs-5">
                      Private Ouline Key
                    </div>
                    <div class="card-body">
                      <h5 class="card-title">All Sim + All Wifi</h5>
                      <div className="d-flex justify-content-between px-3 mt-3">
                        <p>50 Gb</p>
                        <p>
                          1500 / <small>mmk</small>
                        </p>
                      </div>
                      <hr className="my-0" />
                      <div className="d-flex justify-content-between px-3">
                        <p>100 Gb</p>
                        <p>
                          2500 / <small>mmk</small>
                        </p>
                      </div>
                      <hr className="my-0" />
                      <div className="d-flex justify-content-between px-3">
                        <p>Unlimited Gb</p>
                        <p>
                          3500 / <small>mmk</small>
                        </p>
                      </div>
                      <p class="card-text mb-4">
                        တန်ပြီးရင်း တန် . . . မြန်ပြီးရင်း မြန် . . .
                      </p>
                      <a
                        href="https://t.me/qitotech"
                        class="btn btn-warning rounded rounded-pill"
                        target="_blank"
                      >
                        Buy Now
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col px-0 d-flex d-md-block d-lg-block justify-content-center">
                  <div
                    class="card text-center bg-success z-3 mx-auto mx-sm-0 mx-lg-0"
                    style="width: 18rem;"
                  >
                    <div class="card-header fs-5 ">TWS Ouline Key</div>
                    <div class="card-body">
                      <h5 class="card-title py-2 fs-3 bg-gradient-self">
                        US & Singapore
                      </h5>
                      <div className="d-flex justify-content-between px-3 mt-1 fs-5">
                        <p>50 Gb</p>
                        <p>
                          2000 / <small>mmk</small>
                        </p>
                      </div>
                      <hr className="my-0" />
                      <div className="d-flex justify-content-between px-3 mb-2 fs-5">
                        <p>100 Gb</p>
                        <p>
                          3000 / <small>mmk</small>
                        </p>
                      </div>
                      <p class="card-text pb-3 fs-3">
                        လိုင်းဆွဲအားမြန်ဆန်မှု သုံးဆရှယ်
                      </p>
                      <a
                        href="https://t.me/qitotech"
                        class="btn btn-warning rounded rounded-pill"
                        target="_blank"
                      >
                        Buy Now
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col px-0 d-flex d-md-block d-lg-block justify-content-center mb-5">
                  <div
                    class="card text-center text-black mx-auto mx-sm-0 mx-lg-0"
                    style="width: 18rem;"
                  >
                    <div class="card-header bg-first fs-5">
                      Private Ouline Key
                    </div>
                    <div class="card-body">
                      <h5 class="card-title">GCP Outline Key</h5>
                      <div className="d-flex justify-content-between px-3 mt-3">
                        <p>20 Gb</p>
                        <p>
                          2000 / <small>mmk</small>
                        </p>
                      </div>
                      <hr className="my-0" />
                      <div className="d-flex justify-content-between px-3">
                        <p>40 Gb</p>
                        <p>
                          4000 / <small>mmk</small>
                        </p>
                      </div>
                      <hr className="my-0" />
                      <div className="d-flex justify-content-between px-3">
                        <p>100 Gb</p>
                        <p>
                          9000 / <small>mmk</small>
                        </p>
                      </div>
                      <p class="card-text mb-4">Business လုပ်ငန်းသီးသန့် VIP</p>
                      <a
                        href="https://t.me/qitotech"
                        class="btn btn-warning rounded rounded-pill"
                        target="_blank"
                      >
                        Buy Now
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-100 position-fixed bottom-0">
        <Footer />
      </div>
    </>
  );
};

export default Outline;
