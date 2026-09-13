import { createContext, useReducer, useEffect } from 'react';

const CartContext = createContext();

const initialState = {
  items: [],
};

// Safely parse localStorage
const loadCartState = () => {
  try {
    const serializedState = localStorage.getItem('coffee-break-cart');
    if (serializedState === null) {
      return initialState;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    console.error('Could not load cart state from localStorage', err);
    return initialState;
  }
};

const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_ITEM': {
      const existingItemIndex = state.items.findIndex(
        (item) => item.productId === action.payload.productId
      );

      if (existingItemIndex >= 0) {
        // Item exists, update quantity
        const updatedItems = [...state.items];
        updatedItems[existingItemIndex].quantity += action.payload.quantity;
        return { ...state, items: updatedItems };
      } else {
        // New item
        return { ...state, items: [...state.items, action.payload] };
      }
    }
    case 'REMOVE_ITEM': {
      return {
        ...state,
        items: state.items.filter((item) => item.productId !== action.payload.productId),
      };
    }
    case 'UPDATE_QUANTITY': {
      if (action.payload.quantity < 1 || isNaN(action.payload.quantity)) {
        return state; // Prevent invalid quantities
      }
      return {
        ...state,
        items: state.items.map((item) =>
          item.productId === action.payload.productId
            ? { ...item, quantity: action.payload.quantity }
            : item
        ),
      };
    }
    case 'CLEAR_CART': {
      return initialState;
    }
    default:
      return state;
  }
};

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState, loadCartState);

  // Sync to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('coffee-break-cart', JSON.stringify(state));
    } catch (err) {
      console.error('Could not save cart state to localStorage', err);
    }
  }, [state]);

  const addItem = (product, quantity = 1) => {
    // Parse price string to number for internal cart logic ('$4.50' -> 4.50)
    const numericPrice = parseFloat(product.price.replace(/[^0-9.]/g, ''));
    dispatch({
      type: 'ADD_ITEM',
      payload: {
        productId: product.id,
        name: product.name,
        price: numericPrice,
        image: product.image,
        category: product.category,
        quantity,
      },
    });
  };

  const removeItem = (productId) => {
    dispatch({ type: 'REMOVE_ITEM', payload: { productId } });
  };

  const updateQuantity = (productId, quantity) => {
    dispatch({ type: 'UPDATE_QUANTITY', payload: { productId, quantity } });
  };

  const incrementItem = (productId) => {
    const item = state.items.find((i) => i.productId === productId);
    if (item) {
      updateQuantity(productId, item.quantity + 1);
    }
  };

  const decrementItem = (productId) => {
    const item = state.items.find((i) => i.productId === productId);
    if (item && item.quantity > 1) {
      updateQuantity(productId, item.quantity - 1);
    }
  };

  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART' });
  };

  // Derived state
  const totalItems = state.items.reduce((total, item) => total + item.quantity, 0);
  const subtotal = state.items.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <CartContext.Provider
      value={{
        items: state.items,
        addItem,
        removeItem,
        updateQuantity,
        incrementItem,
        decrementItem,
        clearCart,
        totalItems,
        subtotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;
