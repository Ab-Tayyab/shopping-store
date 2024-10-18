// actions/cartActions.js
import menDataCollection from "../../components/data/menCollections";

export const addToCart = (id) => {
    const item = menDataCollection.find(prod => prod.id === id);
    if (!item) {
      console.error(`Item with id ${id} not found.`);
      return { type: 'ADD_TO_CART_FAILURE' }; // Optionally handle failure
    }
    return {
      type: 'ADD_TO_CART',
      payload: {
        id: item.id,
        name: item.name,
        price: item.price,
        img: item.img,
        // Include other necessary properties
      },
    };
  };
  

  export const removeFromCart = (itemId) => ({
    type: "REMOVE_FROM_CART",
    payload: itemId,
  });
  
  export const increaseQty = (itemId, menDataCollection) => ({
    type: "INCREASE_QTY",
    payload: {
      itemId,
      menDataCollection,
    },
  });
  
  export const decreaseQty = (itemId) => ({
    type: "DECREASE_QTY",
    payload: itemId,
  });
  