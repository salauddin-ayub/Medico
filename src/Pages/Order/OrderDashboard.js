import React, { useEffect, useState } from "react";
import axios from "axios";

const OrderDashboard = () => {
  const [orders, setOrders] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10);
  const role = localStorage.getItem("role");
  const firstName = localStorage.getItem("firstName");
  const fetchOrders = async () => {
    try {
      const response = await axios.get("http://localhost:5000/orders");
      if (role === "superAdmin") {
        setOrders(response.data);
      } else {
        const filteredOrders = response.data.filter(
          (order) => order.firstName === firstName
        );
        setOrders(filteredOrders);
      }
    } catch (error) {
      console.error("Error fetching orders:", error);
    }
  };
  useEffect(() => {
    fetchOrders();
  }, []);

  const totalItems = orders.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = orders.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const goToPreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  const goToNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  const ActionOptions = ["Approved", "Rejected"];
  const [selectedAction, setSelectedAction] = useState({});
  const handleActionSelect = (orderId, action) => {
    setSelectedAction((prevState) => ({
      ...prevState,
      [orderId]: action,
    }));
  };

  const executeAction = async (orderId) => {
    const selected = selectedAction[orderId];
    if (selected) {
      try {
        const response = await axios.put("http://localhost:5000/order", {
          _id: orderId,
          status: selected,
        });
        console.log(
          `Successfully executed action '${selected}' for order ${orderId}`
        );
        console.log("Updated order:", response.data);
        fetchOrders();
      } catch (error) {
        console.error(`Error executing action for order ${orderId}:`, error);
      }
    } else {
      console.log("No action selected");
    }
  };
  const getRowClassName = (status) => {
    if (status === "Approved") {
      return "bg-green-200";
    } else if (status === "Rejected") {
      return "bg-red-300";
    } else {
      return "bg-yellow-100";
    }
  };

  return (
    <div className="container mx-auto">
      <h2 className="text-2xl font-semibold mb-4 text-center mt-4">
        Order Dashboard Page
      </h2>
      <table className="min-w-full bg-white border border-gray-300">
        <thead>
          <tr>
            <th className="py-2 px-4 bg-gray-300 border-b">Order ID</th>
            <th className="py-2 px-4 bg-gray-300 border-b">Product Name</th>
            <th className="py-2 px-4 bg-gray-300 border-b">Quantity</th>
            <th className="py-2 px-4 bg-gray-300 border-b">User Name</th>
            <th className="py-2 px-4 bg-gray-300 border-b">Price</th>
            <th className="py-2 px-4 bg-gray-300 border-b">Prescription</th>
            <th className="py-2 px-4 bg-gray-300 border-b">Address</th>
            <th className="py-2 px-4 bg-gray-300 border-b">Contact Number</th>
            <th className="py-2 px-4 bg-gray-300 border-b">Status</th>
            {role === "superAdmin" && (
              <th className="py-2 px-4 bg-gray-300 border-b">Action</th>
            )}
          </tr>
        </thead>

        <tbody>
          {currentItems.length === 0 ? (
            <tr>
              <td colSpan={9} className="py-4 text-center">
                No Data Found!
              </td>
            </tr>
          ) : (
            currentItems.map((order) => (
              <tr key={order._id} className={getRowClassName(order.status)}>
                <td className="py-2 px-4 border-b text-center">{order._id}</td>
                <td className="py-2 px-4 border-b text-center">
                  {order.productName}
                </td>
                <td className="py-2 px-4 border-b text-center">
                  {order.quantity}
                </td>
                <td className="py-2 px-4 border-b text-center">
                  {order.firstName}
                </td>
                <td className="py-2 px-4 border-b text-center">
                  ${order.price}
                </td>
                <td className="py-2 px-4 border-b text-center">
                  {order.prescription && (
                    <a
                      href={order.prescription}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        src={order.prescription}
                        alt="Prescription"
                        style={{
                          width: "50px",
                          height: "50px",
                          borderRadius: "50%",
                        }}
                      />
                    </a>
                  )}
                </td>

                <td className="py-2 px-4 border-b text-center">
                  {order.address}
                </td>
                <td className="py-2 px-4 border-b text-center">
                  {order.contactNumber}
                </td>
                <td className="py-2 px-4 border-b text-center">
                  {order.status}
                </td>
                {role === "superAdmin" && (
                  <td className="py-2 px-4 border-b">
                    <div className="flex items-center">
                      <select
                        className="p-2 mr-2 bg-gray-100 border rounded"
                        value={selectedAction[order._id] || "Pending"}
                        onChange={(e) =>
                          handleActionSelect(order._id, e.target.value)
                        }
                      >
                        <option value="Pending">Pending</option>
                        {ActionOptions.map((action) => (
                          <option key={action} value={action}>
                            {action}
                          </option>
                        ))}
                      </select>

                      <button
                        className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
                        onClick={() => executeAction(order._id)}
                      >
                        Execute
                      </button>
                    </div>
                  </td>
                )}
              </tr>
            ))
          )}
        </tbody>
      </table>

      <div className="mt-4 flex justify-center mb-5">
        <button
          onClick={goToPreviousPage}
          disabled={currentPage === 1}
          className={`mx-1 py-1 px-3 rounded ${
            currentPage === 1 ? "bg-gray-200" : "bg-blue-500 text-white"
          }`}
        >
          Previous
        </button>

        {Array.from({ length: totalPages }).map((_, index) => (
          <button
            key={index}
            onClick={() => paginate(index + 1)}
            className={`mx-1 py-1 px-3 rounded ${
              currentPage === index + 1
                ? "bg-blue-500 text-white"
                : "bg-gray-200"
            }`}
          >
            {index + 1}
          </button>
        ))}

        <button
          onClick={goToNextPage}
          disabled={currentPage === totalPages}
          className={`mx-1 py-1 px-3 rounded ${
            currentPage === totalPages
              ? "bg-gray-200"
              : "bg-blue-500 text-white"
          }`}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default OrderDashboard;
