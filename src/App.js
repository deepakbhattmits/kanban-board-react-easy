import React, {Component} from 'react';
import './App.css';
import logo from './logo.svg';
import ProductList from "./components/product-list";
import Cart from "./components/cart";

const title = "HackerShop";

class App extends Component {
    constructor() {
        super();
        const products = [...PRODUCTS].map((product, index) => {
            product.id = index + 1;
            product.image = `/images/items/${product.name.toLocaleLowerCase()}.png`;
            product.cartQuantity = 0;
            return product;
        });
        this.state = {
            cart: {
                items: []
            },
            products
        };
        this.addToCart = this.addToCart.bind(this);
        this.updateQuantity = this.updateQuantity.bind(this);
    }
    
    addToCart(product, i) {
        
    }

    updateQuantity(product, i) {
        
    }
    
    render() {
        return (
            <div>
                <nav className="app-header layout-row align-items-center justify-content-center">
                    <div className="layout-row align-items-center">
                        <img alt="" src={logo} className="logo"/>
                        <h4 id="app-title" data-testid="app-title" className="app-title">{title}</h4>
                    </div>
                </nav>
                <div className="layout-row shop-component">
                    <ProductList products={this.state.products} addToCart={this.addToCart} updateQuantity={this.updateQuantity}/>
                    <Cart cart={this.state.cart}/>
                </div>
            </div>
        );
    }
}

export const PRODUCTS = [
    {
        name: "Cap",
        price: 5
    },
    {
        name: "HandBag",
        price: 30
    },
    {
        name: "Shirt",
        price: 35
    },
    {
        name: "Shoe",
        price: 50
    },
    {
        name: "Pant",
        price: 35
    },
    {
        name: "Slipper",
        price: 25
    }
];
export default App;
