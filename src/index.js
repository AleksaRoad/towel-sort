module.exports = function towelSort (matrix) {
if(matrix === undefined) {
  return []}

  let arrEven = [];
  
  for (let i = 1 ; i < matrix.length; i += 2){
    arrEven.push(matrix[i]);
  };
  
  arrEven.forEach(rev => rev.reverse());
  
  let arrOdd = [];
  
  for (let i = 0; i < matrix.length; i += 2){
  arrOdd.push(matrix[i]);
  };
  
  let arrCon = [];
  arrCon = arrEven.concat(arrOdd)
  let sortArr = arrCon.sort((a,b) => a[0] - b[0])
sortArr = sortArr.flat()


  return sortArr;
}
