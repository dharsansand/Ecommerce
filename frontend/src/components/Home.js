import { Fragment, useEffect } from "react"
import MetaData from "./layout/metadata"
import { getproducts } from "../actions/productsAction"
import { useDispatch, useSelector } from 'react-redux';
import Loader from "./layout/loading";



export default  function Home () {
  const dispatch = useDispatch();
  const {products,loading}=useSelector((state)=>state.productsState)
  useEffect(()=>{
   dispatch( getproducts)

  },[])
    return(
      <Fragment>
        {loading ? < Loader/>:
        <Fragment>
          <MetaData title={'Home'}/>
        <h1 id="products_heading">Latest Products</h1>

    <section id="products" className="container mt-5">
      <div className="row">
        {products && products.map(product=>(
        <div className="col-sm-12 col-md-6 col-lg-3 my-3">
          <div className="card p-3 rounded">
            <img
              className="card-img-top mx-auto"
              src={product.images[0].image}
            />
            <div className="card-body d-flex flex-column">
              <h5 className="card-title">
                <a href="">{product.name}</a>
              </h5>
              <div className="ratings mt-auto">
                <div className="rating-outer">
                  <div className="rating-inner"  style={{width:`${product.ratings/5*100}%`}}></div>
                </div>
                <span id="no_of_reviews">({product.numOfReview}Reviews)</span>
              </div>
              <p className="card-text">${product.price}</p>
              <a href="#" id="view_btn" className="btn btn-block">View Details</a>
            </div>
          </div>
        </div>

        ))}

       
      </div>
    </section>
        
        </Fragment>
}
        </Fragment>
    )
}