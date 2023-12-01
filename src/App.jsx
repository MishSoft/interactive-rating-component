import { useState } from 'react'
import Rate from './components/Rate'
import Result from './components/Result'

function App() {
  const [ countData, setCountData ] = useState(0) // State to track count data
  const [ hasResult, setHasResult ] = useState(false) // State to track whether there's a result
  const rateBtns = [1, 2, 3, 4, 5] // Array of rate buttons

  return (
    <>
      {/* Conditional rendering based on whether there's a result */}
      {
        !hasResult ? (
          <Rate 
           // Pass functions to update state and rate buttons to Rate component
            onCountData = {setCountData}
            onResult = {setHasResult}
            rateBtns = {rateBtns}
          />
        ) : (
          <Result onCount={countData} onResultLength={rateBtns.length}  />
        )
      }
    </>
  )
}

export default App
