// @ts-check

export function getRndInteger(min, max) {
  return (Math.random() * (max - min) ) + min;
}

export function getRndIntegerMaxInclude(min, max) {
  return (Math.random() * (max - min + 1) ) + min;
}

export function getRandomNumber(min, max, maxInclude = true, floored = true) {
  const randomNumber = maxInclude ? getRndIntegerMaxInclude(min, max) : getRndInteger(min, max)

  if (floored) {
    return Math.floor(randomNumber)
  }
  
  return randomNumber
}

/**
 * Generates a random starship registry number.
 *
 * @returns {string} the generated registry number.
 */
export function randomShipRegistryNumber() {
  const min = 1000
  const max = 9999
  const randomNumber = getRandomNumber(min, max)
  return `NCC-${randomNumber}`
}

/**
 * Generates a random stardate.
 *
 * @returns {number} a stardate between 41000 (inclusive) and 42000 (exclusive).
 */
export function randomStardate() {
  const min = 41000
  const max = 42000
  return getRandomNumber(min, max, false, false)
}

/**
 * Generates a random planet class.
 *
 * @returns {string} a one-letter planet class.
 */
export function randomPlanetClass() {
  const planetaryClasses = ['D', 'H', 'J', 'K', 'L', 'M', 'N', 'R', 'T', 'Y']
  const randomIndex = getRandomNumber(0, planetaryClasses.length, false, true)
  return planetaryClasses[randomIndex]
}
