//
// This is only a SKELETON file for the 'Line Up' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const format = (name, number) => {
  let ending = 'th'
  const numberAsStr = number.toString().trim()
  const numberAsStrLength = numberAsStr.length
  const lastChar = numberAsStr[numberAsStrLength - 1]
  const lastTwoChar = numberAsStr.slice(numberAsStrLength - 2, numberAsStrLength)
  
  if (!['11','12','13'].includes(lastTwoChar)) {
    if (lastChar === '1') ending = 'st'
    if (lastChar === '2') ending = 'nd'
    if (lastChar === '3') ending = 'rd'
  }

  return  `${name}, you are the ${numberAsStr}${ending} customer we serve today. Thank you!`
};
