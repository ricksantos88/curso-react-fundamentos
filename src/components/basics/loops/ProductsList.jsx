import React from 'react'

import products from '../../../data/Products'

import './ProductsList.css'

const ProductList = props => {
    console.log(products)

    const getRows = () => {
        return products.map((prod, idx) => {
            return (
                <tr key={prod.id} className={idx % 2 === 0 ? 'Even' : 'Odd'}>
                    <td>{prod.id}</td>
                    <td>{prod.id}</td>
                    <td>R${prod.price}</td>
                </tr>
            )
        })
    }

    return (
        <div className='ProductsTable'>
            <table>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>name</th>
                        <th>price</th>
                    </tr>
                </thead>
                <tbody>
                    {getRows()}
                </tbody>
            </table>
        </div>
    )
}

export default ProductList