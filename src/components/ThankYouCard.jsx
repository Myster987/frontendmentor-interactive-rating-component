/* eslint-disable react/prop-types */
function ThankYouCard({ value }) {
    return (
        <div className="thank-you-card">
            <img src="illustration-thank-you.svg" alt="Thank you image" />

            <p className="selected-of">You selected {value} out of 5</p>

            <div className="rating-text">
                <h2>Thank you!</h2>
                <p>
                    We appreciate you taking the time to give a rating. If you
                    ever need more support, don&apos;t hesitate to get in touch!
                </p>
            </div>
        </div>
    );
}

export default ThankYouCard;
