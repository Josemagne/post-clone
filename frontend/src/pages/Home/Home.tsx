import React from "react";
import { NavLink } from "react-router-dom";
import Burger from "../../components/Navbar/subcomponents/Burger";

interface Props {}

const Home = (props: Props) => {
  return (
    <div className="home">
      <nav className="navbar navbar-expand-lg">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/personsList">PersonsList</NavLink>
        <div
          className="navbar-toggler"
          data-bs-toggle="collapse"
          data-bs-target="#navbar-content"
        >
          <Burger />
        </div>
        <div className="" id="navbar-content"></div>
      </nav>
    </div>
  );
};

export default Home;
