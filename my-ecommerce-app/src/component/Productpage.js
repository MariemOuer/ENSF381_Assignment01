import React, { Component } from 'react';
import './styles.css'; 


// Import images
import airJordanMensGolfShoes from './images/air-jordan--mens-golf-shoes-ZgQdl6.png';
import airJordan6RetroYellowMensShoes from './images/air-jordan-6-retro-yellow-mens-shoes.png';
import airJordan1ElementMwnShoes from './images/air-jordan-1-element-mwn-shoes.png';
import airJordan1LowSeMensShoes from './images/air-jordan-1-low-se-mens-shoes.png';
import jumpmanMvpWomensShoes from './images/jumpman-mvp-womens-shoes-v92HlS.png';
import airJordan3RetroCraftIvoryWomensShoes from './images/air-jordan-3-retro-craft-ivory-womens-shoes.png';
import airJordan1LowWomensShoes from './images/air-jordan-1-low-womens-shoes.png';
import airJordan1HighOgSatinBredWomensShoes from './images/air-jordan-1-high-og-satin-bred-womens-shoes.png';


class Shop extends Component {
 constructor(props) {
     super(props);
     this.state = {
         cartItems: [],
         products: [
             {
                 name: 'Air Jordan 1 High G',
                 imageSrc: airJordanMensGolfShoes,
                 price: '$225',
                 size: '10',
                 gender: 'men'
             },
             {
                 name: 'Air Jordan 6 Retro Yellow',
                 imageSrc: airJordan6RetroYellowMensShoes,
                 price: '$260',
                 size: '9.5',
                 gender: 'men'
             },
             {
                 name: 'Air Jordan 1 Element',
                 imageSrc: airJordan1ElementMwnShoes,
                 price: '$180',
                 size: '11',
                 gender: 'men'
             },
             {
                 name: 'Air Jordan 1 Low Se',
                 imageSrc: airJordan1LowSeMensShoes,
                 price: '$150',
                 size: '13',
                 gender: 'men'
             },
             {
                 name: 'Jumpman MVP',
                 imageSrc: jumpmanMvpWomensShoes,
                 price: '$150',
                 size: '7',
                 gender: 'women'
             },
             {
                 name: 'Air Jordan 3 Retro Craft',
                 imageSrc: airJordan3RetroCraftIvoryWomensShoes,
                 price: '$200',
                 size: '8',
                 gender: 'women'
             },
             {
                 name: 'Air Jordan 1 Low',
                 imageSrc: airJordan1LowWomensShoes,
                 price: '$120',
                 size: '8.5',
                 gender: 'women'
             },
             {
                 name: 'Air Jordan 1 High Og Satin',
                 imageSrc: airJordan1HighOgSatinBredWomensShoes,
                 price: '$190',
                 size: '10',
                 gender: 'women'
             }
         ]
     };
 }
 addToCart = (product) => {
   console.log("Adding to cart:", product.name); // Add this to trace the function calls


   this.setState(prevState => {
       const existingProductIndex = prevState.cartItems.findIndex(
           item => item.product.name === product.name
       );


       if (existingProductIndex >= 0) {
           // Product already in cart, so create a new array with updated quantity
           return {
               cartItems: prevState.cartItems.map((item, index) =>
                   index === existingProductIndex
                       ? { ...item, quantity: item.quantity + 1 }
                       : item
               )
           };
       } else {
           // Product not in cart, add it with quantity 1
           return { cartItems: [...prevState.cartItems, { product, quantity: 1 }] };
       }
   });
}








   removeFromCart = (index) => {
       this.setState(prevState => {
           const updatedCart = [...prevState.cartItems];
           updatedCart.splice(index, 1);
           return { cartItems: updatedCart };
       });
   }


   renderProduct = (product, index) => {
     return (
         <div className="product" key={index}>
             <img src={product.imageSrc} alt={product.name} className="product-img" />
             <div className="product-details">
                 <h5>{product.name}</h5>
                 <h6 className="price">{`${product.price} | Size ${product.size}`}</h6>
                 <button className="product-button" onClick={() => this.addToCart(product)}>Add To Cart</button>
             </div>
         </div>
     );
 }


   renderCartItem = (item, index) => {
     return (
         <div className="cart-item" key={index}>
             <img src={item.product.imageSrc} alt={item.product.name} />
             <div>
                 <p>{item.product.name}</p>
                 <p>{item.product.price} (x{item.quantity})</p>
                 <button onClick={() => this.removeFromCart(index)}>Remove</button>
             </div>
         </div>
     );
 }
    render() {
     const { products, cartItems } = this.state;
     const mensShoes = products.filter(product => product.gender === 'men');
     const womensShoes = products.filter(product => product.gender === 'women');
    return (
     <div>
       <div className="container">
         <h2 className="section-title">Men's Shoes</h2> {/* Static title for Men's Shoes with specific class */}
         {mensShoes.map(this.renderProduct)}
       </div>
       <div className="container">
         <h2 className="section-title">Women's Shoes</h2> {/* Static title for Women's Shoes with specific class */}
         {womensShoes.map(this.renderProduct)}
       </div>
       <div className="cart">
         <h2 className="section-title">Shopping Cart</h2>
         {cartItems.map(this.renderCartItem)}
       </div>
     </div>
   );
 }
}


export default Shop;
