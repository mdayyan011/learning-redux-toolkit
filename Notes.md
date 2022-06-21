## Q1.) How to perform routing in react?

-> We can perform routing using react router
step 1. install react router
step 2. in app.js use BrowserRouter, Routes, Route
step3. import all of them from react router
step4. <BrowserRouter>
<Routes>
<Route path='/' element={<Home />}></Route>
<Route path='/cart' element={<Cart />}></Route>
</Routes>
</BrowserRouter>

## Q2.) How to perform href in react?

->We can perform href using link tag from react-router-dom as following:-

<Link to='/'>
        Home
      </Link>

## Q3.) How to call an api OR how to use useEffect?

-> Rules and step of useEffect
step 1. useEffect()
step 2. it take one callbackfunction and one empty array
step 3.useEffect(()=>{},[])
step 4. inside callback function write another function and call it
ex useEffect(()=>{
const fetchProduct=async()=>{

}
fetchProduct
})
step 5. inside calling function
const response=await fetch('url');
const data=response.json();
console.log(data);

step 6. after calling we will set the value to state

## Q.) When to use redux?

When we have to deal with state.
step 1. install redux/toolkit and react-redux

## Q.) Create a folder called store in src.

Inside store we will create all the slice

## Q.) What to do in slice file of store?

step1: import createSlice
step2: create slice
step3: create slice takes an object as parameter
step4: this object contains name,initialState,reducers
step5. in reducers write function as
reducers://s is must
{
add(){

},
remove(){

}
}

step5: in add take two parameter as state and action
step6. write state.push(action.payload)
add(state, action) {
state.push(action.payload);
}

step7. remove elements using filter
state = state.filter((item) => item.id != action.payload);

step8. export your action and reducers

export const { add, remove } = cartSlice.actions;//s in action is must
export default cartSlice.reducer;//no s is must

## Q.) How will you configure store?

-> import configureStore
create configure store just like slicestore and pass one object to it
this object will take reducer:

inside reducer give key value pair of reducer//reducer must not have s
export store

Wrap the entire application inside provider by importing it from react-redux

## How to handle click

will give onClick and in that will pass a method.
now task is to add this product to redux store
so will have to do the following
will have to dispatch action

## how to use useDispatch

import {useDispatch} from 'react-redux';\
initialise it as
const dispatch = useDispatch();

now in function
dispatch()
inside it call action by importing the action.
dispatch(add(product))

inside add need to pass payload

## How to get data from the store?

we will use one hook called useSelector

## how to use useSelector

const items=useSelector()
this takes one function with state as parameter
this paramater will be the thing which we want to subscribe
eg
const items=useSelector((state)=>state.cart)

in onClick there must be a function as
<button onClick={() => handleRemove(product.id)} className='btn-red'>
not
<button onClick={ handleRemove(product.id)} className='btn-red'>

for removing something from state following is not valid
state = state.filter((item) => item.id !== action.payload);

but we must return it like
return state.filter((item) => item.id !== action.payload);
