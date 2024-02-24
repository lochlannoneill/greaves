import React from 'react'
import './Popular.css'
import data_product_women from '../Assets/products/product_data_popular_women.js'
import data_product_girls from '../Assets/products/product_data_popular_girls.js'
import data_product_men from '../Assets/products/product_data_popular_men.js'
import data_product_boys from '../Assets/products/product_data_popular_boys.js'
import { Item } from '../Item/Item'
import icon_arrow_left_right from '../Assets/icons/arrow_left_right.png'

export const Popular = () => {
  return (
    <div className='popular'>

      <div className="popular-category popular-women">
        <h1>Popular in Women</h1>
        <div className="popular-list-parent">
          <div className="popular-arrow" style={{ backgroundImage: `url(${icon_arrow_left_right})` }}></div>
          <div className="popular-list">
            <div className="popular-item">
              {data_product_women.map((item, index) => {
                return <Item key={index} id={item.id} title={item.title} img={item.image} price={item.price} price_old={item.price_old} />
              })}
            </div>
          </div>
        </div>
      </div>
      
      <div className="popular-category popular-girls">
        <h1>Popular in Girls</h1>
        <div className="popular-list-parent">
        <div className="popular-arrow" style={{ backgroundImage: `url(${icon_arrow_left_right})` }}></div>
          <div className="popular-list">
            <div className="popular-item">
              {data_product_girls.map((item, index) => {
                return <Item key={index} id={item.id} title={item.title} img={item.image} price={item.price} price_old={item.price_old} />
              })}
            </div>
          </div>
        </div>
      </div>

      <div className="popular-category popular-men">
        <h1>Popular in Men</h1>
        <div className="popular-list-parent">
        <div className="popular-arrow" style={{ backgroundImage: `url(${icon_arrow_left_right})` }}></div>
          <div className="popular-list">
            <div className="popular-item">
              {data_product_men.map((item, index) => {
                return <Item key={index} id={item.id} title={item.title} img={item.image} price={item.price} price_old={item.price_old} />
              })}
            </div>
          </div>
        </div>
      </div>

      <div className="popular-category popular-boys">
        <h1>Popular in Boys</h1>
        <div className="popular-list-parent">
        <div className="popular-arrow" style={{ backgroundImage: `url(${icon_arrow_left_right})` }}></div>
          <div className="popular-list">
            <div className="popular-item">
              {data_product_boys.map((item, index) => {
                return <Item key={index} id={item.id} title={item.title} img={item.image} price={item.price} price_old={item.price_old} />
              })}
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}
