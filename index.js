// Your code here
function mapToNegativize(sourceArray){
    return sourceArray.map(i => i * -1)
}

function mapToNoChange(arr){
    return arr.map(i => i)
}

function mapToDouble(arr){
    return arr.map(i => i * 2)
}

function mapToSquare(arr){
    return arr.map(i => i * i)
}

function reduceToTotal(arr, start=0) {
    let total = start
    for (let i = 0; i < arr.length; i++ ) {
      total = total + arr[i]
    }
    return total
  }
  
  function reduceToAllTrue(arr) {
    for (let i = 0; i < arr.length; i++ ) {
      if (!arr[i]) return false
    }
    return true
  }
  
  function reduceToAnyTrue(arr) {
    for (let i = 0; i < arr.length; i++ ) {
      if (arr[i]) return true
    }
    return false
  }