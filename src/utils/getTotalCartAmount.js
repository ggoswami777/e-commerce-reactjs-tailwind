export const getTotalCartAmount = (cart) => {
  return cart?.length > 0 
    ? cart.reduce((acc, curr) => acc + curr.price * 25, 0)  
    : 0;
};
