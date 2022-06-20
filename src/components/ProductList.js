import React from 'react'

export const ProductList = (props) => {
  // TODO: display appropriate header
  // TODO: display only chosen columns
  // TODO: display products as new table rows

  const {products, columns} = props;

  return (
    <div id="product-list">
      <header>
        <strong>Product List ({products.length} items)</strong>
      </header>
      <table>
        <thead>
          <tr>
            {columns['id'] &&  <th>ID</th>}
            {columns['name'] && <th>Name</th>}
            {columns['department'] && <th>Department</th>}
            {columns['price'] && <th>Price</th>}
          </tr>
        </thead>
        <tbody>
          {products.map( (product, idx) => (
          <tr key={idx}>
            {columns['id'] && <td>{product.id}</td>}
            {columns['name'] && <td>{product.name}</td>}
            {columns['department'] && <td>{product.department}</td>}
            {columns['price'] && <td>{product.price}</td>}
            {columns['currency'] && <td>{product.currency}</td>}
          </tr>

          ))}
        </tbody>
      </table>
    </div>
  )
}
