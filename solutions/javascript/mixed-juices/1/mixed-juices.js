// @ts-check
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.

/**
 * Determines how long it takes to prepare a certain juice.
 *
 * @param {string} name
 * @returns {number} time in minutes
 */
export function timeToMixJuice(name) {
  if (['Pure Strawberry Joy'].includes(name)) return 0.5
  if (['Energizer', 'Green Garden'].includes(name)) return 1.5
  if (['Tropical Island'].includes(name)) return 3
  if (['All or Nothing'].includes(name)) return 5
  
  return 2.5
}

/**
 * Calculates the number of limes that need to be cut
 * to reach a certain supply.
 *
 * @param {number} wedgesNeeded
 * @param {string[]} limes
 * @returns {number} number of limes cut
 */
export function limesToCut(wedgesNeeded, limes) {
  const priceToCut = (lime) => {
    if (lime === 'small') return 6
    if (lime === 'medium') return 8
    if (lime === 'large') return 10
    return 0
  }
  let canCut = 0
  let wasted = 0
  for (let lime of limes) {
    if (wasted < wedgesNeeded) {
      canCut++
      wasted += priceToCut(lime)
    }
  }

  return canCut
}

/**
 * Determines which juices still need to be prepared after the end of the shift.
 *
 * @param {number} timeLeft
 * @param {string[]} orders
 * @returns {string[]} remaining orders after the time is up
 */
export function remainingOrders(timeLeft, orders) {
  let usedTime = 0
  const remainingOrders = []
  for (let order of orders) {
    const timeToMix = timeToMixJuice(order)
    if (usedTime < timeLeft) {
      usedTime += timeToMix
    } else {
      remainingOrders.push(order)
    }
  }
  return remainingOrders
}
