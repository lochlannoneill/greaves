import React, { useContext } from 'react'
import { useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { ShopContext } from '../Context/ShopContext'
import { Item } from '../Components/Item/Item'
import './CSS/ShopCategory.css'

export const ShopCategory = (props) => {
  const {products} = useContext(ShopContext);

  useEffect(() => {
    window.scrollTo(0, 0);
}, []);

  return (
    <div className="shopcategory">
      <div className="shopcategory-filter">
        <div className="shopcategory-filter-search">
          <form className="schopcatergory-filter-search-form">
            <div className="shopcategory-filter-search-bar">
              <div className="shopcategory-filter-search-icon">
                <FontAwesomeIcon icon={faSearch} />
              </div>
              <input
                className="shopcategory-filter-search-input"
                type="text"
                placeholder="Search products"
              />
            </div>
          </form>
        </div>
        <div className="shopcategory-filter-button">
          Sort by <FontAwesomeIcon icon={faChevronDown} size="2xs" />
        </div>
      </div>
      <p className="shopcategory-query">Results for '<b>products</b>'</p>
      <div className="shopcategory-products-parent">
        <div className="shopcategory-products">
          {products.map((item,index)=>{
            if (props.category===item.category) {
              return <Item key={index} id={item.id} title={item.title} img={item.image} price={item.price} price_old={item.price_old} />
            }
            else {
              return null;
            }
          })}
        </div>
        <div className="shopcategory-loadmore">
          <p className="shopcategory-loadmore-results">
            Showing <span>1-12</span> of 36 results
          </p>
          <div className="shopcategory-loadmore-button">
            <p>See More <FontAwesomeIcon icon={faChevronDown} size="2xs" /></p>
          </div>
        </div>
      </div>
    </div>
  )
}
