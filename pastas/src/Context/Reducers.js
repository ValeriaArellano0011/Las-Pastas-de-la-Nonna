export const cartReducer = (state, action) => {
    switch(action.type){
        case "ADD_TO_CART":
            return {...state, cart:[...state.cart, {...action.payload, qty: 1}]}
        case "REMOVE_FROM_CART":
            console.log("el id del payload: ", action.payload.id)
            console.log("el supuesto id del state cart filter product: ", state.cart.find((product) => product.id  === action.payload.id))
            if(state.cart.find((product) => product.id === action.payload.id)){
                var productFound = state.cart.find((product) => product.id === action.payload.id)//objeto de los productos con mismo id
                return {...state, cart: state.cart.filter(product => product !== productFound)}
            }
        case "REMOVE_ONE_FROM_CART":
            var productFound = state.cart.find((product) => product.flavor === action.payload.flavor)
            return {...state, cart: state.cart.filter(product => product !== productFound)} 
        default:
            return state;
    }
}