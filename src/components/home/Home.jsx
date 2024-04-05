import React, { useState } from 'react'
import './home.css'
import Output from '../output/Output.jsx'


const Home = () => {
  const [nitrogen,setNitrogen] = useState(0)
  const [phosporous,setPhosporous] = useState(0)
  const [potassium,setPotassium] = useState(0)
  const [output,setOutput] = useState(false)
  const [macroValue,setMacroValue] = useState(0)
  const [cloth , setCloth] = useState('')

  const handleClick = () => {
    const macro = parseInt(nitrogen) + parseInt(phosporous) + parseInt(potassium)
    setMacroValue(macro)
    let cloth = 0
    if (macro > 5) {
      cloth = 'silk'
    }
    else {
      cloth = 'cotton'
    }
    setCloth(cloth)
    setOutput(true)
  }

  return (
    <>
    {output ? (<Output macroValue={macroValue} cloth ={cloth} />) : (
      <div className='home'>
      <div className='input'>
        <h3>Input</h3>
        <p>Enter the N,P,k values in the given boxes below respectively..</p>
      </div>
      <div className='box'>
        <div className='box-item'>
            <h4>Nitrogen :</h4>
            <input type="number" value={nitrogen} onChange={(e) => setNitrogen(e.target.value)} />
        </div>
        <div className='box-item'>
            <h4>Phosporous :</h4> 
            <input type="number" value={phosporous} onChange={(e) => setPhosporous(e.target.value)}/>
        </div>
        <div className='box-item'>
            <h4>Potassium :</h4>
            <input type="number" value={potassium} onChange={(e) => setPotassium(e.target.value)} />
        </div>
        <input className='input-field' type="submit" value="Enter" onClick={handleClick} />
      </div>
    </div>
    )}
    
    </>
  )
}

export default Home
