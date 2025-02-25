import Card from "./Card"
import p1 from '../assets/p1.jpg'
import p2 from '../assets/p2.jpg'
import p3 from '../assets/p3.jpg'
import p4 from '../assets/p4.jpg'
import p5 from '../assets/p5.webp'
import p6 from '../assets/p6.jpg'
import p7 from '../assets/p7.webp'

const ProductsCatalog = () => { 
    const products = [{
        title: "CB-COLEBROOK",
        price: "400",
        image: p1
    },
    {
        title: "Majestic Man Men",
        price: "89",
        image: p2
    },
    {
        title: "Leriya Fashion Textured",
        price: "159",
        image: p3
    },
    {
        title: "Lymio Regular Track",
        price: "1499",
        image: p4
    },
    {
        title: "Lymio Men's Shirt",
        price: "600",
        image: p5
    },
    {
        title: "Tee Projekt Shirt",
        price: "549",
        image: p6
    },
    {
        title: "Pinkmint ",
        price: "379",
        image: p7
    },
    {
        title: "Pinkmint ",
        price: "379",
        image: p7
    },
   
    ] 
  return (
    <section
      className="h-[100vh] flex flex-wrap w-full justify-center items-center gap-4"
      id="products"
    >
        {products.map((product,index)=>{
            return( <Card title={product.title} price={product.price} image={product.image} key={index}/>)
        })}
    </section>
  );
};

export default ProductsCatalog;
