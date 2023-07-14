import React from "react"
import { useFormik } from "formik"
import axios from "axios"
import { useNavigate } from "react-router-dom"

const Login = () => {
  const navigate = useNavigate()

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: async (values) => {
      try {
        const response = await axios.post("http://localhost:5000/login", values)
        console.log("Login successful!", response.data)

        const { firstName, lastName, email, id, role, token } = response.data

        // Store individual data fields in local storage
        localStorage.setItem("firstName", firstName)
        localStorage.setItem("lastName", lastName)
        localStorage.setItem("email", email)
        localStorage.setItem("id", id)
        localStorage.setItem("role", role)
        localStorage.setItem("token", token)
                navigate("/")


        // Display success message or perform further actions
      } catch (error) {
        console.error("Login failed!", error)
        if (error.response) {
          console.log("Response data:", error.response.data)
          console.log("Response status:", error.response.status)
          console.log("Response headers:", error.response.headers)
        }

        // Set formik status to "error"
        formik.setStatus("error")
      }
    },

    validate: (values) => {
      const errors = {}

      if (!values.email) {
        errors.email = "Email is required"
      }

      if (!values.password) {
        errors.password = "Password is required"
      }

      return errors
    },
  })

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="w-96 bg-white p-8 rounded-lg border border-gray-300 shadow-md">
        <h2 className="text-2xl mb-4">Login</h2>
        {formik.status === "error" && (
          <div className="text-red-500 mb-4">
            Login failed. Please check your credentials.
          </div>
        )}

        <form onSubmit={formik.handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-700 font-semibold mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.email && formik.errors.email && (
              <div className="text-red-500">{formik.errors.email}</div>
            )}
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-gray-700 font-semibold mb-2"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.password && formik.errors.password && (
              <div className="text-red-500">{formik.errors.password}</div>
            )}
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 rounded-md"
          >
            Login
          </button>
        </form>

        <div className="mt-4">
          <p className="text-gray-700">
            New here!{" "}
            <a href="/register" className="text-blue-500 underline">
              Register from here
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Login
