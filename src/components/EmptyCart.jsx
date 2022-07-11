import React from 'react'
function EmptyCart() {
  return(
    <div class="content">
        <div class="container container--cart">
          <div class="cart cart--empty">
            <h2>Корзина пустая <icon>😕</icon></h2>
            <p>
              Вероятней всего, вы не заказывали ещё пиццу.<br />
              Для того, чтобы заказать пиццу, перейди на главную страницу.
            </p>
            <a href="/" class="button button--black">
              <span>Вернуться назад</span>
            </a>
          </div>
        </div>
      </div>
  )
}
export default EmptyCart