import React, { useEffect } from 'react'
import './Squares.css'
const Squares = (props) => {
    const [xCount,setXCount] = React.useState(Array(9).fill(""));
    const [xVisible,setxVisible] = React.useState(true);

    const setIndex = (index) => {

      const temp = [...xCount];
      temp[index] = xVisible ? 'x' : '0';
      setXCount(temp);
      setxVisible(!xVisible);
      console.log(temp);
      console.log(xVisible);
    }

    React.useEffect(() => {

      return function (){
        xCount
      }
    },[xCount,xVisible])
  return (
    <div>
      <div className='square' onClick={() => {setIndex(props.row_value*3 + 0)}}><h1>x</h1></div>
      <div className='square' onClick={() => {setIndex(props.row_value*3 + 1)}}><h1>x</h1></div>
      <div className='square' onClick={() => {setIndex(props.row_value*3 + 2)}}><h1>x</h1></div>
    </div>
  )
}

export default Squares
