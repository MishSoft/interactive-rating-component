import { useState } from 'react'
import Rate from './components/Rate'
import Result from './components/Result'

function App() {
  const [ countData, setCountData ] = useState(0)
  const [ resultData, setResultData ] = useState(0)
  const [ result, setResult ] = useState(false)

  return (
    <>
      {
        result ? (
          <Result count={countData} resultLength={resultData}  />
        ) : (
          <Rate selected = {(e) => setCountData(e)} length={(e) => setResultData(e)} showResult={(e) => setResult(e)} />
        )
      }
    </>
  )
}

export default App
