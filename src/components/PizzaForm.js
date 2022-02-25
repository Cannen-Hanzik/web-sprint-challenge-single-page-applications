import React from "react";
import { Link, Button, Route } from 'react-router-dom';

const PizzaForm = (props) =>{
   const { formVals, updateForm, submitForm, formErrors, disabled } = props;


   const onChange = (evt) =>{
      const { name, value, checked, type } = evt.target;
      const valueToUse = type ==='checkbox' ? checked : value;

      updateForm(name, valueToUse)
   }

   const onSubmit = (evt) =>{
      evt.preventDefault()
      submitForm(formVals)
   }

   return(
      <form id='pizza-form' onSubmit={onSubmit}>
         <label> Name: &nbsp;
            <input id='name-input'
               type='text'
               name='name'
               value={formVals.name}
               onChange={onChange}
            />
         </label>
         <label> Select a Size:&nbsp;
            <select id='size-dropdown'
               // doesn't take a type
               name='size'
               value={formVals.size}
               onChange={onChange}
            >
             <option value=''> Select a Pizza Size </option>  
             <option value='small'> Small </option>  
             <option value='medium'> Medium </option>  
             <option value='large'> Large </option>  
            </select>
         </label>

         <div className='toppings'>
            <label> 
               <input
                  type='checkbox'
                  name='pepperoni'
                  onChange={onChange}
                  checked={formVals.pepperoni}
                  /> pepperoni
            </label> 
            <label>
               <input
                  type='checkbox'
                  name='olives'
                  onChange={onChange}
                  checked={formVals.olives}
                  />
            </label> olives
            <label>
               <input
                  type='checkbox'
                  name='chicken'
                  onChange={onChange}
                  checked={formVals.chicken}
                  />
            </label> chicken
            <label>
               <input
                  type='checkbox'
                  name='pineapple'
                  onChange={onChange}
                  checked={formVals.pineapple}
               />
            </label> pineapple

         </div>

         <label> Special Instructions
            <input id='special-text'
               type='text'
               name='special'
               onChange={onChange}
               value={formVals.special}
            />
         </label>
         
         
         <div className='errors'>
         {disabled ? <div>{formErrors.name}</div> : null}
            <div>{formErrors.size}</div>
            <div>{formErrors.chicken}</div>
            <div>{formErrors.pepperoni}</div>
            <div>{formErrors.special}</div>
         </div>


         <button 
            id='order-button' 
            type='submit' 
            name='submitBtn' 
            disabled={disabled}
            > Add to Order 
         </button>
         
      </form>
   )
}

export default PizzaForm;