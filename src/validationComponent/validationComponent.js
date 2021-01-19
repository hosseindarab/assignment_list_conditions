import React from 'react';

const validation = (props) => {
    let validationMessage = <p>Text long enough</p>;

    if (props.inputLength <= 5) {
        validationMessage = 'Text too short!'
    }
    return (
        <div>
            {validationMessage}
        </div>
    );
};

export default validation;