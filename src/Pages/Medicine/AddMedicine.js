import axios from "axios";
import { useFormik } from "formik";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { CommonButton } from "../../Components/Button/Button";

const AddMedicine = () => {
  const [loading, setLoading] = useState(false);
  const [image, setImage] = useState(null);
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      productName: "",
      price: "",
      category: "",
      file: null,
      companName: "",
      productType: "",
      weight: "",
      isPrescribed: false,
    },
    // validationSchema: signUpSchema,
    onSubmit: (values, { resetForm }) => {
      console.log(values);
      handleSubmit(values);
    },
    enableReinitialize: true,
    validateOnChange: false,
  });
  const apiKey = "f633b9b2b900fa4ce91d346d6b992734";
  const handleSubmit = async (values) => {
    setLoading(true);
    const url = "https://api.imgbb.com/1/upload";
    const formData = new FormData();

    formData.append("image", image);
    formData.append("key", apiKey);
    const config = {
      headers: {
        "content-type": "multipart/form-data",
      },
    };

    try {
      const imgbbResponse = await axios.post(url, formData, config);
      const imageUrl = imgbbResponse.data.data.url;
      const allData = {
        ...values,
        image: imageUrl,
      };
      const anotherApiResponse = await axios.post(
        "http://localhost:5000/medisin",
        // "https://prime-automation-server-production.up.railway.app/product",
        allData
      );
      console.log(anotherApiResponse);
      toast.success("Medicine Added successfully");
      navigate("/");
    } catch (error) {
      setLoading(false);
    }
  };
  const handleImage = (e) => {
    setImage(e.target.files[0]);
  };
  return (
    <div className="mt-5">
      <div>
        <div className="flex w-full mt-2 max-w-sm mx-auto overflow-hidden white:bg-gray-800 shadow-xl lg:max-w-3xl m-3 boder-2">
          <div className="w-full px-6 py-8 md:px-8 ">
            <div className="font-bold text-2xl underline text-center justify-center">
              Add Medicine
            </div>

            <form
              className="w-4/6 ml-auto mr-auto"
              onSubmit={formik.handleSubmit}
            >
              <div className="mt-4 text-left ">
                <label
                  className="block mb-2 text-sm font-medium text-black dark:text-black"
                  for="LoggingEmailAddress"
                >
                  Product Name
                </label>
                <input
                  id="productName"
                  className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300"
                  type="text"
                  name="productName"
                  onChange={formik.handleChange}
                  value={formik.values.productName}
                  required
                  placeholder="Enter Product name"
                />
              </div>
              <div className="mt-4 text-left">
                <label
                  for="category"
                  className="block mb-2 text-sm font-medium text-black dark:text-black"
                >
                  Medicine Category
                </label>
                <select
                  id="category"
                  name="category"
                  autocomplete="category"
                  onChange={formik.handleChange}
                  class="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                >
                  <option value={formik.values.category}>
                    Select Category
                  </option>
                  <option value="Diabetic Care">Diabetic Care</option>
                  <option value=" Supplies & Equipment">
                    Supplies & Equipment
                  </option>
                  <option value="Vitamins and Supplements">
                    Vitamins and Supplements
                  </option>
                  <option value="Personal Care">Personal Care</option>
                  <option value="Women Care">Women Care</option>
                  <option value="Herbal Product">Herbal Product</option>
                  <option value="Sexual Wellbeing">Sexual Wellbeing</option>
                  <option value="Baby & Mom Care">Baby & Mom Care</option>
                  <option value="Surgical Products">Surgical Products</option>
                  <option value="Dental & Oral Care">Dental & Oral Care</option>
                  <option value="Medical Supplies and Equipment">
                    Medical Supplies & Equipment
                  </option>
                </select>
              </div>

              <div className="mt-4 text-left">
                <label
                  className="block mb-2 text-sm font-medium text-black dark:text-black"
                  for="price"
                >
                  Price
                </label>
                <input
                  id="price"
                  className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300"
                  type="text"
                  name="price"
                  onChange={formik.handleChange}
                  value={formik.values.price}
                  required
                  placeholder="Enter Price"
                />
              </div>

              <div className="mt-4 text-left">
                <label
                  className="block mb-2 text-sm font-medium text-black dark:text-black"
                  for="companName"
                >
                  Company Name
                </label>
                <input
                  id="companName"
                  className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300"
                  type="text"
                  name="companName"
                  onChange={formik.handleChange}
                  value={formik.values.companName}
                  required
                  placeholder="Enter company Name"
                />
              </div>
              <div className="mt-4">
                <div className="flex justify-between">
                  <label
                    className="block mb-2 text-sm font-medium text-black dark:text-black"
                    for="file"
                  >
                    Select Image
                  </label>
                </div>

                <input
                  id="file"
                  className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300"
                  type="file"
                  name="file"
                  onChange={handleImage}
                  // value={data.password}
                  placeholder="file"
                />
              </div>
              {/* productName: "", price: "", category: "", file: null, companName:
              "", productType: "", weight:"" */}
              <div className="mt-4">
                <div className="flex justify-between">
                  <label
                    className="block mb-2 text-sm font-medium text-black dark:text-black"
                    for="productType"
                  >
                    Medicine Type
                  </label>
                </div>

                <input
                  id="productType"
                  className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300"
                  type="text"
                  name="productType"
                  onChange={formik.handleChange}
                  value={formik.values.productType}
                  required
                  placeholder="productType"
                />
              </div>
              <div className="mt-4 text-left">
                <label
                  className="block mb-2 text-sm font-medium text-black dark:text-black"
                  htmlFor="isPrescribed"
                >
                  Is Prescribed
                </label>
                <div className="flex items-center">
                  <input
                    id="isPrescribed"
                    name="isPrescribed"
                    type="checkbox"
                    className="form-checkbox h-5 w-5 text-indigo-600 transition duration-150 ease-in-out"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    checked={formik.values.isPrescribed}
                  />
                  <label
                    className="ml-2 text-sm text-gray-700 dark:text-gray-400"
                    htmlFor="isPrescribed"
                  >
                    {formik.values.isPrescribed ? "Yes" : "No"}
                  </label>
                </div>
                {formik.touched.isPrescribed && formik.errors.isPrescribed && (
                  <div className="text-red-500 text-sm mt-1">
                    {formik.errors.isPrescribed}
                  </div>
                )}
              </div>

              <div className="mt-4">
                <div className="flex justify-between">
                  <label
                    className="block mb-2 text-sm font-medium text-black dark:text-black"
                    for="weight"
                  >
                    Weight
                  </label>
                </div>

                <input
                  id="weight"
                  className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300"
                  type="text"
                  name="weight"
                  onChange={formik.handleChange}
                  value={formik.values.weight}
                  required
                  placeholder="weight"
                />
              </div>
              <div className="mt-2 ">
                <CommonButton
                  className="p-mr-2 p-button-raised p-button-secondary"
                  title="Save"
                  disabled={false}
                  label="Save"
                  type="submit"
                  icon="pi pi-save"
                  color="p-button-raised p-button-success"
                  loading={loading}
                />
              </div>
            </form>

            <div className="flex items-center justify-between mt-4">
              <span className="w-1/5 border-b dark:border-gray-600 md:w-1/4"></span>

              <Link
                to="/login"
                className="text-xs text-gray-500 uppercase dark:text-gray-400 hover:underline"
              ></Link>

              <span className="w-1/5 border-b dark:border-gray-600 md:w-1/4"></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddMedicine;
