/* eslint-disable react/prop-types */
const RadioBtn = (props) => {
    return <input type="radio" {...props} />;
};

const RateCard = ({ options, currentRateValue, onChange, onSubmit }) => {
    return (
        <div className="rate-card">
            <div className="star-container">
                <img src="icon-star.svg" alt="star icon" />
            </div>

            <div className="rating-text">
                <h2>How did we do?</h2>

                <p>
                    Please let us know how we did with your support request. All
                    feedback is appreciated to help us improve our offering!
                </p>
            </div>

            <div className="rating-radio-wrapper">
                {options.map((value, i) => (
                    <div key={i} className="rating-container">
                        <RadioBtn
                            id={`radio-${value}`}
                            className="radio-btn"
                            value={value}
                            checked={currentRateValue === value}
                            onChange={onChange}
                        />
                        <label
                            className="radio-btn-label"
                            htmlFor={`radio-${value}`}
                        >
                            {value}
                        </label>
                    </div>
                ))}
            </div>

            <button className="submit-btn" onClick={onSubmit}>
                SUBMIT
            </button>
        </div>
    );
};

export default RateCard;
