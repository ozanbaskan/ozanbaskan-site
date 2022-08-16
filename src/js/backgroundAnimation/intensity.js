const handleIntensity = (operator, objNumber) => {
  if (operator === "+" && objNumber < 200) {
    objNumber += 25;
  } else if (operator === "+" && objNumber < 500) {
    objNumber += 100;
  }
  if (operator === "-" && objNumber > 200) {
    objNumber -= 100;
  } else if (operator === "-" && objNumber > 0) {
    objNumber -= 25;
  }

  if (objNumber > 500) return 500;
  if (objNumber < 0) return 0;
  return objNumber;
};

export default handleIntensity;
