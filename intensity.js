const handleIntensity = (operator, objNumber) => {
  if (operator === "+" && objNumber < 200) {
    return objNumber + 25;
  }
  if (operator === "-" && objNumber > 0) {
    return (objNumber -= 25);
  }
  return objNumber;
};

export default handleIntensity;
