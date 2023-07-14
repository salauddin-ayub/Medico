import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import PrimaryButton from "../../../Components/PrimaryButton/PrimaryButton"
import image1 from "../../../assets/personal/DettolLiquid.webp"
import image2 from "../../../assets/personal/ACI Aerosol.webp"
import image3 from "../../../assets/personal/savlon-antiseptic-liquid-1l.jpg"
import image4 from "../../../assets/personal/dr-rhazes-mosquito-spray-73-gm-free-ultra-protect-spray-110-ml-2-pcs.jpeg"
import image5 from "../../../assets/personal/odomas.jpeg"
import ProductCard from "../../../Components/PoductCard/ProductCard"
import axios from "axios"

const PersonalCareHome = () => {
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
  var filteredItems = filterByCategory(products, "Personal Care")
  return (
    <div className="max-w-6xl mx-auto my-5 relative">
      <h3 className="text-4xl font-bold text-center lg:text-left mb-3">
        Personal Care
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

export default PersonalCareHome
