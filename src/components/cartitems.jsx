import React, { useContext } from 'react'
import { ShopContext } from './shopcontext'


const cartitems = (props) => {
    const {id, name, image, price, brand} = props.data;
    const { viewProductDetails, addToCart, cartItems, removeToCart, updateCartItemCount } = useContext(ShopContext); 
    return <>
        <section className="cart-item p-5">
            <div className="container-xxl">
                <div key={id} className="row">
                    <table class="table">
                        <thead>
                          <tr>
                            <th>Product Image</th>
                            <th>Product Details</th>
                            <th>Edit</th>
                            <th>Coupons</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>
                                <img src={image} alt="" className='img-fluid'/>
                            </td>
                            <td>
                                <p>{brand}</p>
                                <p>{name}</p>
                                <p>{price}</p>
                            </td>
                            <td>
                                <button
                                className='add-button'
                                onClick={() => {
                                    addToCart(id);
                                }}
                                >+</button>

                                <input type="text" value={cartItems[id]} onChange={(e) =>
                                updateCartItemCount(Number(e.target.value), id)} />

                                <button
                                className='add-button'
                                onClick={() => {
                                    removeToCart(id);
                                }}
                                >-</button>
                            </td>
                            <td>
                                <div className="input-group mb-3">
                                  <input type="text" className="form-control" placeholder="Recipient's username" />
                                  <span className="input-group-text m-0">Search</span>
                                </div>
                            </td>
                          </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    </>
}

export default cartitems
