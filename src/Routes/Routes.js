import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import AboutUs from "../Pages/AboutUs/AboutUs";
import ContactUs from "../Pages/ContactUs/ContactUs";
import Home from "../Pages/Home/Home";
import OtcDrugs from "../Pages/OtcDrugs/OtcDrugs";
import ProductDetails from "../Pages/ProductDetails/ProductDetails";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/otc-drugs',
                element: <OtcDrugs></OtcDrugs>
            },
            {
                path: '/review',
            },
            {
                path: '/order',
            },
            {
                path: '/about-us',
                element: <AboutUs></AboutUs>

            },
            {
                path: '/contact',
                element: <ContactUs></ContactUs>

            },
            {
                path: '/prescription-medicines',

            },
            {
                path: '/product-details',
                element: <ProductDetails></ProductDetails>

            },
        ]
    }

])

export default router;