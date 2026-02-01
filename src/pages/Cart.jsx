function Cart({ orders }) {
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
    <div>
      <h2>Your Cart</h2>
      <p><strong>Total Items:</strong> {totalItems}</p>

      <ul>
        {orders.map((item) => (
          <li key={item.id}>
            {item.name} × {item.quantity} — $
            {item.price * item.quantity}
          </li>
        ))}
      </ul>

      <h3>Total Price: ${totalPrice}</h3>
    </div>
  );
}

export default Cart;
