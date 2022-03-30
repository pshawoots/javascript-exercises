const ftoc = function(input)  {
  let celsius = (input - 32) * 5/9;
  celsius = Math.round(celsius * 10)/10;
  return celsius;
};

const ctof = function(input) {
  let fahr = input * 9/5 + 32;
  fahr = Math.round(fahr * 10)/10;
  return fahr;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
