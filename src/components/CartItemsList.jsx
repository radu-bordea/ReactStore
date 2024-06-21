import { useSelector } from 'react-redux'; // Import useSelector hook from react-redux
import CartItem from './CartItem'; // Import the CartItem component

// CartItemsList component to display a list of cart items
const CartItemsList = () => {
  // Use useSelector to get cartItems from the Redux store's state
  const cartItems = useSelector((state) => state.cartState.cartItems);

  return (
    <>
      {cartItems.map((item) => {
        // Map over cartItems and render a CartItem component for each item
        return <CartItem key={item.cartID} cartItem={item} />;
      })}
    </>
  );
};

export default CartItemsList; // Export the CartItemsList component
