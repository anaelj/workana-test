import React from 'react'

export const FilterForm = (props) => {

  const {priceFrom, priceTo} = props;

  const onPriceInputChange = (e) => {
    const {value, name} = e.target;
    props.onPriceInputChange(name, Number(value));
  }

  // TODO: bind handlers and props
  return (
    <div>
      <label htmlFor="priceFrom">Price From:</label>
      <input
        type="number"
        id="priceFrom"
        name="priceFrom"
        value={priceFrom}
        onChange={onPriceInputChange}
        placeholder="Price from..." />
      <label htmlFor="priceTo">Price To:</label>
      <input
        value={priceTo}
        type="number"
        id="priceTo"
        name="priceTo"
        onChange={onPriceInputChange}
        placeholder="Price to..." />
    </div>
  )
}
