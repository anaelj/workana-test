import React, { useState, useEffect } from 'react'

import '../styles/Search.css';
import { ToggleColumns } from './ToggleColumns';
import { ProductList } from './ProductList';
import { FilterForm } from './FilterForm';

export const Search = (props) => {
  const [price, setPrice] = useState({ priceFrom: '', priceTo: '' });
  const [displayedProducts, setDisplayedProducts] = useState([...props.products])

  const [columns, setColumns] = useState({
    id: true,
    name: true,
    department: true,
    price: true,
    currency: true,
  });

  const onPriceInputChange = (name, value) => {
    const newPrice = {...price};
    newPrice[name] = value;
    setPrice(newPrice)
  }

  const onCheckboxClick = (name, checked) => {
    const newColuns = {...columns};
    newColuns[name] = checked;
    setColumns(newColuns);
  }

  const filterProducts = () => {
    let newDisplayedProducts = [...props.products];
    
    if (price.priceFrom !== '' ) {
      newDisplayedProducts = newDisplayedProducts.filter( product => product.price >= price.priceFrom);
    } 
    
    if ( price.priceTo !== '' ){
      newDisplayedProducts = newDisplayedProducts.filter( product => product.price <= price.priceTo);
      
    }
    
    setDisplayedProducts(newDisplayedProducts);  

  }

  useEffect(() => {
    filterProducts();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [price])
  

  // let displayedProducts = [...props.products];

  return (
    <div className="Products">
      <FilterForm
        priceFrom={price.priceFrom}
        priceTo={price.priceTo}
        onPriceInputChange={onPriceInputChange} />

      <ToggleColumns
        onCheckboxClick={onCheckboxClick}
        columns={columns} />

      <ProductList
        products={displayedProducts}
        columns={columns} />
    </div>
  );
}

export default Search;
