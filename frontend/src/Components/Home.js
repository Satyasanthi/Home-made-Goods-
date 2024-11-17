import { useState,useEffect } from "react";
import './Home.css';
import axios from "axios";
import Product from '../Components/Product/Product';
import { useLocation } from 'react-router-dom';
function Home() {
    const location = useLocation();

  // Parse query parameters
  const params = new URLSearchParams(location.search);
  let search = params.get('search') || '';
  let t=params.get('category')||'';
    const [SelectedCategory,setSelectedCategory]=useState(t || 'all');
    const filterP=(category)=>{
        setSelectedCategory(category);
      };
      const [allproducts, setAllproducts] = useState([]);
  useEffect(() => {
    const fetchP = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/images`);
        setAllproducts(response.data);
       } catch (error) {
        console.error('Error fetching :', error);
       }
     };
    fetchP();});
    return ( 
        <div className="hall">
            <section className="hpart1">  
                <button onClick={()=>filterP("all",{search},{t})} className='hbb'>All</button>        
                <button onClick={()=>filterP("sweets",{search},{t})} className='hbb'>Sweets</button> 
                <button onClick={()=>filterP("designs",{search},{t})} className='hbb'>Desgins</button>         
                <button onClick={()=>filterP("hot",{search},{t})} className='hbb'>Hot</button>         
                <button onClick={()=>filterP("flower",{search},{t})} className='hbb'>Flower</button>
                <button onClick={()=>filterP("cakes",{search},{t})} className='hbb'>Cakes</button>         
                <button onClick={()=>filterP("veg",{search},{t})} className='hbb'>Vegtables</button>  
            </section>
            <div className="hpart2">
                    {allproducts
                        .filter(product => (
                            (SelectedCategory === "all" || SelectedCategory === product.category) && 
                            // Ensure product.title is a string before calling toLowerCase
                            (product.title && product.title.toLowerCase().includes(search.toLowerCase()))
                        ))
                        .map((product) => (
                            <Product
                                key={product.id}
                                Id={product.id}
                                imagurl={`http://localhost:5000${product.imageurl}`}
                                title={product.title}
                                cost={product.cost}
                                descr={product.descr}
                                ldescr={product.large_description}
                                originalName={product.title}
                                scount={product.scount}
                                acount={product.acount}
                                rating={product.rating}
                                pro={product}
                            />
                        ))}
                </div>
            </div>
     );
}

export default Home;