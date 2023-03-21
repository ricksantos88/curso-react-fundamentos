import React from 'react';

import './ProductTable.css'
import ProductsList from '../../data/Products';

const ProductsTable = props => {

    const getLinhas = () => {
        return ProductsList.map((product, i) => {
            return (
                <tr key={product.id} 
                    className={i % 2 === 0 ? 'Even' : 'Odd'}>
                    <td>{product.id}</td>
                    <td>{product.name}</td>
                    <td>R$ {product.price.toFixed(2).replace('.', ',')}</td>
                </tr>
            )
        })
    }

    return (
        <div className="ProductsTable">
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Nome</th>
                        <th>Preço</th>
                    </tr>
                </thead>
                <tbody>
                    {getLinhas()}
                </tbody>
            </table>
        </div>
    );

}

export default ProductsTable