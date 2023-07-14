//theme
import "primereact/resources/themes/lara-light-indigo/theme.css"
//core
import "primereact/resources/primereact.min.css"
//icons
import "primeicons/primeicons.css"
import { RouterProvider } from "react-router-dom"
import router from "./Routes/Routes"
import { ToastContainer } from "react-toastify"
import { CartProvider } from "react-use-cart"

function App() {
  return (
    <div className="">
      <CartProvider>
        <RouterProvider router={router}>
          <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
          />

          <ToastContainer />
        </RouterProvider>
      </CartProvider>
    </div>
  )
}

export default App
