import "./Homepage.css";
import * as React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Europe from "./Europe"
import Asia from "./Asia";
import NorthAmerica from "./NorthAmerica";
import SouthAmerica from "./SouthAmerica";
import Africa from "./Africa";
import More from "./More";

const Navbar = ()=>{
    return(
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
              <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>
                <h1 className="Logo">Legend Travel Alliance! </h1>
                <div>
                  <form className="d-flex">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
                    <button className="btn btn-outline-success" type="submit">Search</button>
                  </form>
                </div>
              </div>
              </nav>
              <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="#" >Trending Now</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>
                  <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                      <li className="nav-item">
                          <a className="nav-link" href="/Europe">
                          <Routes>
                            <Route path="/Europe" element={<Europe/>}/>
                          </Routes>Europe</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="/Asia">
                        <Routes>
                              <Route path="/Asia" element={<Asia/>}/>
                        </Routes>Asia</a>
                      </li>
                      <li className="nav-item">
                      <a className="nav-link" href="/North-America">
                          <Routes>
                            <Route path="/North-America" element={<NorthAmerica/>}/>
                          </Routes>North America</a>
                      </li>
                      <li className="nav-item">
                      <a className="nav-link" href="/South-America">
                          <Routes>
                            <Route path="/South-America" element={<SouthAmerica/>}/>
                          </Routes>South America</a>
                      </li>
                      <li className="nav-item">
                      <a className="nav-link" href="/Africa">
                          <Routes>
                            <Route path="/Africa" element={<Africa/>}/>
                          </Routes>Africa</a>
                      </li>
                      <li className="nav-item">
                      <a className="nav-link" href="/More">
                          <Routes>
                            <Route path="/More" element={<More/>}/>
                          </Routes>More</a>
                      </li>
                    </ul>
                  </div>
              </nav>
        </div>
    )
}

export default Navbar