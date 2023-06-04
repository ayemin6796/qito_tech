import React from "react";
import Sing from "../assets/Singapore_flag_circle.png";
import Console from "../assets/_Console.png";
import "./main.css";
import Page_card from "../components/page_card";
import Footer from "../components/Footer";

const Main = () => {
  return (
    <>
      <div className="container">
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4 my-3 my-md-5 mt-lg-3 mb-lg-5">
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
            modalTitle="SSH SlowDNS SGP 1"
            modalHostName="sgp1.slowdns.me"
            modalServerName="ns-sgp1.slowdns.me"
            modalUserName="sshocean-hoo"
            modalPassword="xywyz8qangaqizveh"
            modalCreateDate="21 May 2023"
            modalExpiredDate="28 May 2023"
            modalsshport="77"
            modaludpgwport="7200,7300"
            modalPublicKey="b4214f224903b97e34d5cb58c6e1f94d8509e80c0ef34c78cf4f8ec949fb861c"
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
            modalTitle="SSH SlowDNS SGP 1"
            modalHostName="sgp1.slowdns.me"
            modalServerName="ns-sgp1.slowdns.me"
            modalUserName="sshocean-hoo"
            modalPassword="xywyz8qangaqizveh"
            modalCreateDate="21 May 2023"
            modalExpiredDate="28 May 2023"
            modalsshport="22"
            modaludpgwport="7200,7300"
            modalPublicKey="b4214f224903b97e34d5cb58c6e1f94d8509e80c0ef34c78cf4f8ec949fb861c"
          />
          <Page_card
            title="Free Account 3"
            amount="0"
            permissionday="lifetime"
            src={Sing}
            usercount="200"
            color="btn-success"
            purchase="Get "
            main={false}
            link="https://t.me/qitotech"
            modalBox={true}
            modalTitle="SSH SlowDNS SGP 1"
            modalHostName="sgp1.slowdns.me"
            modalServerName="ns-sgp1.slowdns.me"
            modalUserName="sshocean-hoo"
            modalPassword="xywyz8qangaqizveh"
            modalCreateDate="21 May 2023"
            modalExpiredDate="28 May 2023"
            modalsshport="22"
            modaludpgwport="7200,7300"
            modalPublicKey="b4214f224903b97e34d5cb58c6e1f94d8509e80c0ef34c78cf4f8ec949fb861c"
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
            modalTitle="SSH SlowDNS SGP 1"
            modalHostName="sgp1.slowdns.me"
            modalServerName="ns-sgp1.slowdns.me"
            modalUserName="sshocean-hoo"
            modalPassword="xywyz8qangaqizveh"
            modalCreateDate="21 May 2023"
            modalExpiredDate="28 May 2023"
            modalsshport="77"
            modaludpgwport="7200,7300"
            modalPublicKey="b4214f224903b97e34d5cb58c6e1f94d8509e80c0ef34c78cf4f8ec949fb861c"
          />
        </div>
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4 mb-5 mb-md-3 mb-lg-3 d-flex justify-content-center">
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
      <Footer />
    </>
  );
};

export default Main;
