
exports.min = function min (array) {
    if(typeof array === 'undefined' || array.length == 0){
        return 0;
    }
    array.sort((a, b) => a - b);
  return array[0];
}

exports.max = function max (array) {
    if(typeof array === 'undefined' || array.length == 0){
        return 0;
    }
    array.sort((a, b) => a - b);
  return array[array.length - 1];
}

exports.avg = function avg (array) {
    if(typeof array === 'undefined' || array.length == 0){
        return 0;
    }
    let sum = array.reduce((a, b) => a + b);
    let avg = sum / array.length;
  return avg;
}
