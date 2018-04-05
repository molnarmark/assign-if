module.exports = function(object, fields, expression) {
  if (expression) {
    let newObject = Object.assign(object, fields);
    return {success: true, object: newObject}
  } else {
    return {success: false, object: object}
  }
}