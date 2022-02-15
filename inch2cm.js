const roundingUpDecimal = (tgtNum, digits) => {
  return Math.round(tgtNum * (Math.pow(10, digits)))/ (Math.pow(10, digits));
}

const inch2cm = (inch) => {
  return inch * 2.54;
}

const revPythagoreanThm = (hypotenuse, aspectH, aspectV) => {
  //result 0: horizontal_cm, 1: vertical_cm
  let result = [-1, -1]
  let hoge = Math.pow(aspectH,2) + Math.pow(aspectV,2);

  result[0] = Math.sqrt(Math.pow(hypotenuse, 2) / hoge) * aspectH;
  result[1] = Math.sqrt(Math.pow(hypotenuse, 2) / hoge) * aspectV;
  return result;
}

const inch2HVcm = (inch, aspectH = 16, aspectV = 9, digits = 2) => {
  return revPythagoreanThm(inch2cm(inch), aspectH, aspectV).map(x => roundingUpDecimal(x,digits));
}

export default inch2HVcm;