import image from "/public/images/illustration-thank-you.svg"

// eslint-disable-next-line react/prop-types
function Result({ count, resultLength }) {
  return (
    <div className="result-container">
        <img src = {image} />
        <div className="text-alert">
            You selected {count} out {resultLength}
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

export default Result