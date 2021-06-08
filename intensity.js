const handleIntensity = (operator, objNumber) => {
  if (operator === "+" && objNumber < 200) {
    return objNumber + 25;
  } else if (operator === "+" && objNumber < 500) {
    return objNumber + 100;
  }
  if (operator === "-" && objNumber > 200) {
    return objNumber - 100;
  } else if (operator === "-" && objNumber > 0) {
    return objNumber - 25;
  }
  return objNumber;
};

export default handleIntensity;
