import { useState } from 'react'
import PropTypes from 'prop-types'
import starLogo from "/public/images/icon-star.svg"


function Rate({ onCountData, rateBtns, onResult }) {
    // State to track the selected rate
    const [ selectedRate, setSelectedRate ] = useState(null)

    // Function to handle rate button click
    const handleRateButton = (button) => {
        // Toggle the selected rate
        setSelectedRate(button === selectedRate ? null : button)
        // Pass the selected rate to the parent component
        onCountData(button)
    }

    // Function to check if a rate is selected and inform the parent component
    const checkRateButton = () => {
        // Inform the parent component whether a rate is selected or not
        selectedRate !== null ? onResult(true) : onResult(false)
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
            {/* Map through rate buttons and render them */}
            {
                rateBtns.map((button) => {
                    return (
                        <button 
                         onClick={() => handleRateButton(button)}
                         className={button === selectedRate ? "active-rate-btn" : "rate-btn"} 
                         key={button}>

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

// PropTypes to ensure the correct type of props
Rate.propTypes = {
    onCountData: PropTypes.func.isRequired,
    rateBtns: PropTypes.array.isRequired,
    onResult: PropTypes.func.isRequired,
};

export default Rate