// @ts-check
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.

/**
 * @typedef {function (number, number): [number, number]} CallbackType
 */

/**
 * Create a function that returns a function making use of a closure to
 * perform a repeatable 2d translation of a coordinate pair.
 *
 * @param {number} dx the translate x component
 * @param {number} dy the translate y component
 *
 * @returns {CallbackType} a function which takes an x, y parameter, returns the
 *  translated coordinate pair in the form [x, y]
 */
export function translate2d(dx, dy) {
  return (a,b) => ([a+dx, b+dy])
}

/**
 * Create a function that returns a function making use of a closure to
 * perform a repeatable 2d scale of a coordinate pair.
 *
 * @param {number} sx the amount to scale the x component
 * @param {number} sy the amount to scale the y component
 *
 * @returns {CallbackType} a function which takes an x, y parameter, returns the
 *  scaled coordinate pair in the form [x, y]
 */
export function scale2d(sx, sy) {
  return (a,b) => [a*sx, b*sy]
}

/**
 * Create a composition function that returns a function that combines two
 * functions to perform a repeatable transformation
 *
 * @param {CallbackType} f the first function to apply
 * @param {CallbackType} g the second function to apply
 *
 * @returns {CallbackType} a function which takes an x, y parameter, returns the
 *  transformed coordinate pair in the form [x, y]
 */
export function composeTransform(f, g) {
  return (x,y) => {
    // 1. Aplicamos la primera función 'f' al par inicial (x, y)
    const primerResultado = f(x, y); // Esto nos devuelve un arreglo [nuevoX, nuevoY]
    
    // 2. Extraemos esos nuevos valores intermedios
    const [intermedioX, intermedioY] = primerResultado;
    
    // 3. Se los pasamos a la segunda función 'g' y devolvemos su resultado final
    return g(intermedioX, intermedioY);
  }
}

/**
 * Return a function that memoizes the last result.  If the arguments are the same as the last call,
 * then memoized result returned.
 *
 * @param {CallbackType} f the transformation function to memoize, assumes takes two arguments 'x' and 'y'
 *
 * @returns {CallbackType} a function which takes x and y arguments, and will either return the saved result
 *  if the arguments are the same on subsequent calls, or compute a new result if they are different.
 */
export function memoizeTransform(f) {
  // Inicializamos nuestras variables de caché/memoria fuera de la función devuelta
  let lastX = null;
  let lastY = null;
  let lastResult = null;
  let hasCalled = false; // Bandera para saber si ya se ejecutó al menos una vez

  return (a, b) => {
    // Si ya se ha llamado antes y los argumentos actuales son IGUALES a los anteriores...
    if (hasCalled && a === lastX && b === lastY) {
      // Devolvemos el resultado guardado sin volver a ejecutar 'f'
      return lastResult;
    }

    // Si los argumentos son diferentes (o es la primera llamada):
    // 1. Guardamos los nuevos argumentos en memoria
    lastX = a;
    lastY = b;
    hasCalled = true;

    // 2. Calculamos el nuevo resultado ejecutando la función original
    lastResult = f(a, b);

    // 3. Devolvemos el nuevo resultado calculado
    return lastResult;
  };
}
