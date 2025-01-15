import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { updateItemQuantity, removeItem } from '../app/slice'  // Import actions from your slice

const Cart = () => {
    const cart = useSelector((state) => state.cart.cart) // Get cart state from Redux store
    const dispatch = useDispatch()

    // Handle incrementing item quantity
    const handleIncrement = (id) => {
        dispatch(updateItemQuantity({ id, quantity: 1 }))  // Increment quantity by 1
    }

    // Handle decrementing item quantity
    const handleDecrement = (id) => {
        dispatch(updateItemQuantity({ id, quantity: -1 })) // Decrement quantity by 1
    }

    // Handle removing item from cart
    const handleRemove = (id) => {
        console.log(id)
        dispatch(removeItem(id))  // Dispatch remove action with item id
    }

    // Calculate total price (Assuming each item has a 'price' property)
    const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0)

    return (
        <div>
            <h1 className="text-2xl font-bold mb-4">Your Cart</h1>
            {cart.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <div>
                    <div className="space-y-4">
                        {cart.map((item) => (
                            <div key={item.id} className="flex items-center justify-between p-4 border-b">
                                <img src={item.img} alt={item.name} className="w-20 h-20 object-cover rounded-md" />
                                <div>
                                    <h2 className="text-lg font-semibold">{item.name}</h2>
                                    <p className="text-gray-500">${item.price}</p>
                                </div>
                                <div className="flex items-center">
                                    <button
                                        onClick={() => handleDecrement(item.id)}
                                        className="bg-red-500 text-white px-2 py-1 rounded-md mr-2"
                                    >
                                        -
                                    </button>
                                    <span className="text-lg">{item.quantity}</span>
                                    <button
                                        onClick={() => handleIncrement(item.id)}
                                        className="bg-green-500 text-white px-2 py-1 rounded-md ml-2"
                                    >
                                        +
                                    </button>
                                    <button
                                        onClick={() => handleRemove(item.id)}
                                        className="bg-gray-500 text-white px-4 py-1 rounded-md ml-4"
                                    >
                                        Remove
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="mt-4 text-xl font-semibold">Total: ${totalPrice}</div>
                    <button className="bg-blue-500 text-white px-4 py-2 rounded-md mt-4">Checkout</button>
                </div>
            )}
        </div>
    )
}

export default Cart
