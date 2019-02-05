function isDefined (value) {
  return typeof value !== 'undefined';
}

function isString (value) {
  return typeof value === 'string';
}

function isNonEmptyString (value){
  return isString(value) && value.length;
}

function isFunction (value) {
  return typeof value === 'function';
}

function isArray (value) {
  return Array.isArray(value);
}

function isNonEmptyArray (value) {
  return isArray(value) && value.length;
}

function isNumber (value) {
  return typeof value === 'number';
}

function isNull (value) {
  return value === null;
}

function isRegex (value) {
  return value instanceof RegExp;
}

function isBoolean (value) {
  return typeof value === 'boolean';
}

function isObject (value) {
  return typeof value === 'object'
    && !isNull(value)
    && !isArray(value)
    && !isRegex(value);
}

function isPrimitive (value) {
  return isString(value)
    || isNumber(value)
    || isBoolean(value)
    || isNull(value);
}


module.exports = {
    isDefined,
    isString,
    isNonEmptyString,
    isFunction,
    isArray,
    isNonEmptyArray,
    isNumber,
    isNull,
    isRegex,
    isBoolean,
    isObject,
    isPrimitive
}
