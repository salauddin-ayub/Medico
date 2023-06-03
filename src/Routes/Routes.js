import { createBrowserRouter } from "react-router-dom"
import AddToCard from "../Components/Card/AddToCard"
import Main from "../Layout/Main"
import AboutUs from "../Pages/AboutUs/AboutUs"
import ContactUs from "../Pages/ContactUs/ContactUs"
import Home from "../Pages/Home/Home"
import AddMedicine from "../Pages/Medicine/AddMedicine"
import OtcDrugs from "../Pages/OtcDrugs/OtcDrugs"
import ProductDetails from "../Pages/ProductDetails/ProductDetails"
import ViewAddToCartProduct from "../Pages/ProductDetails/ViewAddToCartProduct"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/otc-drugs",
        element: <OtcDrugs></OtcDrugs>,
      },
      {
        path: "/add-medicine",
        element: <AddMedicine></AddMedicine>,
      },
      {
        path: "/review",
      },
      {
        path: "/order",
      },
      {
        path: "/about-us",
        element: <AboutUs></AboutUs>,
      },
      {
        path: "/contact",
        element: <ContactUs></ContactUs>,
      },
      {
        path: "/prescription-medicines",
      },
      {
        path: "/product-details/:id",
        element: <ProductDetails></ProductDetails>,
      },
      {
        path: "/view-product/:id",
        element: <ViewAddToCartProduct></ViewAddToCartProduct>,
      },
      {
        path: "/card",
        element: <AddToCard></AddToCard>,
      },
    ],
  },
])

export default router
