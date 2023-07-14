import React, { useState, useEffect } from "react"
import * as tf from "@tensorflow/tfjs"
import * as mobilenet from "@tensorflow-models/mobilenet"

const DiseasePrediction = () => {
  const [model, setModel] = useState(null)
  const [imageData, setImageData] = useState(null)
  const [prediction, setPrediction] = useState(null)
  console.log("prediction", prediction)

  useEffect(() => {
    // Load the pre-trained MobileNet model
    const loadModel = async () => {
      const loadedModel = await mobilenet.load()
      setModel(loadedModel)
    }

    loadModel()
  }, [])

  const handleImageUpload = (event) => {
    const file = event.target.files[0]
    const reader = new FileReader()

    reader.onload = (e) => {
      const img = document.createElement("img")
      img.src = e.target.result
      img.onload = async () => {
        const imageTensor = tf.browser.fromPixels(img)
        const processedTensor = tf.image
          .resizeBilinear(imageTensor, [224, 224])
          .toFloat()
        const expandedTensor = processedTensor.expandDims()
        setImageData(expandedTensor)
      }
    }

    reader.readAsDataURL(file)
  }

  const predictDisease = async () => {
    if (model && imageData) {
      const predictions = await model.classify(imageData)
      setPrediction(predictions)
    }
  }
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-4">Disease Prediction</h1>
      <div className="flex justify-center">
        <div className="border border-gray-300 p-4 shadow-md w-[400px] rounded">
          <div className="flex flex-col items-center mb-4">
            <input
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              className="mb-4 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
            />
            <button
              onClick={predictDisease}
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded border border-blue-500"
            >
              Predict
            </button>
          </div>
        </div>
      </div>

      {prediction && (
        <div className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow">
          <h2 className="text-2xl font-bold mb-4">Prediction Results:</h2>
          <ul>
            {prediction.map((item, index) => (
              <li key={index} className="text-lg mb-2">
                {item.className}: {item.probability.toFixed(3)}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}

export default DiseasePrediction
