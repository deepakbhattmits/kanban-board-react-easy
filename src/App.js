/** @format */

import React, { useState, useEffect } from 'react';
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
	const productsMap = [...PRODUCTS].map((product, index) => {
		product.id = index + 1;
		product.image = `/images/items/${product.name.toLocaleLowerCase()}.png`;
		product.cartQuantity = 0;
		return product;
	});
	const [showCart, setShowCart] = useState(false);
	const [cartItems, setCartItems] = useState([]);

	const [products, setProducts] = useState([]);
	const addToCart = (product, i) => {
		setShowCart(true);
		setCartItems({ ...cartItems, [i]: product });
	};

	const updateQuantity = (page, product, i) => {
		if (page !== 'list') {
			setCartItems({ ...cartItems, [i - 1]: product });
		}
		setProducts({ ...products, [i - 1]: product });
	};

	useEffect(() => {
		setProducts(productsMap);
	}, []);

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
				<Cart
					cartItems={cartItems}
					updateQuantity={updateQuantity}
					renderCart={showCart}
				/>
			</div>
		</div>
	);
};
export default App;
