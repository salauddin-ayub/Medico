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
import DiseasePrediction from "../Pages/Medicine/DiseasePrediction"
import Login from "../Pages/Authentication/Login"
import Registration from "../Pages/Authentication/Registration"
import PlaceOrder from "../Pages/Order/PlaceOrder"

const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login></Login>,
  },
  {
    path: "/register",
    element: <Registration></Registration>,
  },
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/place-order",
        element: <PlaceOrder></PlaceOrder>,
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
        path: "/disease-prediction",
        element: <DiseasePrediction></DiseasePrediction>,
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
