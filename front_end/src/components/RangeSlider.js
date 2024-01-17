import React, { useState } from 'react';
import Nouislider from "nouislider-react";
import 'nouislider/distribute/nouislider.min.css';

const RangeSlider = () => {
    const [sliderValues, setSliderValues] = useState([20, 80]);

    const handleSliderChange = (values) => {
        setSliderValues(values);
    };

    return (
        <div>
            <Nouislider
                range={{ min: 0, max: 100 }}
                start={sliderValues}
                connect={true}
                onChange={handleSliderChange}
            />
            <div>Selected Values: {sliderValues.join(' - ')}</div>
        </div>
    );
};

export default RangeSlider;