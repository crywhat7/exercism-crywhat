// @ts-check

/**
 * Calculates the sum of the two input arrays.
 *
 * @param {number[]} array1
 * @param {number[]} array2
 * @returns {number} sum of the two arrays
 */
export function twoSum(array1, array2) {
  const firstNumber = Number(array1.join(''))
  const secondNumber = Number(array2.join(''))
  return firstNumber + secondNumber
}

/**
 * Checks whether a number is a palindrome.
 *
 * @param {number} value
 * @returns {boolean} whether the number is a palindrome or not
 */
export function luckyNumber(value) {
  return String(value) === String(value).split('').reverse().join('')
}

/**
 * Determines the error message that should be shown to the user
 * for the given input value.
 *
 * @param {string|null|undefined} input
 * @returns {string} error message
 */
export function errorMessage(input) {
  if (!input) return 'Required field'
  input = input.trim()
  input = input.replaceAll(' ', '*')
  console.log(
    {input, isNaN: isNaN(input)}
  )
  if (isNaN(Number(input)) || Number(input) < 1) return 'Must be a number besides 0'
  return ''
}
