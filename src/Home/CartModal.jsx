"use client";
import { useSelector, useDispatch } from "react-redux";
import { selectCartItems, selectCartTotals, increaseQty, decreaseQty, removeFromCart } from "@/redux/features/cart/cartSlice";
import { useRouter } from "next/navigation";
import useData from "@/hooks/useData";
const CartDrawer = ({ setIsCartOpen }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  const totals = useSelector(selectCartTotals);
  const { books } = useData();
  const router = useRouter();

  const handleCheckout = () => {

    setIsCartOpen(false); // close the cart drawer
    router.push("/chackOutPage"); // navigate to checkout
  };
  return (
    <>
      {/* Overlay */}
      <div
        onClick={() => setIsCartOpen(false)}
        className="fixed inset-0 bg-black/40 z-40"
      />

      {/* Drawer */}
      <div className="fixed top-0 right-0 h-screen w-[90%] sm:w-[400px] bg-white z-50 shadow-xl flex flex-col">

        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-400">
          <h2 className="text-xl font-semibold">🛒 Cart ({totals.selectedItem})</h2>
          <button
            onClick={() => setIsCartOpen(false)}
            className="text-2xl cursor-pointer font-bold"
          >
            ✕
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {cartItems.length === 0 ? (
            <p className="text-center text-gray-500">Cart is empty</p>
          ) : (
            cartItems.map(item => (
              <div key={item.id} className="flex items-center justify-between border border-gray-300 rounded-lg p-3">
                <div className="flex gap-3">
                  <img src={item.img} className="w-16 h-16 object-cover" alt={item.category} />
                  <div>
                    <h4 className="font-medium">{item.category}</h4>
                    <p className="text-gray-500">$ {item.price}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <button onClick={() => dispatch(decreaseQty(item.id))} className="px-3 py-1 bg-gray-200 rounded">−</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => dispatch(increaseQty(item.id))} className="px-3 py-1 bg-gray-200 rounded">+</button>
                  <button onClick={() => dispatch(removeFromCart(item.id))} className="px-2 py-1 bg-red-500 text-white rounded ml-2">x</button>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        <div className="border-t border-gray-400 p-4">
          <div className="flex justify-between mb-2">
            <span>Subtotal</span>
            <span>$ {totals.subtotal}</span>
          </div>

          <div className="flex justify-between mb-2">
            <span>Tax</span>
            <span>$ {totals.tax}</span>
          </div>

          <div className="flex justify-between font-semibold text-lg mb-4">
            <span>Grand Total</span>
            <span>$ {totals.grandTotal}</span>
          </div>


          <button onClick={handleCheckout} className="w-full bg-[#07A698] text-white py-3 rounded">Checkout</button>

        </div>
      </div>
    </>
  );
};

export default CartDrawer;
