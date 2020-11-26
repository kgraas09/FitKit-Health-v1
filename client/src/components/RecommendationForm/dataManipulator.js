// import React from 'react';
const formData = {step1: 1, step2: 2, step3: 3, step4: 1}

const dataManipulator = (formData) => {
  const valueAssessment = (formData) => {
    let values = Object.values(formData);
    let reducer = values.reduce((a, b) => a + b, 0);
    return reducer;
  };

  const numericalValue = valueAssessment(formData);
  
  if (formData.step8 === "0") {
    // return Helio, Black Hole, Lightyear
  } else {
    if (numericalValue > 0 && numericalValue < 4) {
      // return Parallax, Equinox, Zenith
    } else if (numericalValue >= 4 && numericalValue <= 9) {
      // return 
    }
  }
};

// export default dataManipulator;