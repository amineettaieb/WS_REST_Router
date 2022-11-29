
import axios from 'axios'
import { ADD_PRODUCT_FAILED, ADD_PRODUCT_SUCCESS, GET_ALL_PRODUCTS_FAILED, GET_ALL_PRODUCTS_SUCCESS, LOADING } from "../actionTypes/productTypes"
//get allproducts
//Get /product
export const getallproducts=()=>async(dispatch)=>{
dispatch({type:LOADING})
try {
    const{data}= await axios.get('/product')
    dispatch({type:GET_ALL_PRODUCTS_SUCCESS,payload:data.products})
} catch (error) {
    dispatch({type:GET_ALL_PRODUCTS_FAILED,payload:error})
    console.log(error)
}


}
//Add product
//POST /product/addprod
export const addproduct=(newproduct,navigate)=>async(dispatch)=>{
    dispatch({type:LOADING})
    try {
        const{data}= await axios.post('/product/addprod',newproduct)
        dispatch({type:ADD_PRODUCT_SUCCESS})
        dispatch(getallproducts())
        navigate("/products")
    } catch (error) {
        dispatch({type:ADD_PRODUCT_FAILED,payload:error})
        console.log(error)
    }
    
    
    }

