import React, { useEffect, useRef, useState } from "react"
import PropTypes from "prop-types"
import { GoCloudUpload } from "react-icons/go"

import "./DropFileInput.css"

import { ImageConfig } from "../Config/ImageConfig"
import axios from "axios"
import { Link } from "react-router-dom"

import { FaSearch, FaCartPlus } from "react-icons/fa"
import PrimaryButton from "../PrimaryButton/PrimaryButton"
import { Dialog } from "primereact/dialog"

const DropFileInput = (props) => {
  const wrapperRef = useRef(null)
  const [fileList, setFileList] = useState([])
  const [textData, setTextData] = useState(null)
  const [filteredData, setFilteredData] = useState()
  const [showResults, setShowResults] = useState(false)
  const onDragEnter = () => wrapperRef.current.classList.add("dragover")
  const onDragLeave = () => wrapperRef.current.classList.remove("dragover")
  const onDrop = () => wrapperRef.current.classList.remove("dragover")
  console.log("filteredData", filteredData)
  console.log("textData", textData)

  const onFileDrop = (e) => {
    const newFile = e.target.files[0]
    if (newFile) {
      const updatedList = [...fileList, newFile]
      setFileList(updatedList)
      props.onFileChange(updatedList)

      const reader = new FileReader()

      reader.onload = (event) => {
        const fileContent = event.target.result
        console.log("File", fileContent) // You can process or display the file content here

        const keyValuePairs = fileContent.split("\n") // Split the content by newline character
        const dataObject = {}

        keyValuePairs.forEach((pair) => {
          const [key, value] = pair.split(":")
          if (key && value) {
            dataObject[key.trim()] = value.trim()
          }
        })

        console.log("Data Object", dataObject)
        setTextData(dataObject)
        setShowResults(true)
      }

      reader.readAsText(newFile)
    }
  }

  const onHide = (name) => {
    setShowResults(false)
    setTextData(null)
  }

  //   const fileRemove = (file) => {
  //     const updatedList = [...fileList]
  //     const index = updatedList.indexOf(file)
  //     if (index !== -1) {
  //       updatedList.splice(index, 1)
  //       setFileList(updatedList)
  //       props.onFileChange(updatedList)
  //       setTextData(null)
  //     }
  //     }
  const fileRemove = (file) => {
    const updatedList = fileList.filter((item) => item !== file)
    setFileList(updatedList)
    props.onFileChange(updatedList)
    setTextData(null)
  }

  //All Product
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

  useEffect(() => {
    if (textData?.Category) {
      const filteredItems = filterByCategory(products, textData?.Category)
      setFilteredData(filteredItems)
    } else {
      setFilteredData([])
    }
  }, [products, textData?.Category])

  return (
    <>
      <div>
        <div
          ref={wrapperRef}
          className="drop-file-input py-6"
          onDragEnter={onDragEnter}
          onDragLeave={onDragLeave}
          onDrop={onDrop}
        >
          <div className="card-body items-center text-center">
            <span className="text-5xl bg-blue-100 p-3 rounded-full">
              <GoCloudUpload />
            </span>
            <p className="text-xl font-semibold">
              Drag & Drop your Prescription here <br /> Or <br /> Click to
              Upload Text File{" "}
            </p>
          </div>
          <input type="file" accept=".txt" onChange={onFileDrop} />
        </div>

        {fileList.length > 0 ? (
          <div className="">
            <p className="text-lg text-center">File is ready to upload</p>
            {fileList.map((item, index) => (
              <div key={index} className="drop-file-preview__item">
                <img
                  src={
                    ImageConfig[item.type.split("/")[1]] ||
                    ImageConfig["default"]
                  }
                  alt=""
                />
                <div className="drop-file-preview__item__info">
                  <p>{item.name}</p>
                  <p>{item.size}B</p>
                </div>
                <span
                  className="drop-file-preview__item__del"
                  onClick={() => {
                    fileRemove(item)
                    setTextData(null)
                  }}
                >
                  x
                </span>
              </div>
            ))}
          </div>
        ) : null}
      </div>
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
          {textData?.Category ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
              {filteredData.map((product) => (
                <div
                  key={product?.id}
                  className="max-w-xs rounded overflow-hidden shadow-lg bg-white hover:bg-gray-100 transition-colors duration-300 ease-in-out"
                >
                  <div className="relative">
                    <img
                      className="w-full h-40 object-cover transition-opacity duration-300 ease-in-out hover:opacity-75"
                      src={product?.image}
                      alt="Product"
                    />
                    <div className="absolute top-0 left-0 p-2 bg-blue-500 text-white font-bold text-xs rounded-tr rounded-bl">
                      Available
                    </div>
                  </div>
                  <div className="px-6 py-4">
                    <div className="font-bold text-lg mb-2 text-blue-800">
                      {product?.productName}
                    </div>
                    <p className="text-gray-700 text-base italic">
                      Category: {product?.category}
                    </p>
                    <p className="text-gray-700 text-base italic">
                      product Type: {product?.productType}
                    </p>
                    <p className="text-gray-700 text-base italic">
                      Price: BDT {product?.price}
                    </p>
                  </div>
                  <div className="text-center">
                    <Link to={`/product-details/${product?._id}`}>
                      <PrimaryButton
                        classes={`w-11/12 btn-sm normal-case hover:scale-105 duration-500`}
                      >
                        <span>
                          <FaCartPlus size={19} />
                        </span>
                        <span className="ml-3">Add to Cart</span>
                      </PrimaryButton>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center text-gray-500 mt-8">
              <p className="text-lg font-bold">
                Disease Category not available here
              </p>
              <p className="mt-2">
                Please try again later or upload a different file.
              </p>
            </div>
          )}
        </div>
      </Dialog>
    </>
  )
}

DropFileInput.propTypes = {
  onFileChange: PropTypes.func.isRequired,
}

export default DropFileInput
