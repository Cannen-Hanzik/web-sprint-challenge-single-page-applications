import React , { useState, useEffect } from "react";
import './App.css';
import { Route, Link, Switch } from 'react-router-dom';
import styled from 'styled-components';
import axios from 'axios';


//Importing the components
import Header from './components/Header';
import Home from './components/Home';
import Cart from './components/Cart';
import PizzaForm from './components/PizzaForm';

import * as yup from 'yup';
import schema from './validation/formSchema';

const intialVals = {
  name: '',
  size: '',

  pepperoni: false,
  olives: false,
  chicken: false,
  pineapple: false,
  special: '',
}

const intErrors = {
  name: '',
  size: '',

}

const intDisabled = true;

const App = () => {
  const [ pizzaOrder, setPizzaOrder ] = useState([]);
  const [ formVals, setFormVals ] = useState(intialVals); 
  const [ formErrors, setFormErrors ] = useState(intErrors);
  const [ disabled, setDisabled ] = useState(intDisabled);

  //onChange
  const updateForm = (inputName, inputVal) =>{
    //errors onChange
    validate(inputName, inputVal)
    //formVals onChange
    setFormVals({ ...formVals, [inputName]: inputVal})
  }
  
  //Submit Form
  const submitForm = () =>{
    const newOrder = {
      //text
      name: formVals.name.trim(),
      //dropdown
      size: formVals.size,
      //toppings
      toppings: [
        'pepperoni', 
        'olives', 
        'chicken', 
        'pineapple'].filter(tops => !!formVals[tops]),
      //text for special instructinos
      special: formVals.special.trim(),
    }
      // setPizzaOrder(pizzaOrder.concat(newOrder))    
      postNewOrder(newOrder)
  }

  //Post
  const postNewOrder = (newOrder) => {
    axios.post(`https://reqres.in/api/orders`, newOrder)
    .then(res=>{
      console.log(res.data)
      setPizzaOrder(pizzaOrder.concat(res.data))
    })
    .catch(err => {
      console.error(err)
    })
    .finally(() => {
       setFormVals(intialVals)
    })
  }
  
  
  //Validation Station//
  const validate = (name, value) => {
    yup.reach(schema, name)
      .validate(value)
      .then(() => {
        setFormErrors({ ...formErrors, [name]: ''})
      })
      .catch(err => setFormErrors({ ...formErrors, [name]: err.errors[0]})
      )
  }

  //Disable submit button if the inputs needed are not there
  useEffect(() => {
    schema.isValid(formVals)
    .then(valid =>{
      setDisabled(!valid)
    })
    .catch(err => console.error(err))
    .finally(() => ('cleaning'))
  }, [formVals])

    return (
    <div className="App">
      <h1>Lambda Eats</h1>
      <Header/>
      <Route exact path='/'>
        <Home />
      </Route>
      <Route path='/cart'>
        {!!pizzaOrder &&
          pizzaOrder.map(pizza =>{
            return <Cart key={pizza.id} pizza={pizza}/>
          })
        }
      </Route>
      <Route path='/pizza'>
        <PizzaForm
          formVals={formVals}
          submitForm={submitForm}
          updateForm={updateForm}
          formErrors={formErrors}
          disabled={disabled}
          />
          {!!pizzaOrder &&
            pizzaOrder.map(pizza =>{
              return (
              <Cart key={pizza.id} pizza={pizza}/>
              )
            })
          }
      </Route>
    </div>
  );
};
export default App;