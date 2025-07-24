import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { DataTable } from 'primereact/datatable'; // You can add more for actual table
import { Column } from 'primereact/column'; // Optional
import { DataView } from 'primereact/dataview';
import {Dialog} from 'primereact/dialog';
import {InputText} from 'primereact/inputtext';
import { FloatLabel } from 'primereact/floatlabel';


const ProductContainer = (props) => {

  const {product} = props;
  return(
    <>
    <div>
        <h1>{product.name}</h1>
        <h1>{product.price}</h1>
        <h1>{product.description}</h1>
      </div>
   </>
   )

}

const ProductFormDialog = ({visibility,currentProduct,handlers})=>{

  const {
        onHide,
        onNameChange,
        onPriceChange,
        onDescriptionChange
        } = handlers; 

  return (
    <>
      <Dialog header="Add product" visible={visibility} onHide={onHide}>
          <form>
            <div style={{
              height:"300px",
              width:"300px",
              border:"1px solid black"
              }}>
                <FloatLabel>
                  <InputText 
                    id="name"
                    name="name"
                    value={currentProduct.name}
                    onChange={onNameChange}
                  />
                  <label for="name" value ="Product Name"/>
                </FloatLabel>

                <FloatLabel>
                  <InputText 
                    id="price"
                    name="price"
                    type="number"
                    value={currentProduct.price}
                    onChange={onPriceChange}
                  />
                  <label for="price" value ="Price"/>
                </FloatLabel>
            </div>
          </form>
        </Dialog>
    </>
  );

}

export default function ProductPage() {

  const navigate = useNavigate();

  const [products, setProducts] = useState([]);
  const [currentProduct , setCurrentProduct] = useState({ name:"", price:0, description:""});
  const [visibility,setVisibility] = useState(true);

  const handlers = {
      onHide:()=> setVisibility(false),
      onNameChange:(e)=> setCurrentProduct(prev => ({...prev,name:e.target.value})),
      onPriceChange:(e)=> setCurrentProduct(prev => ({...prev,price:e.target.value})),
      onDescriptionChange:(e)=> setCurrentProduct(prev => ({...prev,description:e.target.value})),
  }

  /* Intialization I */
  const fetchProducts = () => {

    fetch("http://localhost:6969/api/product")
      .then(response => {
        if (!response.ok) throw new Error("Failed to fetch products");
        return response.json();
      })
      .then(data => data !== null && setProducts(data))
      .catch(err => console.error(err));
  };

  useEffect(() => {
      const navEntries = performance.getEntriesByType("navigation");
      const isReload = navEntries[0]?.type === "reload";
      isReload && //navigate('/'); 
     
    fetchProducts();
  }, []);

  return (
    <>
      <ProductFormDialog 
        currentProduct ={currentProduct}
        visibility = {visibility}
        handlers={handlers}
      />

      <h2>Product List</h2>
      <DataTable value={products} paginator rows={5}>
        <Column field="name" header="Product Name"/>
        <Column field="price" header="Price"/>
        <Column field="description" header="Description"/>
      </DataTable>
  
    </>
  );
}
