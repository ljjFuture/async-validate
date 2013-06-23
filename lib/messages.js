/**
 *  Default validation error messages.
 */
var messages = {
  default: 'Validation error on field %s',
  required: 'Field %s is required',
  type: 'Field %s is not a %s',
  string: {
    min: 'Field %s must be at least %s characters',
    max: 'Field %s cannot be longer than %s characters',
    range: 'Field %s must be between %s and %s characters in length'
  },
  pattern: {
    mismatch: 'Field %s value %s does not match pattern %s'
  }
}
module.exports = messages;