import './index.css'
import CartContext from '../../context/CartContext'

const CartSummary = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList} = value

      const cartCount = cartList.length

      let total = 0
      cartList.forEach(each => {
        total += each.quantity * each.price
      })

      return (
        <div className="cart-summary">
          <div className="cart-order">
            <h1 className="ord-head">
              Order Total: <span className="price">Rs {total}/- </span>
            </h1>
            <p>{cartCount} items in cart</p>
            <button type="button" className="check-btn">
              Checkout
            </button>
          </div>
        </div>
      )
    }}
  </CartContext.Consumer>
)

export default CartSummary
