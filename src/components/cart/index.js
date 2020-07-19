/** @format */

import React from 'react';
import './index.css';

const Cart = ({ cartItems, updateQuantity, renderCart }) => {
	return (
		<div className='card my-16 mr-25 flex-30'>
			<section className='layout-row align-items-center justify-content-center px-16'>
				<h4>Your Cart</h4>
			</section>
			<div className='divider' />
			<table>
				<thead>
					<tr>
						<th></th>
						<th>Item</th>
						<th className='numeric'>Quantity</th>
					</tr>
				</thead>
				<tbody>
					{renderCart &&
						Object.values(cartItems)
							.filter(
								(v, i, a) =>
									a.findIndex(
										(t) => t.place === v.place && t.name === v.name
									) === i
							)
							.reverse()
							.map((cartItem, idx) => {
								return (
									<tr
										data-testid={'cart-item-' + idx}
										key={idx + 1}
										className='slide-up-fade-in'>
										<td>{idx + 1}.</td>
										<td className='name' data-testid='cart-item-name'>
											{cartItem.name}
										</td>
										<td
											className='numeric quantity'
											data-testid='cart-item-quantity'>
											{/* {cartItem.cartQuantity} */}
											<div className='layout-row justify-content-between align-items-center'>
												<button
													className='x-small icon-only outlined'
													data-testid='btn-quantity-subtract'
													onClick={(e) => {
														updateQuantity(
															{
																...cartItem,
																['cartQuantity']:
																	cartItem.cartQuantity >= 1
																		? +cartItem.cartQuantity - 1
																		: +cartItem.cartQuantity,
															},
															cartItem.id
														);
													}}>
													<i className='material-icons'>remove</i>
												</button>

												<input
													type='number'
													className='cart-quantity'
													data-testid='cart-quantity'
													value={cartItem.cartQuantity}
													onChange={(e) => {
														const { value } = e.target;
														updateQuantity(
															{
																...cartItem,
																['cartQuantity']: value,
															},
															cartItem.id
														);
													}}
												/>

												<button
													className='x-small icon-only outlined'
													data-testid='btn-quantity-add'
													onClick={(e) => {
														updateQuantity(
															{
																...cartItem,
																['cartQuantity']: cartItem.cartQuantity + 1,
															},
															cartItem.id
														);
													}}>
													<i className='material-icons'>add</i>
												</button>
											</div>
										</td>
									</tr>
								);
							})}
				</tbody>
			</table>
		</div>
	);
};
export default Cart;
