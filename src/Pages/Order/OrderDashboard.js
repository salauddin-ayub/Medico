import React, { useEffect, useState } from "react"
import axios from "axios"

const OrderDashboard = () => {
  const [orders, setOrders] = useState([])

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await axios.get("http://localhost:5000/orders")
        setOrders(response.data)
      } catch (error) {
        console.error("Error fetching orders:", error)
      }
    }

    fetchOrders()
  }, [])

  return (
    <div>
      <div>Order Dashboard Page</div>
      <ul>
        {orders.map((order) => (
          <li key={order._id}>{order.id}</li>
        ))}
      </ul>
    </div>
  )
}

export default OrderDashboard
