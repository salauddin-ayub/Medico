import React, { useState } from "react"
import { useSelector } from "react-redux"

const PlaceOrder = ({ items }) => {
  const cartItems = useSelector((state) => state.cartItems)
  console.log("Item from previous page", items)
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
  console.log("groupedItems", groupedItems)
  const totalPriceSum = groupedItems.reduce(
    (sum, item) => sum + Number(item.price) * item.quantity,
    0
  )

  const [contactNumber, setContactNumber] = useState("")
  const [address, setAddress] = useState("")

  const handleContactNumberChange = (e) => {
    setContactNumber(e.target.value)
  }

  const handleAddressChange = (e) => {
    setAddress(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Perform submission logic here
  }

  return (
    <div>
      <form onSubmit={handleSubmit} className="mb-4">
        <div className="mb-4">
          <label htmlFor="contactNumber" className="block mb-1 font-semibold">
            Contact Number:
          </label>
          <input
            type="text"
            id="contactNumber"
            className="p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:border-primary"
            placeholder="Enter contact number"
            value={contactNumber}
            onChange={handleContactNumberChange}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="address" className="block mb-1 font-semibold">
            Address:
          </label>
          <textarea
            id="address"
            className="p-2 border border-gray-300 rounded-md w-full resize-none focus:outline-none focus:border-primary"
            rows={4}
            placeholder="Enter address"
            value={address}
            onChange={handleAddressChange}
          ></textarea>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full border-collapse">
            <thead>
              <tr>
                <th className="py-2 px-4 bg-gray-200 text-gray-700 font-bold uppercase border-b">
                  Product Name
                </th>
                <th className="py-2 px-4 bg-gray-200 text-gray-700 font-bold uppercase border-b">
                  Quantity
                </th>
                <th className="py-2 px-4 bg-gray-200 text-gray-700 font-bold uppercase border-b">
                  Individual Price
                </th>
                <th className="py-2 px-4 bg-gray-200 text-gray-700 font-bold uppercase border-b">
                  Total Price
                </th>
              </tr>
            </thead>
            <tbody>
              {groupedItems.map((item) => (
                <tr key={item._id}>
                  <td className="py-2 px-4 border-b text-center">
                    {item.productName}
                  </td>
                  <td className="py-2 px-4 border-b text-center">
                    {item.quantity}
                  </td>
                  <td className="py-2 px-4 border-b text-center">
                    ${item.price}
                  </td>
                  <td className="py-2 px-4 border-b text-center">
                    ${Number(item.price) * item.quantity}
                  </td>
                </tr>
              ))}
              <tr>
                <td
                  className="py-2 px-4 border-b text-center font-semibold"
                  colSpan={3}
                >
                  Total Price Sum
                </td>
                <td className="py-2 px-4 border-b text-center font-semibold">
                  ${totalPriceSum}
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <button
          type="submit"
          className="inline-block px-4 py-2 text-white bg-primary hover:bg-primary-hover rounded-md transition-colors duration-300 float-right"
        >
          Place Order
        </button>
      </form>
    </div>
  )
}

export default PlaceOrder
