import React from 'react'
import { useDispatch,useSelector } from 'react-redux';

const Home=()=> {

const dispatch = useDispatch();
const b = useSelector(state=>state.custom.c)


const incre = ()=>{
dispatch({
type:"increment"
})
    
}
const decre = ()=>{
    dispatch({
        type:"decrement"
        })
    
}
  return (
  <>
  <button onClick={incre}>INCREMENET</button>
  <h1>{b}</h1>
  
  <button onClick={decre}>DECREMENET</button>
  
  </>
  )
}

export default Home
