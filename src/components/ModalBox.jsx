import { useState } from "react";

const ModalBox = (props) => {
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
              <p className="d-block fs-6 mb-0">{props.title}</p>
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
              <p>{props.hostname}</p>
            </div>
            <div className="d-flex justify-content-between">
              <p>NS (name server):</p>
              <p>{props.servername}</p>
            </div>
            <div className="d-flex justify-content-between">
              <p>Username:</p>
              <p>{props.username}</p>
            </div>
            <div className="d-flex justify-content-between">
              <p>Password:</p>
              <p>{props.password}</p>
            </div>
            <div className="d-flex justify-content-between">
              <p>Created:</p>
              <p>{props.createDate}</p>
            </div>
            <div className="d-flex justify-content-between">
              <p>Expired:</p>
              <p>{props.expiredDate}</p>
            </div>
            <div className="d-flex justify-content-between">
              <p>SSH Port:</p>
              <p>{props.sshport}</p>
            </div>
            <div className="d-flex justify-content-between">
              <p>UDPGW Port:</p>
              <p>{props.udpgwport}</p>
            </div>
          </div>
          <div class="modal-footer justify-content-center">
            <h4>DNS Public Key</h4>
            <div className="small text-wrap w-100 p-2">{props.publicKey}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalBox;
