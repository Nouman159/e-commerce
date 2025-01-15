import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addItem, updateItemQuantity } from './slice'

export function Counter() {
    const cart = useSelector((state) => state.cart.value)
    const dispatch = useDispatch()

    return (
        <div>
            <div>

            </div>
        </div>
    )
}