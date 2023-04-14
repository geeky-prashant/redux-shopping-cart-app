import React from "react";
import { Link } from "react-router-dom";
import { CgShoppingCart } from "react-icons/cg";
import { TbBrandRedux } from "react-icons/tb";
import { useSelector } from "react-redux";

const Navbar = () => {
  const items = useSelector((state) => state.cart);
  return (
    <div className="navbarInner">
      <Link className="navLink" to="/">
        <span className="logo">
          <TbBrandRedux />
          Redux Store
        </span>
      </Link>
      <Link className="navLink" to="/cart">
        <span className="cartCount">
          <CgShoppingCart />
          <span>{items.length}</span>
        </span>
      </Link>
    </div>
  );
};

export default Navbar;
