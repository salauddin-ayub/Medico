import { Button } from "primereact/button"
import React from "react"

import { useCart } from "react-use-cart"

const AddToCard = () => {
  const {
    isEmpty,
    totalUniqueItems,
    items,
    product,
    totalItems,
    cartTotal,
    updateItemQuantity,
    removeItem,
    emptyCart,
  } = useCart()
  if (isEmpty) return <h1 className="text-center">Your Cart is Empty</h1>
  console.log("Product---->Send tp card", product)
  return (
    <section className="py-4  container addToCard">
      <div className="row justify-content-center">
        {/* item cart are sathe  */}

        <div className="col-4 col-sm-12">
          {product?.length}
          <h5 style={{ color: "#dd65a1" }}>
            {" "}
            Cart ({totalUniqueItems}) total Items: ({totalItems})
          </h5>
          <table className="table table-light table-hover m-0"></table>
        </div>

        <div className="col-auto ms-auto">
          <h2 style={{ color: "#dd65a1", marginRight: "20px" }}>
            {" "}
            Total Price: $ {cartTotal}
          </h2>
        </div>
        <div className="col-auto" style={{ marginRight: "140px" }}>
          <Button className="btn btn-danger m-2" onClick={() => emptyCart()}>
            {" "}
            Clear Cart
          </Button>
          <Button className="btn btn-primary m-2">Buy New </Button>
        </div>
      </div>
    </section>
  )
}

export default AddToCard
