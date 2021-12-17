function lengthValidity(userInput) {
  if (userInput.length !== 3) {
    return alert('3자리 숫자를 입력해주세요.');
  }
  return true;
}
function typeValidity(userInput) {
  if (isNaN(parseInt(userInput))) {
    return alert('숫자로만 입력해주세요.');
  }
  return true;
}
function duplicationValidity(userInput) {
  const setUserInput = new Set(userInput);
  if (userInput.length !== setUserInput.size) {
    return alert('모두 다른 숫자로 입력해주세요.');
  }
  return true;
}
function rangeValidity(userInput) {
  const range = [...Array(10).keys()].splice(1);
  for (let i = 0; i < userInput.length; i++){
    if (!range.includes(parseInt(userInput[i]))) {
      return alert('1~9사이의 숫자로 입력해주세요.');
    }
  }
  return true;
}
export default function CheckUserInputValidity(userInput) {
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