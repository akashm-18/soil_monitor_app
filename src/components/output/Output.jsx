import React from 'react'

import './output.css'

const Output = ({macroValue,cloth}) => {
  return (
    <div>
      <div className='container'>
        <div className='title'>
            <h4>Output</h4>
            <p>The suitable crops as per the N,P,K values is displayed below:</p>
        </div>
        <div className='box'>
            <div>
                <h4>Macronutrients in % : </h4>
                <input type="text" value={macroValue} />
            </div>
            <div>
                <h4>Crop : </h4>
                <input type="text" value={cloth} />
            </div>
        </div>
      </div>
    </div>
  )
}

export default Output
