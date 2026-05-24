import { useState } from "react";

function ShoppingCart() {
  const ITEM_PRICE = 50;
  const [items, setItems] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  const addItem = () => {
    setItems(prev => prev + 1);
    setTotalPrice(prev => prev + ITEM_PRICE);
  };

  const removeItem = () => {
    if (items > 0) {
      setItems(prev => prev - 1);
      setTotalPrice(prev => prev - ITEM_PRICE);
    }
  };

  const clearCart = () => {
    setItems(0);
    setTotalPrice(0);
  };

  return (
    <div className="state-container">
      <h2>Shopping Cart</h2>
      <div className="cart-info">
        <h3>Items: <span className="value">{items}</span></h3>
        <h3>Total Price: <span className="value">₹{totalPrice}</span></h3>
      </div>
      <div className="button-group">
        <button onClick={addItem} className="btn btn-success">Add Item</button>
        <button onClick={removeItem} className="btn btn-danger">Remove Item</button>
        <button onClick={clearCart} className="btn btn-secondary">Clear Cart</button>
      </div>
    </div>
  );
}

export default ShoppingCart;
