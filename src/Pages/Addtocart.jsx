import React, { useContext } from 'react'
import context from '../context/context'
const Addtocart =()=>{
    const {feature,dispatch} = useContext(context)
    return(
        <>
                 {/* Cart Items */}
  <div className="space-y-4">

    {feature.map((item) => {
      return (
        <div
          key={item.id}
          className="group flex flex-col gap-5 rounded-2xl border border-gray-200 bg-white p-5 shadow-sm transition-all duration-300 hover:shadow-lg sm:flex-row sm:items-center sm:justify-between"
        >

          {/* Product Info */}
          <div className="flex items-center gap-4">

            {/* Product Image */}
            <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-amber-50 to-orange-100">
              <span className="text-xs font-medium text-gray-400">
                Image
              </span>
            </div>


            {/* Name + Details */}
            <div>

              <h3 className="text-lg font-bold text-gray-900">
                {item.name}
              </h3>

              <div className="mt-1 flex flex-wrap items-center gap-2">

                <span className="rounded-full bg-amber-100 px-2.5 py-1 text-xs font-semibold text-amber-700">
                  {item.category}
                </span>

                <span className="text-sm text-gray-500">
                  📍 {item.location}
                </span>

              </div>

              <p className="mt-2 text-lg font-bold text-gray-900">
                ${item.price}
              </p>

            </div>
          </div>


          {/* Quantity + Total */}
          <div className="flex items-center justify-between gap-6 sm:justify-end">

            {/* Quantity Controls */}
            <div className="flex items-center overflow-hidden rounded-xl border border-gray-200 bg-gray-50">

              <button
                onClick={() =>
                  dispatch({
                    type: "subtract",
                    payload: item
                  })
                }
                className="flex h-10 w-10 items-center justify-center text-lg font-bold text-gray-600 transition hover:bg-gray-200 hover:text-gray-900"
              >
                −
              </button>

              <span className="flex h-10 min-w-10 items-center justify-center border-x border-gray-200 bg-white text-sm font-bold text-gray-900">
                {item.quantity}
              </span>

              <button
                onClick={() =>
                  dispatch({
                    type: "add",
                    payload: item
                  })
                }
                className="flex h-10 w-10 items-center justify-center text-lg font-bold text-amber-600 transition hover:bg-amber-50"
              >
                +
              </button>

            </div>


            {/* Total */}
            <div className="text-right">
              <p className="text-xs text-gray-400">
                Total
              </p>

              <p className="text-lg font-bold text-amber-600">
                ${(item.price * item.quantity).toFixed(2)}
              </p>
            </div>

          </div>

        </div>
      )
    })}

  </div>
    {/* Empty Cart */}
  {feature.length === 0 && (
    <div className="rounded-2xl border border-dashed border-gray-300 bg-gray-50 py-16 text-center">

      <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-amber-100 text-2xl">
        🛒
      </div>

      <h3 className="text-lg font-bold text-gray-900">
        Your cart is empty
      </h3>

      <p className="mt-2 text-sm text-gray-500">
        Add some products to your cart and they will appear here.
      </p>

    </div>
  )}
        </>
    )
}
export default Addtocart