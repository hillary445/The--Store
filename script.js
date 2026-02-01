const addToCart = (product) => {
  // 1. Update the cart state using the functional form of setState
  // This creates a new array with all previous items plus the new product.
  setCart(prevCart => [...prevCart, product]);

  // 2. Provide instant visual feedback by triggering a CSS animation
  const cartBadge = document.getElementById('cart-count');
  if (cartBadge) {
    // Remove the class first to re-trigger the animation if items are added quickly
    cartBadge.classList.remove('pulse');
    // We use a tiny timeout to allow the browser to process the class removal
    // before adding it back, ensuring the animation restarts.
    setTimeout(() => {
      cartBadge.classList.add('pulse');
    }, 10);
  }
};