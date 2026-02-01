function Cart({ orders, updateQuantity, removeFromCart }) {
  if (!orders || orders.length === 0) {
    return <p>Your cart is empty.</p>;
  }

  const totalItems = orders.reduce(
    (sum, item) => sum + item.quantity,
    0
  );

  const totalPrice = orders.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="cart">
      <h2>Your Cart</h2>
      <p><strong>Total Items:</strong> {totalItems}</p>

      <ul className="cart-list">
        {orders.map((item) => (
          <li key={item.id} className="cart-item">
            <div>
              <strong>{item.name}</strong>
              <p>${item.price} each</p>
            </div>

            <div className="cart-controls">
              <button
                onClick={() =>
                  updateQuantity(item.id, item.quantity - 1)
                }
                disabled={item.quantity === 1}
              >
                −
              </button>

              <span>{item.quantity}</span>

              <button
                onClick={() =>
                  updateQuantity(item.id, item.quantity + 1)
                }
              >
                +
              </button>

              <button
                className="remove-btn"
                onClick={() => removeFromCart(item.id)}
              >
                ✕
              </button>
            </div>

            <div>
              ${item.price * item.quantity}
            </div>
          </li>
        ))}
      </ul>

      <h3>Total Price: ${totalPrice.toFixed(2)}</h3>
    </div>
  );
}

export default Cart;
