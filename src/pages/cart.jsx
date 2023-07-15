import React, { useContext} from 'react'
import { PRODUCTS, PRODUCTS1 } from '../components/products';
import Cartitems from '../components/cartitems'
import { ShopContext } from '../components/shopcontext';
import { Link } from 'react-router-dom'


const cart = () => {
  const {getTotalCartAmount, ClearCart, cartItems } = useContext(ShopContext);
  const TotalAmount = getTotalCartAmount();
  return <>
    {TotalAmount > 0 ?
      <section className="cart-item p-5">
      <div className="container-xxl">
        <div className="row">
          <table>
            <thead className='my-2'>
                <th className='col-3'>Product Image</th>
                <th className='col-3'>Product Details</th>
                <th className='col-3'>Edit</th>
                <th className='col-3'>Coupons</th>
            </thead>

              {[...PRODUCTS, ...PRODUCTS1].map((product) => {
                if(cartItems[product.id] !== 0) {
                  return <Cartitems key={product.id} data={product} />
                }
              })}

              <div className="text-center my-3">
                <Link className='clear-btn' onClick={() => ClearCart(id)}>
                  Clear Cart
                </Link>
              </div>
          </table>
        </div>
      </div>

      <hr />
      
      <div className="cart-total d-flex justify-content-between">
        <div className="col-6">
          <button>Continue Shopping</button>
        </div>
        <div className="col-6">
          <h3>Totale : </h3>
          <p className="price mb-4">
            ${TotalAmount}
          </p>
          <button>
            Check Out
          </button>
        </div>
        
      </div>
    </section>
    :
    <section className="cart-item p-3">
      <div className="container-xxl">
        <div className="row">
          <div className="text-center">
            <h3>Your Cart Is Empty</h3>
            <p>click here to <Link to={'/shop'}>add items</Link></p>
          </div>
        </div>
      </div>
    </section>
    }
  </>
}

export default cart
