/** @format */

import React, { Component } from 'react';
import './index.css';

const Cart = ({ cart }) => {
	console.log(cart);
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
					{Object.values(cart).map((cartItem, idx) => {
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
									{cartItem.cartQuantity}
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
