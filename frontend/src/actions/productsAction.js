import axios from 'axios'
import { productsFail, productsRequest, productsSuccess } from '../slices/productslice';

export const getproducts =async(dispatch)=>{
    try{
        dispatch(productsRequest())
        
        const {data} = await axios.get('/api/v1/products');
        dispatch(productsSuccess(data))

    } catch(error){
        dispatch(productsFail(error.response.data.message))


    }
  

}