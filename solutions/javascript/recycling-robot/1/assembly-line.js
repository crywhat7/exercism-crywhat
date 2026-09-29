// @ts-check
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.

import { ElectronicDevice } from './lib.js';

/**
 * Checks if input is a boolean.
 *
 * @param {unknown} value
 * @returns {boolean} whether the input is a boolean
 */
export function isBoolean(value) {
  return (typeof value) === "boolean"
}

/**
 * Checks if input is a finite number or bigint.
 *
 * @param {unknown} value
 * @returns {boolean} whether the input is a finite number or bigint
 */
export function isNumber(value) {
  if (Number.isNaN(value) || value === Infinity) return false
  return ['number', 'bigint'].includes(typeof value)
}

/**
 * Checks if a value is an object.
 *
 * @param {unknown} value
 * @returns {boolean} whether the input is an object.
 */
export function isObject(value) {
  if (!value) return false
  return (typeof value) === "object"
}

/**
 * Checks if a value is a numeric string.
 *
 * @param {unknown} value
 * @returns {boolean} whether the input is a numeric string.
 */
export function isNumericString(value) {
  const isArray = Array.isArray(value)
  const isSymbol = typeof value === "symbol"
  const isBoolean = typeof value === "boolean"
  if ([isArray, isSymbol, isBoolean].includes(true)) return false
  
  const isBigInt = value?.includes('n')
  if (isBigInt) return false
  
  const valueParsed = parseInt(value)
  return !(Number.isNaN(valueParsed))
}

/**
 * Checks if an object is an instance of the `ElectronicDevice` class or one of its children.
 *
 * @param {object} object
 * @returns {boolean} whether the object is an instance of the `ElectronicDevice` class or one of its children.
 */
export function isElectronic(object) {
  return object instanceof ElectronicDevice
}

/**
 * Checks if a value is a non empty array.
 *
 * @param {unknown} value
 * @returns {boolean} whether the input is a non empty array.
 */
export function isNonEmptyArray(value) {
  const isArray = Array.isArray(value)
  if (!isArray) return false
  
  return value.length > 0
}

/**
 * Checks if a value is an empty array.
 *
 * @param {unknown} value
 * @returns {boolean} whether the input is an empty array.
 */
export function isEmptyArray(value) {
  const isArray = Array.isArray(value)
  if (!isArray) return false

  return value.length === 0
}

/**
 * Checks if a value has a "type" property or method.
 *
 * @param {object} object
 * @returns {boolean} whether the input has a "type" property or method.
 */
export function hasType(object) {
  return 'type' in object
}

/**
 * Throws an error if an object is missing an "id" property or method.
 *
 * @param {object} object
 * @returns {never|void} undefined if the input has an "id" property or method, otherwise throws an error.
 */
export function assertHasId(object) {
  const hasId = 'id' in object
  
  if (!hasId) throw new Error("Debe tener un ID")
}

/**
 * Checks if a value has an "id" property.
 *
 * @param {object} object
 * @returns {boolean} whether the input has an "id" property.
 */
export function hasIdProperty(object) {
  if (object === null || typeof object !== 'object') {
    return false
  }

  return Object.hasOwn(object, 'id')
}

/**
 * Checks if a value has a defined "type" property.
 *
 * @param {object} object
 * @returns {boolean} whether the input has a defined "type" property.
 */
export function hasDefinedType(object) {
  if (!hasType(object)) return false
  if (!Object.hasOwn(object, 'type')) return false

  return object.type === null || Boolean(object.type)
}