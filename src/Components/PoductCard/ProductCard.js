import React from "react"
import { FaCartPlus } from "react-icons/fa"
import { TbCurrencyTaka } from "react-icons/tb"
import { Link } from "react-router-dom"
import { useCart } from "react-use-cart"
import PrimaryButton from "../PrimaryButton/PrimaryButton"

const ProductCard = ({ product }) => {
  const { addItem } = useCart()

  const {
    category,
    companName,
    image,
    price,
    productName,
    productType,
    weight,
    _id,
  } = product
  console.log("Product test jony..", product)
  return (
    <div className={`shadow-md py-2 rounded-lg hover:scale-105 duration-500`}>
      <img src={image} alt="" className="w-40 h-36 mx-auto rounded-lg" />
      <div className="pl-6">
        {/* {productName.length <= 18 ? (
          <p className="text-lg mt-4">{productName}</p>
        ) : (
          <p className="text-lg mt-4">{productName.slice(0, 18)}...</p>
        )} */}
        <p className="text-gray-500">{productType}</p>
        <p>{productName}</p>
        <p>{category} </p>
        {/* <p className="text-xl text-green-700">{category}</p> */}

        <div className="flex items-center">
          <p>Price: </p>
          <p className="text-2xl text-green-700">
            <TbCurrencyTaka />
          </p>
          <p className="text-2xl text-green-700">{price}</p>
        </div>
      </div>
      <div className="text-center">
        <Link to={`/product-details/${_id}`}>
          <PrimaryButton
            classes={`w-11/12 btn-sm normal-case hover:scale-105 duration-500`}
          >
            <span>
              <FaCartPlus size={19} />
            </span>
            <span className="ml-3" onClick={() => addItem(product)}>
              Add to Cart
            </span>
          </PrimaryButton>
        </Link>
      </div>
    </div>
    // <div>This is single product page</div>
  )
}

export default ProductCard
