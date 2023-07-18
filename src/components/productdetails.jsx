import React, {useContext} from 'react'
import {ShopContext} from './shopcontext'
import { PRODUCTS, PRODUCTS1 } from '../components/products';

const productdetails = (props) => {
  const { updateCartItemCount, removeToCart, addToCart, cartItems, closeProductDetails, selectedProduct } = useContext(ShopContext); 
  // Set selectProduct to 0
  const productId =  selectedProduct || 0;
  const product = PRODUCTS.find((p) => p.id === productId) || PRODUCTS1.find((p) => p.id === productId);
  return <>
    <div className="d-flex">
      <div className='col-6 card'>
        <img src={product.image} alt="" className='img-fluid p-5' />
      </div>

      <div className='col-6 card'>
        <div className="p-4">
          <span>{product.brand}</span>
          <h5 className='my-3'>{product.name}</h5>
          <div className="card-details">
            <p className='my-3'>Was <strike className='text-danger'>{product.price*2}</strike> &nbsp; Now <span className='price'>
            ${product.price}</span></p>
            <p className='mb-3'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
              Nam eligendi, numquam minima necessitatibus voluptatibus 
              quod facilis exercitationem magnam amet libero.
            </p>
          </div>

          <div className='btn'>
            <button
              className='add-button mx-2'
              onClick={() => {
                  addToCart(product.id);
              }}
              >+</button>
              <input type="text" value={cartItems[product.id]} onChange={(e) =>
              updateCartItemCount(Number(e.target.value), product.id)} />
              <button
              className='add-button mx-2'
              onClick={() => {
                  removeToCart(product.id);
              }}
              >-</button>
            </div>
            <div className="input-group p-4 mt-4">
              <input type="text" className="form-control" placeholder="Enter Coupon Code ..." />
              <button className="input-group-text m-0">Search</button>
            </div>
        </div>
        <div className="card-footer">
          <h3 className='price my-3 text-center'>More Product Of the same</h3>
          <div className="row mt-4">
          {PRODUCTS.slice(2,6).map(product => (
            <div className="col-3 my-3">
                <div key={product.id}>
                    <div className='card h-100 m-auto'>
                        <img src={product.image} alt="" className='card-img-top img-fluid m-auto p-1'/>
                    </div>
                </div>
            </div>
          ))}

          {PRODUCTS1.slice(4,7).map(product => (
            <div className="col-3 my-2">
                <div key={product.id}>
                    <div className='card h-100 m-auto'>
                        <img src={product.image} alt="" className='card-img-top img-fluid m-auto p-1'/>
                    </div>
                </div>
            </div>
          ))}
          </div>
        </div>
      </div>

    </div>
  </>
}

export default productdetails
