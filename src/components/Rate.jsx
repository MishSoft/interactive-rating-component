import { useState } from 'react'
import starLogo from "/public/images/icon-star.svg"

// eslint-disable-next-line react/prop-types
function Rate({ selected, length, showResult }) {
    const [ rateActive, setRateActive ] = useState(null)
    const rateBtns = [1, 2, 3, 4, 5]

    length(rateBtns.length)
    const handleRateButton = (button) => {
        setRateActive(button === rateActive ? null : button)
        selected(button)
    }

    const checkRateButton = () => {
        rateActive !== null ? showResult(true) : showResult(false)
    }

  return (
    <div className='rate-board'>
        <div className='logo'>
            <img src = {starLogo} />
        </div>
        <div className='question-section'>
            <h1>How did we do?</h1>
            <p>
                Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!
            </p>
        </div>
        <div className='rate-btn-container'>
            {
                rateBtns.map((button) => {
                    return (
                        <button onClick={() => handleRateButton(button)} className={button === rateActive ? "active-rate-btn" : "rate-btn"} key={button}>
                            {button}
                        </button>
                    )
                })
            }
        </div>
        <button onClick={checkRateButton} id='submit-button'>submit</button>
    </div>
  )
}

export default Rate