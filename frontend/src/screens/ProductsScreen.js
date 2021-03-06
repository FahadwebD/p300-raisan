import React,{ useEffect, useState } from 'react';
import {Link} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import { signin } from '../actions/userAction';
import { saveProduct } from '../actions/productActions';



function ProductsScreen(props) {

    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [image, setImage] = useState('');
    const [brand, setBrand] = useState('');
    const [category, setCategory] = useState('');
    const [countInStock, setCountInStock] = useState('');
    const [description, setDescription] = useState('');
    
    const productSave = useSelector((state) => state.productSave);
    const  { loading: loadingSave, success: successSave, error: errorSave} = productSave;


   const dispatch = useDispatch();
  
   useEffect(() => {
       
      
       return() => {
           //
       };
   }, []);

  const submitHandler =(e) =>{
      e.preventDefault();

      dispatch(saveProduct({name, price,image,brand,category, countInStock,description}));
  }
    return <div className="form">
        <form onSubmit={submitHandler}>
            <ul className="form-container">
                <li>
                    <h2>Create Product</h2>
                </li>
                <li>
          {loadingSave && <div>Loading...</div>}
          {errorSave && <div>{errorSave}</div>}
        </li>
                <li>
                    <label htmlFor='name'>
                        Name
                    </label>
                    <input type="text" name="name" value={name} id="name" onChange={(e) => setName(e.target.value)}>

                    </input>
                </li>
                <li>
                    <label htmlFor='price'>
                        Price 
                    </label>
                    <input type="price" name="price" value={price} id="price" onChange={(e) => setPrice(e.target.value)}>

                    </input>
                </li>
                <li>
                    <label htmlFor='image'>
                        Image
                    </label>
                    <input type="text" name="image" value={image} id="image" onChange={(e) => setImage(e.target.value)}>

                    </input>
                </li>
                <li>
                    <label htmlFor='brand'>
                        Brand
                    </label>
                    <input type="brand" name="brand" value={brand} id="brand" onChange={(e) => setBrand(e.target.value)}>

                    </input>
                </li>
                <li>
                    <label htmlFor='category'>
                        Category
                    </label>
                    <input type="category" name="category" value={category} id="category" onChange={(e) => setCategory(e.target.value)}>

                    </input>
                </li>
                <li>
                    <label htmlFor='countInStock'>
                       countInStock
                    </label>
                    <input type="countInStock" name="countInStock" value={countInStock} id="countInStock" onChange={(e) => setCountInStock(e.target.value)}>

                    </input>
                </li>
                
               
                <li>
                    <label htmlFor='name'>
                        Description
                    </label>
                    <textarea type="description" name="description" id="description" onChange={(e) => setDescription(e.target.value)}>

                    </textarea>
                </li>
            
                <li>
                    <button type="submit" className="button primary">Create</button>
                </li>
              

            </ul>
        </form>
    </div>

}

export default ProductsScreen;