import './SeasonDisplay.css'
import React from 'react'

const seasonConfig = {
    summer : {
        text : "Yayy let's hit beach",
        iconName : 'sun'
    },
    winter: {
        text : "Burr, Its Chilly",
        iconName : 'snowflake'
    }
}
const getSeason = (lat, month) => {

    if (month > 2 && month < 9) {
        return lat > 0 ? 'summer' : 'winter'
    }
    else {
        return lat < 0 ? 'summer' : 'winter'
    }
};
const seasonDisplay = props => {
    const season = getSeason(props.lat, new Date().getMonth());
    const {text, iconName} = seasonConfig[season];

    return (
        <div className={`season-display ${season}`}>
            <i className={`${iconName} left-icon icon massive`} />
            <h1>
                {text}
            </h1>
            <i className={`${iconName} right-icon icon massive`} />
        </div>
    );
};

export default seasonDisplay;