/// <reference path="./global.d.ts" />
//
// @ts-check

/**
 * Determine the price of the pizza given the pizza and optional extras
 *
 * @param {Pizza} pizza name of the pizza to be made
 * @param {Extra[]} extras list of extras
 *
 * @returns {number} the price of the pizza
 */
export function pizzaPrice(pizza, ...extras) {
  let extraCost = 0
  let pizzaCost = 0
  for (let extra of extras) {
    if (extra === 'ExtraSauce') extraCost += 1
    if (extra === 'ExtraToppings') extraCost += 2
  }
  if (pizza === 'Margherita') pizzaCost += 7
  if (pizza === 'Caprese') pizzaCost += 9
  if (pizza === 'Formaggio') pizzaCost += 10

  return pizzaCost + extraCost
}

/**
 * Calculate the price of the total order, given individual orders
 *
 * (HINT: For this exercise, you can take a look at the supplied "global.d.ts" file
 * for a more info about the type definitions used)
 *
 * @param {PizzaOrder[]} pizzaOrders a list of pizza orders
 * @returns {number} the price of the total order
 */
export function orderPrice(pizzaOrders) {
  let totalPrice = 0
  for (let order of pizzaOrders) {
    totalPrice += pizzaPrice(order.pizza, ...order.extras)
  }

  return totalPrice
  
}
