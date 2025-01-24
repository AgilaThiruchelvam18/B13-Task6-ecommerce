import { useState } from 'react'
import { useEffect } from 'react'
import Card from './Card'
import CartProducts from './CartProducts'
import { BrowserRouter, Routes, Route, Link } from "react-router"
function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);
  const [isCartEmpty, setIsCartEmpty] = useState(true);
  const [message, setMessage] = useState("");


  let fetchProducts = async () => {
    let productList = await fetch("https://fakestoreapi.com/products");
    let entireList = await productList.json();
    let products = entireList.map((product) => ({ ...product, quantity: 0 }))
    console.log("products=========>", products);
    setProducts(products);
  }
  let incquantity = () => {

  }
  let increment = (cardProduct) => {

    cardProduct.quantity = (cardProduct.quantity) + 1;
    setTotalAmount(parseFloat((totalAmount + cardProduct.price).toFixed(2)));
    setCart([...cart]);
  }
  let decrement = (cardProduct) => {
    console.log("cardProduct====>", cardProduct);
    console.log("cardProduct quantity====>", cardProduct.quantity);
    if (cardProduct.quantity > 1) {
      cardProduct.quantity = parseFloat((cardProduct.quantity)) - 1;
      setTotalAmount(parseFloat((totalAmount - cardProduct.price).toFixed(2)));
      setCartTotal(cartTotal - 1);
      setCart([...cart]);
    }
  }
  let addToCart = (product) => {
    let productInCart = cart.some((item) => item.id === product.id);
    let prod = cart.find((item) => item.id === product.id);

    console.log("productInCart====>", productInCart);
    if (productInCart) {

      setCartTotal(cartTotal + 1);
      increment(prod);
    }
    else {
      setMessage("");
      setCart([...cart, { ...product, quantity: 1 }]);
      setCartTotal(cartTotal + 1);
      setTotalAmount(parseFloat((totalAmount + product.price).toFixed(2)));

    }
  }
  let removeCart = (cart, index) => {
    console.log("cart=====>", cart);
    setTotalAmount(parseFloat((totalAmount - cart[index].price).toFixed(2)));
    cart.splice(index, 1);
    setCart([...cart]);
    setCartTotal(cartTotal - 1);
  }

  useEffect(() => {
    fetchProducts()
  }, []);
  useEffect(() => {
    setIsCartEmpty(cart.length === 0);
  }, [cart]);
  useEffect(() => {
    setMessage("");
  }, [cart]);
  console.log(products);
  console.log(cart);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Card incquantity={incquantity} message={message} products={products} totalAmount={totalAmount} cartTotal={cartTotal} addToCart={addToCart}></Card>}></Route>
        <Route path="/cart" element={<CartProducts incquantity={incquantity} increment={increment} decrement={decrement} message={message} isCartEmpty={isCartEmpty} totalAmount={totalAmount} cart={cart} cartTotal={cartTotal} removeCart={removeCart}></CartProducts>}></Route>
      </Routes>
    </BrowserRouter>


  )
}

export default App
