import classes from './App.module.css';
import ProductData from './productData';
import ProductPreview from './ProductPreview';
import ProductDesc from './ProductDesc';
import Topbar from './Topbar';
import react, { useState } from 'react';
function App() {
  // declare use states
  const [ProductsData, setProductsData] = useState(ProductData);
  const [currentviewImagePos, setcurrentviewImagePos] = useState(0);
  const [showheartsection, setshowheartsection]=useState(true);
  const [showonFeaturedList, setshowonFeaturedList]=useState(0);
// function for click event
  const onColorOptionsClick = (pos)=>
  {
    const updatedPreviewImage = ProductsData.colorOptions[pos].imageUrl;
    setcurrentviewImagePos(pos);
  }
  const onFeaturedList = (pos)=>
  {
    setshowonFeaturedList(pos)
   if(pos===0)
   setshowheartsection(false);
   else
   setshowheartsection(true)
  }
  // return in functions
  return (
    <div className="App">
      <header className="App-header">
     <Topbar></Topbar>

      
      </header>
      <div className={classes.mainContainer}>
       
        <ProductPreview  image={ProductsData.colorOptions[currentviewImagePos].imageUrl} heartstate={showheartsection}  featurePos={showonFeaturedList} ></ProductPreview>
        
        <div className={classes.ProductData}>
         
   <ProductDesc imagepos={currentviewImagePos} data={ProductsData} onColorOptionsClick={onColorOptionsClick} featurePos={showonFeaturedList} onFeaturedListclick={onFeaturedList}></ProductDesc>
        </div>
      </div>
    </div>
  );
}

export default App;
