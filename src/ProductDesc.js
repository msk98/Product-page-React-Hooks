import react, { useState } from 'react';
import ProductData from "./productData";
import classes from './productdesc.module.css';
const ProductDesc = (props) =>
{
  const ColorOptions = props.data.colorOptions.map((item, pos) => {
    const classArr= [classes.productimage]
    if(pos === props.imagepos)
    {
      classArr.push(classes.selectedProductImage);
    }
    return(
      <img key={pos} className={classArr.join(' ')} src={item.imageUrl} alt={item.styleName} onClick={()=>props.onColorOptionsClick(pos)}/>

    );
  });
  const featuredLists = props.data.featureList.map((item,pos) =>{
    const classArr= [classes.featuredItem];
      if(pos===props.featurePos)
      {
        classArr.push(classes.selectedFeatureditem)
      }
      return(
        <button key={pos} onClick={()=>props.onFeaturedListclick(pos)} className={classArr.join(' ')}>{item}</button>

      )

  });
    return(
            <div>

            <h1 className={classes.Producttitle}>{props.data.title}</h1>
           <p className={classes.Producdesc}> {props.data.description} </p>

           <h3 className={classes.selectheading}>Select Color</h3>
            <div className={classes.productcolors}>
              {ColorOptions}

              </div>
              <h3 className={classes.selectheading}>Features</h3>
              <div>
            {featuredLists}
              </div>
              <button className={classes.primaryButton}>Buy Now</button>
            </div>
    );
}
export default ProductDesc;