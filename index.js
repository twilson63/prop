// prop
//
// functional routine to get a property from an object
//
// var obj = {foo: 'bar'}
// var result = prop('foo')(obj)
//
module.exports = function(name) {
  return function(object) {
    return object[name];
  }
}

