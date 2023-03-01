import { useContext, Fragment } from "react";

import './shop.style.scss';

import { CategoriesContext } from "../../context/categories.context";
import ProductCard from "../../components/product-card/product-card.component";

const Shop = () => {
    const { categoriesMap } = useContext(CategoriesContext);
  return (
      <Fragment>
          {  //becaue its no longer array, its map and we have to find keys
            Object.keys(categoriesMap).map((title) => (
              <Fragment key={title}>
                  <h2>{title}</h2>
                  <div className="products-container">
                  {categoriesMap[title].map((product) => (
                      <ProductCard key={product.id} product = {product} />
                  ))}
                  </div>
              </Fragment>
            ))
          }
      </Fragment>
  );
};

export default Shop;