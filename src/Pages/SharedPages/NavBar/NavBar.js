import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import logo from "../../../assets/logo.png"
import { FaSearch, FaCartPlus } from "react-icons/fa"
import { RiArrowDownSLine } from "react-icons/ri"
import PrimaryButton from "../../../Components/PrimaryButton/PrimaryButton"
import { useCart } from "react-use-cart"
import axios from "axios"
import ReactModal from "react-modal"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { Dialog } from "primereact/dialog"
import PlaceOrder from "../../Order/PlaceOrder"

const NavBar = () => {
  const [loading, setLoading] = useState(false)
  const [products, setProducts] = useState([])
  const navigate = useNavigate()
  const [showModal, setShowModal] = useState(false)

  const cartItems = useSelector((state) => state.cartItems)
  const totalCount = cartItems.length

  console.log("Cart Items", cartItems)

  //Search related states
  const [searchTerm, setSearchTerm] = useState("")
  const [showResults, setShowResults] = useState(false)
  const [searchResults, setSearchResults] = useState([])
  const [items, setItems] = useState([])

  console.log("Search---->Result", searchResults)

  //fETCH Products
  const ProductData = async (value) => {
    try {
      setLoading(true)
      await axios
        .get(`http://localhost:5000/medisin`)
        .then(function (res) {
          setLoading(false)
          setProducts(res?.data)

          console.log(res?.data)
        })
        .catch(function (error) {
          setLoading(false)
        })
    } catch (err) {
      setLoading(false)
    }
  }

  const handleSearch = () => {
    // Filter the products array based on the search term
    const filteredResults = products.filter((product) =>
      product.productName.toLowerCase().includes(searchTerm.toLowerCase())
    )

    setSearchResults(filteredResults)
    setShowResults(true)
  }
  useEffect(() => {
    ProductData()
  }, [])

  const handleChange = (event) => {
    setSearchTerm(event.target.value)
  }
  const closeModal = () => {
    setShowResults(false)
  }

  const groupedItems = cartItems.reduce((acc, item) => {
    const existingItem = acc.find(
      (groupedItem) => groupedItem.productName === item.productName
    )
    if (existingItem) {
      existingItem.quantity += item.quantity
    } else {
      acc.push({ ...item })
    }
    return acc
  }, [])

  // Calculate the total price sum
  const totalPriceSum = groupedItems.reduce(
    (sum, item) => sum + Number(item.price) * item.quantity,
    0
  )
  const storedId = localStorage.getItem("id")

  const handlePlaceOrder = () => {
    if (!storedId) {
      navigate("/login")
      setShowModal(false)
    } else {
      setShowModal(true)
      setItems(groupedItems)
    }

    // // Create an array to store the order items
    // const orderItems = groupedItems.map((item) => ({
    //   id: item._id,
    //   productName: item.productName,
    //   quantity: item.quantity,
    //   price: Number(item.price),
    // }))

    // // Send the order data via POST request using axios
    // axios
    //   .post("http://localhost:5000/order", orderItems)
    //   .then((response) => {
    //     if (response.status === 200) {
    //       // Handle the successful response
    //       alert("Order placed successfully!")
    //     } else {
    //       // Handle other response status codes
    //       alert("Error placing the order. Please try again.")
    //     }
    //   })
    //   .catch((error) => {
    //     // Handle any errors that occur during the request
    //     console.error("Error placing the order:", error)
    //     alert("Error placing the order. Please try again.")
    //   })
  }

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
  const onHide = () => {
    setShowResults(false)
    setShowModal(false)
  }

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
              value={searchTerm}
              onChange={handleChange}
            />
            <button
              className="btn btn-primary absolute top-0 right-0 rounded-l-none"
              onClick={handleSearch}
            >
              <FaSearch />
            </button>
          </div>
        </div>

        <div className="navbar-end">
          <div className="flex-none">
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost btn-circle">
                <div className="indicator">
                  <p>{totalCount}</p>
                  <FaCartPlus className="text-2xl" />

                  <span className="badge badge-sm indicator-item"></span>
                </div>
              </label>
              <div className="mt-3 card card-compact dropdown-content w-80 bg-base-100 shadow">
                {groupedItems.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center justify-between p-2 border-b border-base-300"
                  >
                    <div>
                      <p className="text-lg font-medium">{item.productName}</p>
                      <p className="text-sm text-base-content-opacity">
                        Quantity: {item.quantity}
                      </p>
                    </div>
                    <p className="text-lg font-medium">
                      Price: ${Number(item.price) * item.quantity}
                    </p>
                  </div>
                ))}
                <div className="flex justify-between p-2 bg-base-200">
                  <p className="text-lg font-medium">
                    Total Price Sum: ${totalPriceSum}
                  </p>
                  <button
                    className="px-4 py-2 text-white bg-primary hover:bg-primary-hover focus:outline-none rounded-md transition-colors duration-300"
                    onClick={handlePlaceOrder}
                  >
                    Place Order
                  </button>
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
      <div>
        {/* Result Modal */}
        <Dialog
          className="text-l"
          blockScroll
          header="Predicted Medicine"
          visible={showResults}
          style={{ width: "80vw" }}
          onHide={() => onHide("displayBasic")}
          id="fname"
          maximizable
        >
          <div>
            <h2 className="text-2xl font-bold mb-4">Search Results</h2>
            {searchResults.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {searchResults.map((product) => (
                  <div
                    key={product?.id}
                    className="max-w-sm bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
                  >
                    <img
                      className="w-full h-40 object-cover"
                      src={product?.image}
                      alt="Product"
                    />
                    <div className="p-4">
                      <h3 className="text-lg font-semibold text-blue-800 mb-2">
                        {product?.productName}
                      </h3>
                      <p className="text-gray-700 text-sm mb-2">
                        Category: {product?.category}
                      </p>
                      <p className="text-gray-700 text-sm mb-2">
                        Product Type: {product?.productType}
                      </p>
                      <p className="text-gray-700 text-sm mb-4">
                        Price: BDT {product?.price}
                      </p>
                      <div className="text-center">
                        <Link to={`/product-details/${product?._id}`}>
                          <button
                            className="inline-flex items-center px-4 py-2 text-white bg-primary hover:bg-primary-hover rounded-md transition-colors duration-300"
                            style={{ fontSize: "14px" }}
                          >
                            <span className="mr-2">
                              <FaCartPlus size={19} />
                            </span>
                            <span className="font-medium">Add to Cart</span>
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-lg font-semibold">No results found.</p>
            )}
            <button
              className="mt-4 px-4 py-2 text-white bg-primary hover:bg-primary-hover rounded-md transition-colors duration-300"
              onClick={closeModal}
            >
              Close
            </button>
          </div>
        </Dialog>
        <Dialog
          className="text-l"
          blockScroll
          header="Place order"
          visible={showModal}
          style={{ width: "80vw" }}
          onHide={() => onHide("displayBasic")}
          id="fname"
          maximizable
        >
          <PlaceOrder items={items}></PlaceOrder>
        </Dialog>
      </div>
    </div>
  )
}

export default NavBar
