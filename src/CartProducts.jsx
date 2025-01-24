import {BrowserRouter,Routes,Route,Link} from "react-router"
function CartProducts(props) {
  return (
    <div className="w-full h-screen bg-gray-100 overflow-y-auto">
    <div className="flex justify-between bg-blue-300 p-5 ">
      <div className="font-bold text-xl">CartCrave</div>
      <div className="font-bold text-xl flex">
        <div ><nav><Link to="/cart"  >Cart</Link></nav></div>
        <div >{`(${props.cartTotal})`}</div>
      </div>
    </div>
   
      <div className="w-full h-5/6 bg-gray-100 flex flex-col items-center justify-center p-4 ">
        <div className='w-full md:1/6 lg:w-3/6 h-5/6 bg-gray-100 overflow-y-auto rounded-lg shadow-lg p-4'>
          <div className='flex justify-between space-y-4'>
            <div className="text-xl font-bold">Review Order</div>
            <Link className="bg-blue-800 text-white p-2 hover:bg-blue-600 text" to="/">x</Link></div>
          <div>{props.isCartEmpty ? <div className="text-center font-bold text-xl mx-auto"> No products Found</div> :
            <div className="flex flex-col justify-between mb-8 p-4">
               <div className="w-full grid hidden md:grid-cols-3 ">
                <div className="text-center  font-bold text-lg">Items</div>
                <div className="text-center  font-bold text-lg">Qty</div>
                <div className="  font-bold text-lg">Price</div>
                <div></div>
                </div>{
             
              props.cart.map((cartProduct, index) => (
                <div key={index} className="w-full grid grid-cols-1 md:grid-cols-3 items-center mb-8 bg-white rounded-lg shadow-lg p-2">
                 <div className="flex flex-col "> <div className='p-4'><img src={cartProduct.image} alt="image " className='w-20 h-20 '></img></div>
                  <div className='flex justify-between items-center p-4'>
                    <div className=' text-sm font-bold text'>{cartProduct.title}</div>
                    </div> </div>
                    <div className='text-center text-sm font-bold text '><button className="border border-black p-2 hover:bg-gray-200" onClick={()=>{props.increment(cartProduct);}}>+</button> <span>{`${cartProduct.quantity}`}</span><button className="border border-black p-2 hover:bg-gray-200 " onClick={()=>{props.decrement(cartProduct);}}>-</button></div>
                   <div className="flex justify-between"> <div className='text-center text-sm font-bold text '>{(cartProduct.quantity)*(cartProduct.price)}</div>    
                    <div className=""><button className="bg-red-800 p-1 text-white hover:bg-red-600" onClick={() => { props.removeCart(props.cart, index); }} >remove</button></div>
                   </div>
                 
                </div>
              ))
            }
            <hr className=" mb-8"></hr>
             <div className="w-full grid grid-rows-1 md:grid-rows-3 ">
               <div className="grid grid-cols-3  p-2"><div className=" text-lg">SubTotal</div><div></div><div className='font-bold text-lg text-start'>{`Rs ${parseFloat(props.totalAmount.toFixed(2))}`}</div></div> 
               <div className="grid grid-cols-3 p-2 "> <div className=" text-lg">Discount(10%)</div><div></div><div className='font-bold text-green-500 text-lg text-start'>{`-${parseFloat(((props.totalAmount)*(0.1)).toFixed(2))}(Rs)`}</div></div> 
               <div className="grid grid-cols-3 p-2 ">  <div className=" font-bold text-lg">Grand Total</div><div></div><div className='font-bold text-lg text-start'>{`Rs ${parseFloat(((props.totalAmount)-((props.totalAmount)*(0.1))).toFixed(2))}`}</div></div> 
                <div></div>
                </div>
              {/* <div className="w-full flex justify-between text-lg font-bold ">
                <div></div>
                <div className='flex justify-between p-4'>
                  <div>TotalAmount-</div>
                  <div>{props.totalAmount}</div>
                </div>
                <div></div>
              </div> */}
                        <div className="w-full"><div className="w-1/3 text-black-100 text-lg rounded-lg font-bold bg-blue-300 text-center p-2 mx-auto mb-8">Process Order</div></div>

            </div>

          }</div>
        </div>
      </div>
      </div>
  );
}
export default CartProducts