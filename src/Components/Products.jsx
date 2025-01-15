import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addItem, updateItemQuantity } from '../app/slice'

// Import the coffee products from the JSON file
import coffeeProducts from '../assets/products.json' // Ensure the JSON file is correctly placed

export function Products() {
    const cart = useSelector((state) => state.cart.cart) // Assuming your cart state is named 'cart'
    const dispatch = useDispatch()

    // Handle adding an item to the cart
    const handleAddToCart = (product) => {
        dispatch(addItem(product)) // Dispatching the addItem action with the product as payload
    }

    return (
        <div>
            <h1 className="text-2xl font-bold mb-4">Our Coffee Collection</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {coffeeProducts.map((product) => (
                    <div
                        key={product.id}
                        className="border border-gray-200 p-4 rounded-lg shadow-lg hover:shadow-xl transition-all"
                    >
                        <img
                            src={product.img}
                            alt={product.name}
                            className="w-full h-48 object-cover mb-4 rounded-md"
                        />
                        <h2 className="text-xl font-semibold">{product.name}</h2>
                        <p className="text-gray-500 mb-4">${product.price || 5.00}</p> {/* Default price */}
                        <button
                            onClick={() => handleAddToCart(product)}
                            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
                        >
                            Add to Cart
                        </button>
                    </div>
                ))}
            </div>
        </div>
    )
}
