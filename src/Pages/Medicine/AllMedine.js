import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const AllMedicine = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);

  const ProductData = async () => {
    try {
      setLoading(true);
      const response = await axios.get("http://localhost:5000/medisin");
      setLoading(false);
      setProducts(response?.data);
    } catch (error) {
      setLoading(false);
    }
  };

  useEffect(() => {
    ProductData();
  }, []);

  const handleEdit = (productId) => {
    navigate(`/edit-medicine/${productId}`);
  };
  const handleDelete = async (productId) => {
    try {
      const response = await axios.delete(
        `http://localhost:5000/medisin/${productId}`
      );
      console.log(response.data); // Print the response data if desired
      // navigate("/all-medicine");
      ProductData();
    } catch (error) {
      console.error("Error deleting medisin:", error);
    }
  };

  return (
    <div>
      <header className="text-center py-4 bg-gray-200">
        <h1 className="text-2xl font-bold">All Medicine</h1>
      </header>

      <div className="container mx-auto mt-8">
        {loading ? (
          <div>Loading...</div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {products.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded shadow-lg p-4 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105"
              >
                <div className="relative">
                  <img
                    src={product.image}
                    alt={product.productName}
                    className="w-full h-40 object-cover mb-4 rounded-lg transition duration-300 ease-in-out transform"
                  />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0">
                    <img
                      src={product.image}
                      alt={product.productName}
                      className="w-full h-64 object-cover rounded-lg"
                    />
                  </div>
                </div>
                <h2 className="text-lg font-bold">{product.productName}</h2>
                <p className="text-gray-500 mb-2">{product.category}</p>
                <div className="flex justify-end">
                  <button
                    className="mr-2 bg-blue-500 hover:bg-blue-600 text-white py-1 px-4 rounded"
                    onClick={() => handleEdit(product._id)}
                  >
                    Edit
                  </button>
                  <button
                    className="bg-red-500 hover:bg-red-600 text-white py-1 px-4 rounded"
                    onClick={() => handleDelete(product._id)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default AllMedicine;
