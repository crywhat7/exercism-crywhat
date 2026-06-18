/// <reference path="./global.d.ts" />
// @ts-check

export function cookingStatus(remainingTime) {
  if (remainingTime === undefined) return 'You forgot to set the timer.'
  if (remainingTime === 0) return 'Lasagna is done.'
  return 'Not done, please wait.'
}

export function preparationTime(layers, avgMinutes) {
  if (avgMinutes === undefined) avgMinutes = 2

  return layers.length * avgMinutes
}

export function quantities(layers) {
  let gramsOfNoodles = 0
  let litersOfSauce = 0
  for (let layer of layers) {
    if (layer === 'sauce') litersOfSauce += 0.2
    if (layer === 'noodles') gramsOfNoodles += 50
  }

  return { noodles: gramsOfNoodles, sauce: litersOfSauce }
}

export function addSecretIngredient(friendsList, myList) {
  myList.push(friendsList[friendsList.length - 1])
}

export function scaleRecipe(recipe, scaleAmount) {
  let scaledRecipe = {}
  for (let ing in recipe) {
    scaledRecipe[ing] = (recipe[ing] / 2) * scaleAmount
  }
  return scaledRecipe
}