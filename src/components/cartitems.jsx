import React, { useContext } from 'react'
import { ShopContext } from './shopcontext'


const cartitems = (props) => {
    const {id, name, image, price, brand} = props.data;
    const { viewProductDetails, addToCart, cartItems, removeToCart, updateCartItemCount } = useContext(ShopContext); 
    return <>
        
                <tbody key={id}>
                    <tr>
                      <td className='col-2'>
                          <div className="p-2">
                            <img src={image} alt="" className='img-fluid'/>
                          </div>
                      </td>
                      <td className='col-4'>
                        <p>Produc Brand: <span className="price">{brand}</span></p>
                        <p>Product Name: <h6 className='price'>{name}</h6></p>
                        <p>Price: <span className='price'>{price}</span></p>
                        <p>Items In Stock: <span className="text-danger">1000</span></p>
                      </td>
                      <td>
                          <button
                          className='add-button mx-2'
                          onClick={() => {
                              addToCart(id);
                          }}
                          >+</button>
                          <input type="text" value={cartItems[id]} onChange={(e) =>
                          updateCartItemCount(Number(e.target.value), id)} />
                          <button
                          className='add-button mx-2'
                          onClick={() => {
                              removeToCart(id);
                          }}
                          >-</button>
                      </td>
                      <td>
                          <div className="input-group mb-3">
                            <input type="text" className="form-control" placeholder="Enter Coupon Code ..." />
                            <button className="input-group-text m-0">Search</button>
                          </div>
                      </td>
                    </tr>
                </tbody>
    </>
}

export default cartitems
