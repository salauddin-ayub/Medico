import axios from "axios";
import { useFormik } from "formik";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { clearCart } from "../../Components/Actions/Action";

const PlaceOrder = ({ items, onHide }) => {
  const cartItems = useSelector((state) => state.cartItems);
  const navigate = useNavigate();
  const firstName = localStorage.getItem("firstName");
  const userID = localStorage.getItem("id");
  const { v4: uuidv4 } = require("uuid");
  const dispatch = useDispatch();
  const [prescriptionFile, setPrescriptionFile] = useState(null);

  const groupedItems = cartItems.reduce((acc, item) => {
    const existingItem = acc.find(
      (groupedItem) => groupedItem.productName === item.productName
    );
    if (existingItem) {
      existingItem.quantity += item.quantity;
    } else {
      acc.push({ ...item });
    }
    return acc;
  }, []);
  console.log("groupedItems", groupedItems);
  const totalPriceSum = groupedItems.reduce(
    (sum, item) => sum + Number(item.price) * item.quantity,
    0
  );

  const formik = useFormik({
    initialValues: {
      contactNumber: "",
      address: "",
      prescription: null,
    },
    onSubmit: async (values) => {
      const apiKey = "f633b9b2b900fa4ce91d346d6b992734";
      const url = "https://api.imgbb.com/1/upload";
      const formData = new FormData();

      formData.append("image", prescriptionFile);
      formData.append("key", apiKey);
      const config = {
        headers: {
          "content-type": "multipart/form-data",
        },
      };
      let imageUrl = "";
      if (prescriptionFile) {
        const imgbbResponse = await axios.post(url, formData, config);
        imageUrl = imgbbResponse.data.data.url;
      }
      const orderItems = groupedItems.map((item) => {
        const orderItem = {
          ...item,
          ...values,
          firstName: firstName,
          userID: userID,
          _id: uuidv4(),
          productID: item._id,
          price: Number(item.price) * item.quantity,
        };

        if (item.isPrescribed) {
          if (!values.prescription) {
            formik.setFieldError("prescription", "Prescription is required");
            return;
          } else {
            orderItem.prescription = imageUrl;
          }
        }
        return orderItem;
      });
      if (orderItems.some((item) => !item)) {
        return;
      }

      try {
        const response = await axios.post(
          "http://localhost:5000/order",
          orderItems
        );
        console.log("Order placed successfully!", response.data);
        formik.resetForm();
        onHide();
        dispatch(clearCart());
        navigate("/order-dashboard");
      } catch (error) {
        console.error("Failed to place order!", error);
      }
    },
    validate: (values) => {
      const errors = {};

      if (!values.contactNumber) {
        errors.contactNumber = "Contact number is required";
      }

      if (!values.address) {
        errors.address = "Address is required";
      }

      return errors;
    },
  });

  console.log("Item from previous page", items);

  const handleContactNumberChange = (e) => {
    formik.setFieldValue("contactNumber", e.target.value);
  };

  const handleAddressChange = (e) => {
    formik.setFieldValue("address", e.target.value);
  };

  return (
    <div>
      <form onSubmit={formik.handleSubmit} className="mb-4">
        {/* Contact Number Field */}
        <div className="mb-4">
          <label htmlFor="contactNumber" className="block mb-1 font-semibold">
            Contact Number:
          </label>
          <input
            type="text"
            id="contactNumber"
            className="p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:border-primary"
            placeholder="Enter contact number"
            value={formik.values.contactNumber}
            onChange={handleContactNumberChange}
          />
          {formik.touched.contactNumber && formik.errors.contactNumber && (
            <div className="text-red-500">{formik.errors.contactNumber}</div>
          )}
        </div>

        {/* Address Field */}
        <div className="mb-4">
          <label htmlFor="address" className="block mb-1 font-semibold">
            Address:
          </label>
          <textarea
            id="address"
            className="p-2 border border-gray-300 rounded-md w-full resize-none focus:outline-none focus:border-primary"
            rows={4}
            placeholder="Enter address"
            value={formik.values.address}
            onChange={handleAddressChange}
          ></textarea>
          {formik.touched.address && formik.errors.address && (
            <div className="text-red-500">{formik.errors.address}</div>
          )}
        </div>
        <div className="mb-4">
          <label htmlFor="prescription" className="block mb-1 font-semibold">
            Upload Prescription:
          </label>
          <input
            type="file"
            id="prescription"
            className="p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:border-primary"
            onChange={(event) => {
              formik.setFieldValue(
                "prescription",
                event.currentTarget.files[0]
              );
              setPrescriptionFile(event.currentTarget.files[0]);
            }}
          />
          {formik.touched.prescription && formik.errors.prescription && (
            <div className="text-red-500 mt-1">
              {formik.errors.prescription}
            </div>
          )}
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
  );
};

export default PlaceOrder;
