import {BrowserRouter,Routes,Route,Link} from "react-router"
function Card(props){
return(
  <div className="w-full h-screen bg-gray-100 overflow-y-auto">
    <div className="flex justify-between bg-blue-300 p-5 ">
      <div className="font-bold text-xl">CartCrave</div>
      <div>{(props.message)?<div className="bg-white rounded-lg text-sm py-2 md:font-bold md:p-4">{props.message}</div>:<div></div>}</div>
      <div className="font-bold text-xl flex">
        <div ><nav><Link to="/cart" className="hover:cursor-pointer" >Cart</Link></nav></div>
        <div >{`(${props.cartTotal})`}</div>
      </div>
    </div>
  <div className="w-full h-screen bg-gray-100 overflow-y-auto">
      <div className="flex grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-8">{
props.products.map((product,index)=>(
<div key={index} className=" bg-white flex flex-col  items-center justify-center p-4 text-center rounded-lg shadow-lg">
       <div className=''>
        <img src={product.image} className="w-60 h-60 "></img>
        </div> 
       <div className="h-20 w-full flex justify-between text-sm font-bold mt-4 mb-2"> 
        <div className="max-w-56">{product.title}</div>
        <div >{product.price}</div>
        </div> 
        <div> <button onClick={()=>{props.addToCart(product);}} className="bg-blue-300 rounded-lg p-2 text-md font-bold text-gray-800 hover:bg-blue-400 hover:text-white hover:cursor-pointer">Add to cart</button></div> 
    </div>
)
      ) } </div>
   </div>
   </div>
);
}
export default Card