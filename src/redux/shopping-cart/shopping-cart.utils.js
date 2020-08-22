export const addItemToCart = (cart, item) => {
  // Ffnf if the item already exists in cart
  const isItemPresent = cart.find((currentItem) => currentItem.id === item.id);

  // if already exists, increase quanity by one for matched item with id
  if (isItemPresent) {
    return cart.map((currentItem) => {
      if (currentItem.id === item.id) {
        return {
          ...currentItem,
          quantity: currentItem.quantity + 1,
        };
      } else {
        return currentItem;
      }
    });
  }
  // else return the same items with quantity set to 1
  else {
    console.log("Triggered!");
    const newCart = [...cart, { ...item, quantity: 1 }];
    return newCart;
  }
};
