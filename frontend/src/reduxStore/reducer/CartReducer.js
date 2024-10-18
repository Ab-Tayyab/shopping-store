const initialState = {
  items: [],
  totalAmount: 0,
  discountedAmount: 0,
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      // Check if the item already exists in the cart
      const existingItem = state.items.find(item => item.id === action.payload.id);
      if (existingItem) {
        return {
          ...state,
          items: state.items.map(item =>
            item.id === existingItem.id
              ? { ...item, qty: item.qty + 1 } // Increment quantity by 1
              : item
          ),
        };
      } else {
        return {
          ...state,
          items: [...state.items, { ...action.payload, qty: 1 }], // Add new item with quantity 1
        };
      }

    case 'REMOVE_FROM_CART':
      const updatedItems = state.items.filter(item => item.id !== action.payload);
      return {
        ...state,
        items: updatedItems,
      };

      case 'INCREASE_QTY':
        const increaseIndex = state.items.findIndex(item => item.id === action.payload.itemId);
        const increaseItem = state.items[increaseIndex];
      
        // Check if menDataCollection is defined and find the product
        const increaseProductData = action.payload.menDataCollection && action.payload.menDataCollection.find(prod => prod.id === action.payload.itemId);
      
        if (increaseItem && increaseProductData && increaseItem.qty < increaseProductData.qty) {
          const itemsWithIncreasedQty = [...state.items];
          itemsWithIncreasedQty[increaseIndex].qty++;
          return {
            ...state,
            items: itemsWithIncreasedQty,
          };
        }
        return state;

    case 'DECREASE_QTY':
      const decreaseIndex = state.items.findIndex(item => item.id === action.payload);
      const decreaseItem = state.items[decreaseIndex];

      if (decreaseItem.qty > 1) {
        const itemsWithDecreasedQty = [...state.items];
        itemsWithDecreasedQty[decreaseIndex].qty--;
        return {
          ...state,
          items: itemsWithDecreasedQty,
        };
      } else {
        return cartReducer(state, { type: 'REMOVE_FROM_CART', payload: action.payload });
      }

    default:
      return state;
  }
};

export default cartReducer;