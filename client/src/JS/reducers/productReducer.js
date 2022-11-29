import { ADD_PRODUCT_FAILED, GET_ALL_PRODUCTS_FAILED, GET_ALL_PRODUCTS_SUCCESS, LOADING } from "../actionTypes/productTypes";

const initState = {
    loading:true,
    error:null,
    list:[],

}
export const productReducer=(state=initState,{type, payload})=>{
    switch (type) {
        case LOADING:
            return {...state,loading:true}
        case GET_ALL_PRODUCTS_SUCCESS:
            return{...state,loading:false,list:payload}
        case GET_ALL_PRODUCTS_FAILED:
        case ADD_PRODUCT_FAILED:
        return{...state,loding:false,error:payload}
        default:
            return state;
    }
}