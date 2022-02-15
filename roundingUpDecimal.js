const roundingUpDecimal = (tgtNum, digits) => {
  return Math.round(tgtNum * (Math.pow(10, digits)))/ (Math.pow(10, digits));
}

export default roundingUpDecimal;