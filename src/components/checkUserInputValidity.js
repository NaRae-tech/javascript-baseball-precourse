function lengthValidity(userInput) {
  return (userInput.length === 3) ? true : false;
}
function typeValidity(userInput) {
  return (parseInt(userInput) !== NaN) ? true : false;
}
function duplicationValidity(userInput) {
  const setUserInput = new Set(userInput);
  return (userInput.length === setUserInput.size) ? true : false;
}
function rangeValidity(userInput) {
  const range = [...Array(10).keys()].splice(1);
  for (let i = 0; i < userInput.length; i++){
    if (!range.includes(parseInt(userInput[i]))) {
      return false;
    }
  }
  return true;
}
export function CheckUserInputValidity(userInput) {
  if (!lengthValidity(userInput)) {
    return false;
  }
  if (!typeValidity(userInput)) {
    return false;
  }
  if (!duplicationValidity(userInput)) {
    return false;
  }
  if (!rangeValidity(userInput)) {
    return false;
  }
  return true;
}