import axios from "axios";
import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { CommonButton } from "../../Components/Button/Button";

const EditMedicine = () => {
  const [loading, setLoading] = useState(false);
  const [image, setImage] = useState(null);
  const [products, setProducts] = useState([]);
  const { id } = useParams();
  const navigate = useNavigate();
  const ProductData = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/medisin`);
      setProducts(response?.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    ProductData();
  }, []);

  const getProductById = (id) => {
    return products.find((product) => product._id === id);
  };

  const product = getProductById(id);
  console.log("Edit data", product);

  const formik = useFormik({
    initialValues: {
      productName: product ? product.productName : "",
      price: product ? product.price : "",
      category: product ? product.category : "",
      companyName: product ? product.companName : "",
      productType: product ? product.productType : "",
      weight: product ? product.weight : "",
      isPrescribed: product ? product.isPrescribed : false,
    },
    enableReinitialize: true,
    onSubmit: (values) => {
      handleSubmit(values);
    },
  });

  const apiKey = "f633b9b2b900fa4ce91d346d6b992734";

  const handleSubmit = async (values) => {
    setLoading(true);

    try {
      let imageUrl = null;

      if (image) {
        const url = "https://api.imgbb.com/1/upload";
        const formData = new FormData();

        formData.append("image", image);
        formData.append("key", apiKey);

        const config = {
          headers: {
            "content-type": "multipart/form-data",
          },
        };

        const imgbbResponse = await axios.post(url, formData, config);
        imageUrl = imgbbResponse.data.data.url;
      }

      const updatedData = {
        ...values,
        image: imageUrl ? imageUrl : values.image,
      };

      await axios.put(
        `http://localhost:5000/medisin/${product._id}`,
        updatedData
      );

      toast.success("Medicine updated successfully");
      navigate("/all-medicine");
    } catch (error) {
      console.log(error);
      toast.error("Failed to update medicine");
    }

    setLoading(false);
  };

  const handleImage = (e) => {
    setImage(e.target.files[0]);
  };

  const categories = [
    "Diabetic Care",
    "Supplies & Equipment",
    "Vitamins and Supplements",
    "Personal Care",
    "Women Care",
    "Herbal Product",
    "Sexual Wellbeing",
    "Baby & Mom Care",
    "Surgical Products",
    "Dental & Oral Care",
    "Medical Supplies & Equipment",
  ];

  return (
    <div className="mt-5">
      <div>
        <div className="flex w-full mt-2 max-w-sm mx-auto overflow-hidden white:bg-gray-800 shadow-xl lg:max-w-3xl m-3 boder-2">
          <div className="w-full px-6 py-8 md:px-8 ">
            <div className="font-bold text-2xl underline text-center justify-center">
              Edit Medicine
            </div>

            <form
              className="w-4/6 ml-auto mr-auto"
              onSubmit={formik.handleSubmit}
            >
              <div className="mt-4 text-left ">
                <label
                  className="block mb-2 text-sm font-medium text-black dark:text-black"
                  htmlFor="productName"
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
                  htmlFor="category"
                  className="block mb-2 text-sm font-medium text-black dark:text-black"
                >
                  Medicine Category
                </label>
                <select
                  id="category"
                  name="category"
                  autoComplete="category"
                  onChange={formik.handleChange}
                  value={
                    formik.values.category || (product ? product.category : "")
                  }
                  className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                >
                  <option value="">
                    {product ? product.category : "Select item"}
                  </option>
                  {categories.map((category) => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
              </div>

              <div className="mt-4 text-left">
                <label
                  className="block mb-2 text-sm font-medium text-black dark:text-black"
                  htmlFor="price"
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
                  htmlFor="companyName"
                >
                  Company Name
                </label>
                <input
                  id="companyName"
                  className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300"
                  type="text"
                  name="companyName"
                  onChange={formik.handleChange}
                  value={formik.values.companyName}
                  required
                  placeholder="Enter company Name"
                />
              </div>
              <div className="mt-4">
                <div className="flex justify-between">
                  <label
                    className="block mb-2 text-sm font-medium text-black dark:text-black"
                    htmlFor="file"
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
                  placeholder="file"
                />
              </div>

              <div className="mt-4 text-left">
                <label
                  className="block mb-2 text-sm font-medium text-black dark:text-black"
                  htmlFor="productType"
                >
                  Medicine Type
                </label>
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
                  htmlFor="weight"
                >
                  Weight
                </label>
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

              <div className="mt-2 ">
                <CommonButton
                  className="p-mr-2 p-button-raised p-button-secondary"
                  title="Update"
                  disabled={false}
                  label="Update"
                  type="submit"
                  icon="pi pi-pencil"
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
              >
                Login
              </Link>

              <span className="w-1/5 border-b dark:border-gray-600 md:w-1/4"></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditMedicine;
