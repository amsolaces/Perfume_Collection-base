import { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // Load cart from localStorage on mount
  useEffect(() => {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, []);

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const addToCart = (perfume) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(item => item._id === perfume._id);
      
      if (existingItem) {
        // If item exists, increase quantity
        return prevCart.map(item =>
          item._id === perfume._id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        // If item doesn't exist, add it with quantity 1
        return [...prevCart, { ...perfume, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (perfumeId) => {
    setCart(prevCart => prevCart.filter(item => item._id !== perfumeId));
  };

  const updateQuantity = (perfumeId, quantity) => {
    if (quantity <= 0) {
      removeFromCart(perfumeId);
      return;
    }
    
    setCart(prevCart =>
      prevCart.map(item =>
        item._id === perfumeId ? { ...item, quantity } : item
      )
    );
  };

  const clearCart = () => {
    setCart([]);
  };

  const getCartTotal = () => {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const getCartItemCount = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        getCartTotal,
        getCartItemCount
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

