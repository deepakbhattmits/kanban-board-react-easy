/** @format */

import React, { useState } from 'react';
import './index.css';

const ProductList = ({ products, addToCart }) => {
	const [quantity, setQuantity] = useState({});
	return (
		<div className='layout-row wrap justify-content-center flex-70 app-product-list'>
			{products.map((product, i) => {
				return (
					<section
						className='w-30'
						data-testid={'product-item-' + i}
						key={product.id}>
						<div className='card ma-16'>
							<img
								alt='Your Cart'
								src={product.image}
								className='d-inline-block align-top product-image'
							/>
							<div className='card-text pa-4'>
								<h5 className='ma-0 text-center'>{product.name}</h5>
								<p className='ma-0 mt-8 text-center'>${product.price}</p>
							</div>
							<div className='card-actions justify-content-center pa-4'>
								<button
									className='x-small outlined'
									data-testid='btn-item-add'
									onClick={() => {
										addToCart(
											{
												...product,
												['cartQuantity']: quantity[product.id],
											},
											product.id
										);
									}}>
									Add To Cart
								</button>

								<div className='layout-row justify-content-between align-items-center'>
									<button
										className='x-small icon-only outlined'
										data-testid='btn-quantity-subtract'
										onClick={(e) => {
											if (quantity[product.id]) {
												setQuantity({
													...quantity,
													[product.id]:
														quantity[product.id] >= 2
															? quantity[product.id] - 1
															: quantity[product.id],
												});
											}
										}}>
										<i className='material-icons'>remove</i>
									</button>

									<input
										type='number'
										className='cart-quantity'
										data-testid='cart-quantity'
										value={quantity[product.id] ? quantity[product.id] : 0}
										onChange={(e) => {
											const { value } = e.target;
											setQuantity({ ...quantity, [product.id]: value });
										}}
									/>

									<button
										className='x-small icon-only outlined'
										data-testid='btn-quantity-add'
										onClick={(e) => {
											if (quantity[product.id]) {
												setQuantity({
													...quantity,
													[product.id]: quantity[product.id] + 1,
												});
											} else {
												setQuantity({
													...quantity,
													[product.id]: 1,
												});
											}
										}}>
										<i className='material-icons'>add</i>
									</button>
								</div>
							</div>
						</div>
					</section>
				);
			})}
		</div>
	);
};
export default ProductList;
