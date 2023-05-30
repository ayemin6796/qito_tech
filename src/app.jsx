import logo from "./assets/Qito_Tech_Logo.png";
import Nav from "./components/nav";
import Title_nav from "./components/title_nav";
import { Route, Routes } from "react-router-dom";
import Outline from "./Pages/Outline";
import Main from "./Pages/main";
import "./app.scss";

export function App() {
  return (
    <>
      <div className="container position-relative">
        <div className="row">
          <Title_nav />
        </div>
      </div>
      <div className="col-12 bg-violet">
        <Nav />
      </div>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/outline_Accounts" element={<Outline />} />
      </Routes>
    </>
  );
}
