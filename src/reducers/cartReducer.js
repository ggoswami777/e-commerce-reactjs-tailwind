export const cartReducer = (state,{type,payload}) => {
    switch(type){
        case "ADD_TO_CART":
            return{
                ...state,
                cart:[...state.cart,payload]
            }
        case "REMOVE_FROM_CART":
            return{
                ...state,
                cart: state.cart.filter(product => product.id !== payload.id)
            }
        default:
            return state
    }
    
};
