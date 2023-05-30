import { useState } from "react";

const ModalBox = () => {
  return (
    <div
      class="modal fade"
      id="exampleModal"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered modal-sm ">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-4 text-start" id="exampleModalLabel">
              Create New Account
              <p className="d-block fs-6 mb-0">SSH SlowDNS SGP 1</p>
            </h1>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <div className="d-flex justify-content-between">
              <p>Hostname:</p>
              <p>sgp1.slowdns.me</p>
            </div>
            <div className="d-flex justify-content-between">
              <p>NS (name server):</p>
              <p>ns-sgp1.slowdns.me</p>
            </div>
            <div className="d-flex justify-content-between">
              <p>Username:</p>
              <p>sshocean-hoo</p>
            </div>
            <div className="d-flex justify-content-between">
              <p>Password:</p>
              <p>xywyz8qangaqizveh</p>
            </div>
            <div className="d-flex justify-content-between">
              <p>Created:</p>
              <p>21 May 2023</p>
            </div>
            <div className="d-flex justify-content-between">
              <p>Expired:</p>
              <p>23 May 2023</p>
            </div>
            <div className="d-flex justify-content-between">
              <p>SSH Port:</p>
              <p>22</p>
            </div>
            <div className="d-flex justify-content-between">
              <p>UDPGW Port:</p>
              <p>7200, 7300</p>
            </div>
          </div>
          <div class="modal-footer justify-content-center">
            <h4>DNS Public Key</h4>
            <div className="small text-wrap w-100 p-2">
              b4214f224903b97e34d5cb58c6e1f94d8509e80c0ef34c78cf4f8ec949fb861c
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalBox;
