import React from "react"
import PrimaryButton from "../../../Components/PrimaryButton/PrimaryButton"
import image1 from "../../../assets/medicines/prescription/Monas 10.jpg"
import image2 from "../../../assets/medicines/prescription/pantonix.jpeg"
import image3 from "../../../assets/medicines/prescription/Napa EXTRA.jpg"
import image4 from "../../../assets/medicines/prescription/sergel-20.png"
import { Link } from "react-router-dom"
import ProductCard from "../../../Components/PoductCard/ProductCard"

const PrescriptionMedicinesHome = () => {
  const medicine = [
    {
      id: 1,
      title: "Monas 10",
      type: "Tablet",
      img: image1,
      price: 1511,
    },
    {
      id: 2,
      title: "Pantonix 20",
      type: "Tablet",
      img: image2,
      price: 6.72,
    },
    {
      id: 3,
      title: "Napa Extra",
      type: "Tablet",
      img: image3,
      price: 5,
    },
    {
      id: 4,
      title: "Sergel 20",
      type: "Tablet",
      img: image4,
      price: 6.72,
    },
    {
      id: 5,
      title: "Pantonix 20",
      type: "Tablet",
      img: image2,
      price: 6.72,
    },
  ]
  return (
    <div className="max-w-6xl mx-auto my-5 relative">
      <h3 className="text-4xl font-bold text-center lg:text-left mb-3">
        Prescription Medicines
      </h3>
      <div className="w-full grid grid-cols-2 lg:grid-cols-5 gap-6 py-8 px-12 sm:px-0 cursor-pointer">
        {medicine.map((product) => (
          <ProductCard key={product.id} product={product}></ProductCard>
        ))}
      </div>
      <div className="text-center md:absolute top-0 right-0">
        <Link to="/prescription-medicines">
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

export default PrescriptionMedicinesHome
