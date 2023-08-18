import React, { useEffect, useState } from 'react'
import Wrapper from './style'
const Counter = () => {

const [value, setvalue] = useState(0)
const [calculate, setCalculate] = useState(1)

const increase = () => {
    setvalue(value + 1)
}
const decrease = () => {
    setvalue(value - 1)
}










// Mount method
useEffect( () => {
  alert("this is Mount method   welcom to counter")
  return () => {
    alert("this is UnMount method  bye..")
  }
},[])



useEffect( () => {
  alert("this is Update method")
 setCalculate(() => value * 3) 
},[value])








  return (
  <Wrapper>
    <h1>this is counter</h1>
    <h1>
        {value}
    </h1>
    <input type="button" value="increase" onClick={increase} />
    <input type="button" value="decrease" onClick={decrease}/>
    <h1>multiply value by 3 : {calculate}</h1>
    </Wrapper>
  )
}

export default Counter
