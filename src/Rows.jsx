 import React from 'react'
 import './Rows.css'
 import Squares from './Squares'
const Rows = () => {
  return (
    <div>
      <div className='game-row'>
        <Squares row_value={0} />
      </div>
      <div className='game-row'>
      <Squares row_value={1}/>
      </div>
      <div className='game-row'>
      <Squares row_value={2} />
      </div>
    </div>
  )
}

export default Rows
