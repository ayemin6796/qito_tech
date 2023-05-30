import React from "react";
import Sing from "../assets/Singapore_flag_circle.png";
import Console from "../assets/_Console.png";
import "./main.css";
import Page_card from "../components/page_card";

const Main = () => {
  return (
    <>
      <div className="container">
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4 my-5">
          <Page_card
            title="Free Account 1"
            amount="0"
            permissionday="lifetime"
            src={Sing}
            usercount="200"
            color="btn-success"
            purchase="Get "
            main={false}
            link=""
            modalBox={true}
          />
          <Page_card
            title="Free Account 2"
            amount="0"
            permissionday="lifetime"
            src={Sing}
            usercount="200"
            color="btn-success"
            purchase="Get "
            main={false}
            link="https://t.me/qitotech"
            modalBox={true}
          />
          <Page_card
            title="Free Account 3"
            amount="2000"
            permissionday="lifetime"
            src={Sing}
            usercount="200"
            color="btn-success"
            purchase="Get "
            main={false}
            link="https://t.me/qitotech"
            modalBox={true}
          />
          <Page_card
            title="Free Account 4"
            amount="0"
            permissionday="lifetime"
            src={Sing}
            usercount="200"
            color="btn-success"
            purchase="Get "
            main={false}
            link="https://t.me/qitotech"
            modalBox={true}
          />
        </div>
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4 mb-5 d-flex justify-content-center">
          <Page_card
            title="VIP DNSTT & SSH Account"
            amount="5000"
            permissionday="30"
            src={Sing}
            usercount="1"
            color="btn-success"
            purchase="Purchase "
            main={false}
            link="https://t.me/qitotech"
            modalBox={false}
          />
          <Page_card
            title="VVIP DNSTT & SSH Account"
            amount="9000"
            permissionday="30"
            src={Sing}
            usercount="1"
            color="btn-danger"
            purchase="Purchase "
            main={true}
            link="https://t.me/qitotech"
            modalBox={false}
          />
          <Page_card
            title="Gaming DNSTT & SSH Account"
            amount="5000"
            permissionday="30"
            src={Console}
            usercount="1"
            color="btn-success"
            purchase="Purchase "
            main={false}
            link="https://t.me/qitotech"
            modalBox={false}
          />
        </div>
      </div>
    </>
  );
};

export default Main;
