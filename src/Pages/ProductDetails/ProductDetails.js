import React, { useEffect, useState } from "react"
import image1 from "../../assets/medicines/prescription/Monas 10.jpg"
import { TbCurrencyTaka, TbMinus, TbPlus } from "react-icons/tb"
import PrimaryButton from "../../Components/PrimaryButton/PrimaryButton"
import { FaCartPlus } from "react-icons/fa"
import { useParams, useNavigate } from "react-router-dom"
import axios from "axios"

const ProductDetails = () => {
  const { id } = useParams()
  const [loading, setLoading] = useState(false)
  const [products, setProducts] = useState([])
  const [quantity, setQuantity] = useState(1)
  const [selectedOption, setSelectedOption] = useState("piece")
  const [cartItem, setCartItem] = useState({ product: null, quantity: 0 })
  const [cart, setCart] = useState([])
  const navigate = useNavigate()

  // function addToCart() {
  //   console.log("Hit the function")
  //   if (selectedOption && quantity) {
  //     const newItem = {
  //       product: { ...product, selectedOption },
  //       quantity: quantity,
  //     }
  //     setCart([...cart, newItem])
  //     navigate(`/view-product/${product._id}`)
  //   }
  // }
  const addToCart = () => {
    console.log("Hit the function")
    if (selectedOption && quantity) {
      const newItem = {
        product: { ...product, selectedOption },
        quantity: quantity,
      }
      setCart([...cart, newItem])
      navigate(`/view-product/${product._id}`)
    }
  }

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value === selectedOption ? "" : e.target.value)
  }

  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1)
    }
  }

  const handleIncrease = () => {
    setQuantity(quantity + 1)
  }

  console.log("ID-------->", id)

  //   const medicine = [
  //     {
  //       id: 1,
  //       title: "Monas 10",
  //       type: "Tablet",
  //       img: image1,
  //       generics: "Montelukast Sodium 10mg",
  //       company: "The ACME Laboratories Ltd.",
  //       price: 15,
  //     },
  //   ]
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
  useEffect(() => {
    ProductData()
  }, [])

  function getProductById(id) {
    return products.find((product) => product._id === id)
  }

  const productId = id
  const product = getProductById(productId)

  return (
    <div>
      {/* {products.map(({ id, img, title, type, price, generics, company }) => ( */}
      <div className="hero py-8">
        <div className="hero-content max-w-6xl mx-auto flex-col lg:flex-row">
          <div className="lg:w-1/2 lg:mr-16 lg:mb-6" data-aos="zoom-in-right">
            <img
              src={product?.image}
              className="rounded-lg shadow-md shadow-primary"
              alt=""
            />
          </div>
          <div className="lg:w-1/2" data-aos="zoom-in-left">
            <h1 className="text-4xl font-bold">{product?.productName}</h1>
            <p className="text-lg text-gray-600">{product?.productType}</p>
            <p className="text-lg">Company: {product?.companName}</p>
            <div className="mt-3">
              <div className="flex items-center">
                <p className="text-2xl">Price:{product?.price} </p>
                <p className="text-3xl text-green-700">
                  <TbCurrencyTaka />
                </p>
                <p className="text-3xl text-green-700"></p>
              </div>
            </div>
            <div className="mt-3">
              <p className="text-xl font-semibold mb-3">Quantity:</p>
              <div className="flex items-center justify-between mb-5">
                <div className="flex items-center">
                  <input
                    type="radio"
                    name="quantity"
                    value=""
                    checked={selectedOption === ""}
                    onChange={handleOptionChange}
                    className="radio radio-primary"
                  />
                  <p className="text-lg ml-3">None</p>
                </div>
                <div className="flex items-center">
                  <input
                    type="radio"
                    name="quantity"
                    value="1"
                    checked={selectedOption === "1"}
                    onChange={handleOptionChange}
                    className="radio radio-primary"
                  />
                  <p className="text-lg ml-3">1 Piece</p>
                </div>
                <div className="flex items-center">
                  <input
                    type="radio"
                    name="quantity"
                    value="1_strip"
                    checked={selectedOption === "1_strip"}
                    onChange={handleOptionChange}
                    className="radio radio-primary"
                  />
                  <p className="text-lg ml-3">1 Strip</p>
                </div>
                <div className="flex items-center">
                  <input
                    type="radio"
                    name="quantity"
                    value="1_box"
                    checked={selectedOption === "1_box"}
                    onChange={handleOptionChange}
                    className="radio radio-primary"
                  />
                  <p className="text-lg ml-3">1 Box</p>
                </div>

                <div className="flex items-center">
                  <button
                    className="btn btn-accent btn-sm p-1"
                    onClick={handleDecrease}
                  >
                    <TbMinus size={18} />
                  </button>
                  <p className="bg-gray-200 text-lg rounded-lg px-3 py-1 mx-3">
                    {quantity}
                  </p>
                  <button
                    className="btn btn-primary btn-sm p-1"
                    onClick={handleIncrease}
                  >
                    <TbPlus size={18} />
                  </button>
                </div>
              </div>
              <PrimaryButton
                classes={`w-4/6 h-12 btn-sm normal-case hover:scale-105 duration-500`}
                onClick={addToCart}
              >
                <span>
                  <FaCartPlus size={25} />
                </span>
                <span className="ml-3 text-xl">Add to Cart</span>
              </PrimaryButton>
            </div>
          </div>
        </div>
      </div>
      {/* ))} */}
    </div>
  )
}

export default ProductDetails
