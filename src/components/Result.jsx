import PropTypes from 'prop-types'
import thankYouImage  from "/public/images/illustration-thank-you.svg"

function Result({ onCount, onResultLength }) {
  return (
    <div className="result-container">
        <img src = {thankYouImage} />
        <div className="text-alert">
            You selected {onCount} out {onResultLength}
        </div>
        <div className="result-footer">
            <h1>Thank you!</h1>
            <p>
                We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch!
            </p>
        </div>
    </div>
  )
}

// PropTypes to ensure the correct type of props
Result.propTypes = {
  onCount: PropTypes.func.isRequired,
  onResultLength: PropTypes.array.isRequired,
};

export default Result