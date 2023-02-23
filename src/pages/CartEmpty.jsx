import { Link } from "react-router-dom"

const CartEmpty = () => {
    return (
     <div className="content">
      <div className="container container--cart">
        <div className="cart cart--empty">
          <h2>Корзина пустая <icon>😕</icon></h2>
          <p>
            Вероятней всего, вы не заказывали ещё пиццу.<br />
            Для того, чтобы заказать пиццу, перейди на главную страницу.
          </p>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-JGyBEKsrSjQWZJTJ-B8uNYsOGMbtasr3YA&usqp=CAU" />
          <Link to="/" className="button button--black">
            <span>Вернуться назад</span>
          </Link>
          </div>
        </div>
      </div>
    )
}
export default CartEmpty