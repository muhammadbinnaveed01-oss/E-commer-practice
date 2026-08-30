import React from  'react'
import Cards from '../compunent/Cards'
const Home =()=>{
    return(
        <>
<section className="relative overflow-hidden bg-gradient-to-br from-amber-50 via-white to-orange-50">
  <div className="mx-auto flex min-h-[500px] max-w-7xl items-center px-6 py-16 lg:px-8">
    
    <div className="grid w-full items-center gap-12 lg:grid-cols-2">
      
      {/* Left Content */}
      <div className="max-w-2xl">
        <span className="inline-block rounded-full bg-amber-100 px-4 py-2 text-sm font-semibold text-amber-700">
          ✨ New Collection
        </span>

        <h1 className="mt-6 text-4xl font-extrabold leading-tight tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
          Discover Products
          <span className="block text-amber-600">
            You’ll Love
          </span>
        </h1>

        <p className="mt-6 max-w-xl text-lg leading-8 text-gray-600">
          Explore our collection of high-quality products, carefully
          selected to bring you the best experience at the best price.
        </p>

        {/* Buttons */}
        <div className="mt-8 flex flex-wrap gap-4">
          <button className="rounded-xl bg-amber-600 px-6 py-3 font-semibold text-white shadow-lg transition hover:bg-amber-700 hover:shadow-xl">
            Shop Now →
          </button>

          <button className="rounded-xl border border-gray-300 bg-white px-6 py-3 font-semibold text-gray-700 transition hover:border-amber-500 hover:text-amber-600">
            Explore Products
          </button>
        </div>

        {/* Small Stats */}
        <div className="mt-10 flex gap-8">
          <div>
            <h3 className="text-2xl font-bold text-gray-900">10K+</h3>
            <p className="text-sm text-gray-500">Products</p>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-gray-900">5K+</h3>
            <p className="text-sm text-gray-500">Customers</p>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-gray-900">4.9★</h3>
            <p className="text-sm text-gray-500">Rating</p>
          </div>
        </div>
      </div>

      {/* Right Visual */}
      <div className="relative flex justify-center">
        
        <div className="relative flex h-80 w-80 items-center justify-center rounded-full bg-amber-200/60 sm:h-96 sm:w-96">
          
          <div className="flex h-64 w-64 items-center justify-center rounded-3xl bg-white shadow-2xl sm:h-72 sm:w-72">
            <span className="text-lg font-medium text-gray-400">
              Product Image
            </span>
          </div>

          {/* Floating Card */}
          <div className="absolute -bottom-4 -left-4 rounded-2xl bg-white p-4 shadow-xl sm:-left-8">
            <p className="text-sm text-gray-500">Starting from</p>
            <p className="text-2xl font-bold text-gray-900">
              $29.99
            </p>
          </div>

          {/* Floating Rating */}
          <div className="absolute -right-4 top-8 rounded-2xl bg-white px-4 py-3 shadow-xl sm:-right-8">
            <p className="text-sm font-semibold text-gray-900">
              ⭐ 4.9/5
            </p>
            <p className="text-xs text-gray-500">
              Customer Rating
            </p>
          </div>

        </div>
      </div>
    </div>
  </div>
</section>
 <section className="mx-auto max-w-7xl px-5 py-16 lg:px-7">

        <div className="mb-10 text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Featured Products
          </h2>

          <p className="mt-3 text-gray-500">
            Discover our latest and most popular products.
          </p>
        </div>

        <Cards />

      </section>
        </>

    )
}
export default Home