import { useState } from "react";
import RateCard from "./RateCard";
import ThankYouCard from "./ThankYouCard";

function RatingProces() {
    const [currentRateValue, setRateValue] = useState(null);
    const [submited, setSubmit] = useState(false);

    const options = [1, 2, 3, 4, 5];

    const handleRadioChange = (e) => {
        setRateValue(Number(e.target.value));
    };

    const handleBtnSubmit = () => {
        setSubmit(!submited);
    };

    return (
        <>
            {!submited ? (
                <RateCard
                    options={options}
                    currentRateValue={currentRateValue}
                    onChange={handleRadioChange}
                    onSubmit={handleBtnSubmit}
                />
            ) : (
                <ThankYouCard value={currentRateValue} />
            )}
        </>
    );
}

export default RatingProces;
