import React, { useEffect, useState } from "react"
import { FaCartPlus } from "react-icons/fa"
import { TbCurrencyTaka } from "react-icons/tb"
import { Link } from "react-router-dom"
import PrimaryButton from "../../../Components/PrimaryButton/PrimaryButton"
import image1 from "../../../assets/babyCare/Lactogen 1.webp"
import image2 from "../../../assets/babyCare/bashundhara-baby-wipes-sky-blue-120-pcs.jpeg"
import image3 from "../../../assets/babyCare/Eldomilk-1-growing-up-milk-powder.webp"
import image4 from "../../../assets/babyCare/Johnson & Johnson Baby Lotion - 500ml.jpeg"
import image5 from "../../../assets/babyCare/Pampers-Baby-Diaper-Pant.png"
import ProductCard from "../../../Components/PoductCard/ProductCard"
import axios from "axios"

const BabyHome = () => {
  const [loading, setLoading] = useState(false)
  const [products, setProducts] = useState([])

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
  function filterByCategory(array, category) {
    return array.filter(function (item) {
      return item.category === category
    })
  }
  var filteredItems = filterByCategory(products, "Baby & Mom Care")
  return (
    <div className="max-w-6xl mx-auto my-5 relative">
      <h3 className="text-4xl font-bold text-center lg:text-left mb-3">
        Baby & Mom Care
      </h3>
      <div className="w-full grid grid-cols-2 lg:grid-cols-5 gap-6 py-8 px-12 sm:px-0 cursor-pointer">
        {filteredItems.map((product) => (
          <ProductCard key={product.id} product={product}></ProductCard>
        ))}
      </div>
      <div className="text-center md:absolute top-0 right-0">
        <Link to="/diabetic-care">
          <PrimaryButton
            classes={`btn-sm normal-case hover:scale-105 duration-500`}
          >
            <span className="text-xl">View all</span>
          </PrimaryButton>
        </Link>
      </div>
    </div>
  )
}

export default BabyHome
