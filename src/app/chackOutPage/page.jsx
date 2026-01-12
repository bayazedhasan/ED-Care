"use client";
import { useSelector, useDispatch } from "react-redux";
import { selectCartItems, selectCartTotals, removeFromCart, clearCart } from "@/redux/features/cart/cartSlice";
import { useRouter } from "next/navigation";

const CheckoutPage = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const cartItems = useSelector(selectCartItems);
  const totals = useSelector(selectCartTotals);

  const handleClearCartAndRedirect = () => {
    dispatch(clearCart()); // Clear the cart
    if (cartItems[0]?.id) {
      router.push(`/dateils/${cartItems[0].id}`); // Redirect to first item's details page
    } else {
      router.push("/"); // fallback if no items
    }
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Checkout</h1>

      {cartItems.length === 0 ? (
        <p className="text-center text-gray-500">Your cart is empty.</p>
      ) : (
        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* Cart Items */}
          <div className="flex-1">
            <h2 className="text-xl font-semibold mb-4">Your Items</h2>
            <div className="space-y-4">
              {cartItems.map(item => (
                <div key={item.id} className="flex items-center justify-between border border-gray-400 rounded-lg p-4">
                  <div className="flex gap-4 items-center">
                    <img src={item.img} alt={item.category} className="w-20 h-20 object-cover rounded" />
                    <div>
                      <h3 className="font-bold">{item.category}</h3>
                      <p className="text-gray-500">$ {item.price} x {item.quantity}</p>
                    </div>
                  </div>
                  <button
                    onClick={() => dispatch(removeFromCart(item.id))}
                    className="px-3 cursor-pointer py-1 bg-red-500 text-white rounded"
                  >
                    Remove
                  </button>
                </div>
              ))}
            </div>
            <button
              onClick={handleClearCartAndRedirect}
              className="mt-4 cursor-pointer bg-gray-500 text-white px-4 py-2 rounded"
            >
              Clear Cart
            </button>
          </div>

          {/* Order Summary */}
          <div className="w-full lg:w-1/3 border border-gray-400 rounded-lg p-6 shadow">
            <h2 className="text-xl font-semibold mb-4">Order Summary</h2>

            <div className="flex justify-between mb-2">
              <span>Subtotal:</span>
              <span>$ {totals.subtotal}</span>
            </div>

            <div className="flex justify-between mb-2">
              <span>Tax (5%):</span>
              <span>$ {totals.tax}</span>
            </div>

            <div className="flex justify-between font-bold text-lg mb-4">
              <span>Grand Total:</span>
              <span>$ {totals.grandTotal}</span>
            </div>

            <button className="w-full cursor-pointer bg-[#07A698] text-white py-3 rounded mb-2">
              Proceed to Payment
            </button>

            <button
              onClick={handleClearCartAndRedirect}
              className="w-full cursor-pointer bg-gray-500 text-white py-2 rounded"
            >
              Cancel Order
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CheckoutPage;
