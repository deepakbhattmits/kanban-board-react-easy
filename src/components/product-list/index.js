/** @format */

import React, { useState } from 'react';
import './index.css';

const ProductList = ({ products, addToCart, updateQuantity }) => {
	return (
		<div className='layout-row wrap justify-content-center flex-70 app-product-list'>
			{Object.values(products).map((product, i) => {
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
									disabled={!product.cartQuantity}
									onClick={() => {
										addToCart(
											{
												...product,
												['cartQuantity']: +product.cartQuantity,
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
											updateQuantity(
												'list',
												{
													...product,
													['cartQuantity']:
														product.cartQuantity >= 1
															? +product.cartQuantity - 1
															: +product.cartQuantity,
												},
												product.id
											);
										}}>
										<i className='material-icons'>remove</i>
									</button>

									<input
										type='number'
										className='cart-quantity'
										data-testid='cart-quantity'
										value={product.cartQuantity}
										onChange={(e) => {
											const { value } = e.target;

											updateQuantity(
												'list',
												{
													...product,
													['cartQuantity']: value,
												},
												product.id
											);
										}}
									/>

									<button
										className='x-small icon-only outlined'
										data-testid='btn-quantity-add'
										onClick={(e) => {
											updateQuantity(
												'list',
												{
													...product,
													['cartQuantity']: product.cartQuantity + 1,
												},
												product.id
											);
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
