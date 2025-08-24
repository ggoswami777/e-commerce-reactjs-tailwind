import { useEffect, useState } from "react";
import { Navbar } from "../../components/Navbar";
import { getAllProducts } from "../../api/getAllProducts";
import { ProductCard } from "../../components/ProductCard";
import { useCart } from "../../context/cart-context";


export const Home=()=>{
    const[products,setProducts]=useState([]);
    const {cart}=useCart();
    console.log("cart",cart);
    useEffect(()=>{
        (async()=>{
            const data=await getAllProducts();
            setProducts(data);
        })()

    },[])
  return(
    <>
      <Navbar />
      <main className="flex flex-wrap gap-8 justify-center pt-8">
        {
            products?.length>0 && products.map((product)=>(
                <ProductCard key={product.id} product={product} />
            ))
        }
      </main>
    </>
  )
}
