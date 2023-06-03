import React from "react"
import { Link } from "react-router-dom"
import logo from "../../../assets/logo.png"
import { FaSearch, FaCartPlus } from "react-icons/fa"
import { RiArrowDownSLine } from "react-icons/ri"
import PrimaryButton from "../../../Components/PrimaryButton/PrimaryButton"
import { useCart } from "react-use-cart"

const NavBar = () => {
  const {
    isEmpty,
    totalUniqueItems,
    items,
    product,
    totalItems,
    cartTotal,
    updateItemQuantity,
    removeItem,
    emptyCart,
  } = useCart()
  const navbar = (
    <>
      <li className="font-semibold text-base">
        <Link to="/">Home</Link>
      </li>
      <li className="font-semibold text-base">
        <Link to="/otc-drugs">OTC Drugs</Link>
      </li>
      <li className="font-semibold text-base">
        <Link to="/order">Order</Link>
      </li>
      <li className="font-semibold text-base">
        <Link to="/add-medicine">Add Medicine</Link>
      </li>
      <li className="font-semibold text-base">
        <Link to="/review">Review</Link>
      </li>
      <li className="font-semibold text-base">
        <Link to="/about-us">About Us</Link>
      </li>
      <li className="font-semibold text-base">
        <Link to="/contact">Contact Us</Link>
      </li>

      <li className="font-semibold text-base">
        <Link to="/card" className="hover:bg-primary">
          card
        </Link>
      </li>
    </>
  )

  const dropDownList = (
    <>
      <li>
        <Link to="/" className="hover:bg-primary">
          Medicines
        </Link>
      </li>
      <li>
        <Link to="/" className="hover:bg-primary">
          Diabetic Care
        </Link>
      </li>
      <li>
        <Link to="/" className="hover:bg-primary">
          Supplies & Equipment
        </Link>
      </li>
      <li>
        <Link to="/" className="hover:bg-primary">
          Vitamins & Supplements
        </Link>
      </li>
      <li>
        <Link to="/" className="hover:bg-primary">
          Dental & Oral Care
        </Link>
      </li>
      <li>
        <Link to="/" className="hover:bg-primary">
          Herbal Product
        </Link>
      </li>
      <li>
        <Link to="/" className="hover:bg-primary">
          Sexual Wellbeing
        </Link>
      </li>
      <li>
        <Link to="/" className="hover:bg-primary">
          Personal Care
        </Link>
      </li>
      <li>
        <Link to="/" className="hover:bg-primary">
          Baby & Mom Care
        </Link>
      </li>
      <li>
        <Link to="/" className="hover:bg-primary">
          Women's Care
        </Link>
      </li>
      <li>
        <Link to="/" className="hover:bg-primary">
          Surgical Products
        </Link>
      </li>
    </>
  )

  return (
    <div className="sticky top-0 z-30 w-full bg-white">
      <div className="navbar lg:px-8 py-3 ">
        <div className="navbar-start">
          <Link className="normal-case px-2 flex items-center">
            <img src={logo} alt="" style={{ height: "30px" }} />
            <span className="font-bold text-4xl ml-2 mt-1">Medico</span>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <div className="from-control w-80 relative">
            <input
              type="text"
              placeholder="Search Medicine"
              className="input input-bordered w-full"
            />
            <button className="btn btn-primary absolute top-0 right-0 rounded-l-none">
              <FaSearch />
            </button>
          </div>
        </div>
        <div className="navbar-end">
          <div className="flex-none">
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost btn-circle">
                <div className="indicator">
                  <p>{totalItems}</p>
                  <FaCartPlus className="text-2xl" />

                  <span className="badge badge-sm indicator-item"></span>
                </div>
              </label>
              <div
                tabIndex={0}
                className="mt-3 card card-compact dropdown-content w-52 bg-base-100 shadow"
              >
                <div className="card-body">
                  <span className="font-bold text-lg">0 Items</span>
                  <span className="text-info">Subtotal: $000</span>
                  <div className="card-actions">
                    <button className="btn btn-primary btn-block">
                      View cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Link to="/login" className="ml-3">
            <PrimaryButton classes={`btn-sm normal-case`}>Login</PrimaryButton>
          </Link>
          <Link to="/register" className="ml-3">
            <PrimaryButton classes={`btn-sm normal-case`}>
              Register
            </PrimaryButton>
          </Link>
        </div>
      </div>
      <div className="flex">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li tabIndex={0}>
              <Link className="justify-between">
                Categories
                <svg
                  className="fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
                </svg>
              </Link>
              <ul className="p-2 bg-base-100">{dropDownList}</ul>
            </li>
            {navbar}
          </ul>
        </div>
        <div className=" flex lg:hidden w-10/12 ml-3 pb-3">
          <div className="from-control w-full relative">
            <input
              type="text"
              placeholder="Search Medicine"
              className="input input-bordered w-full"
            />
            <button className="btn btn-primary absolute top-0 right-0 rounded-l-none">
              <FaSearch />
            </button>
          </div>
        </div>
      </div>
      <div className="hidden lg:flex bg-primary pl-5">
        <div className="dropdown dropdown-hover">
          <label
            tabIndex={0}
            className="justify-between btn btn-primary bg-gradient-to-r from-primary to-secondary rounded-none px-10 mr-5"
          >
            <span className="font-bold text-lg normal-case">Categories</span>
            <RiArrowDownSLine className="text-2xl ml-6" />
          </label>
          <ul
            tabIndex={0}
            className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
          >
            {dropDownList}
          </ul>
        </div>
        <ul className="menu menu-horizontal px-6 top">{navbar}</ul>
      </div>
    </div>
  )
}

export default NavBar
