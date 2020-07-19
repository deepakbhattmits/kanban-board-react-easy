/** @format */

import React, { useState } from 'react';
import './App.css';
import logo from './logo.svg';
import ProductList from './components/product-list';
import Cart from './components/cart';

const title = 'HackerShop';
export const PRODUCTS = [
	{
		name: 'Cap',
		price: 5,
	},
	{
		name: 'HandBag',
		price: 30,
	},
	{
		name: 'Shirt',
		price: 35,
	},
	{
		name: 'Shoe',
		price: 50,
	},
	{
		name: 'Pant',
		price: 35,
	},
	{
		name: 'Slipper',
		price: 25,
	},
];

const App = () => {
	// constructor() {
	//     super();
	const products = [...PRODUCTS].map((product, index) => {
		product.id = index + 1;
		product.image = `/images/items/${product.name.toLocaleLowerCase()}.png`;
		product.cartQuantity = 0;
		return product;
	});
	const [cartItems, setCartItems] = useState([]);
	const addToCart = (product, i) => {
		setCartItems({ ...cartItems, [i]: product });
	};

	const updateQuantity = (product, i) => {
		console.log('Update Quantity : ', product);
	};

	return (
		<div>
			<nav className='app-header layout-row align-items-center justify-content-center'>
				<div className='layout-row align-items-center'>
					<img alt='' src={logo} className='logo' />
					<h4 id='app-title' data-testid='app-title' className='app-title'>
						{title}
					</h4>
				</div>
			</nav>
			<div className='layout-row shop-component'>
				<ProductList
					products={products}
					addToCart={addToCart}
					updateQuantity={updateQuantity}
				/>
				<Cart cart={cartItems} />
			</div>
		</div>
	);
};
export default App;
