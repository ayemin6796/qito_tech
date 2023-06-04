import React from "react";
import ModalBox from "./ModalBox";
import Swal from "sweetalert2";
import "../../node_modules/sweetalert2/dist/sweetalert2.min.css";

const Page_card = (props) => {
  const handleClick = () => {
    Swal.fire({
      title: "Success! Account has been successfully created.",
      icon: "success",
      html:
        "You can use <b>bold text</b>, " +
        '<a href="//sweetalert2.github.io">links</a> ' +
        "and other HTML tags",
      text: "HostName: " + "sgp1.slowdns.me",
      showCloseButton: true,
      showCancelButton: true,
      focusConfirm: false,
      confirmButtonText: '<i class="fa fa-thumbs-up"></i> Great!',
      confirmButtonAriaLabel: "Thumbs up, great!",
      cancelButtonText: '<i class="fa fa-thumbs-down"></i>',
      cancelButtonAriaLabel: "Thumbs down",
    });
  };
  return (
    <>
      <div className="col">
        <div
          className={
            props.main
              ? [
                  "card text-center mx-auto",
                  "border border-3 border-danger",
                ].join(" ")
              : "card text-center mx-auto"
          }
          style="max-width: 18rem;"
        >
          <div class="card-header bg-white fs-5">
            {props.title.length > 25 ? (
              <small>{props.title}</small>
            ) : (
              props.title
            )}
          </div>
          <div className="card-body py-4">
            <h5 className="card-title fs-2">
              {props.amount} mmk /
              <small className="fs-6">
                {props.permissiondays == Number
                  ? props.permissiondays + " days"
                  : "Lifetime"}{" "}
              </small>
            </h5>
            <img
              src={props.src}
              className="rounded rounded-circle"
              width={90}
              height={90}
              alt="..."
            />
            <p className="card-text fw-semibold mt-2 mb-1">
              {props.usercount > 1
                ? props.usercount + " Users"
                : props.usercount + " User"}
            </p>
            <p className="card-text fw-semibold">{props.amount} mmk</p>
          </div>
          {props.modalBox ? (
            <button
              type="button"
              class="btn btn-primary rounded rounded-pill w-50 mx-auto mb-5"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
            >
              Get Now
            </button>
          ) : (
            <a
              href={
                [props.link].toString().includes("https") ? props.link : "#"
              }
              // {props.modal ? "" : null}
              className={[
                "btn rounded rounded-pill w-50 mx-auto mb-5",
                props.color,
              ].join(" ")}
              target="_blank"
            >
              {props.purchase} Now
            </a>
          )}
          <ModalBox
            title={props.modalTitle}
            hostname={props.modalHostName}
            servername={props.modalServerName}
            username={props.modalUserName}
            password={props.modalPassword}
            createDate={props.modalCreateDate}
            expiredDate={props.modalExpiredDate}
            sshport={props.modalsshport}
            udpgwport={props.modaludpgwport}
            publicKey={props.modalPublicKey}
          />
        </div>
      </div>
    </>
  );
};

export default Page_card;
