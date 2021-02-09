
//Given an array of integers
//calculate the ratios of its elements that are positive, negative, and zero.
//Print the decimal value of each fraction on a new line 
//with  places after the decimal. (Float)
//Birthday PlusMinus

//const arr = [-4,3,-9,0,4,1] 

function plusMinus(arr) {
    let posArray = []
    let negArray = []
    let zeroArray = []
    let lth = arr.length
    
    arr.forEach((num) => {
        if (Math.sign(num) < 0 ) {
            negArray.push(num)
        }
        if (Math.sign(num) > 0 ){
            posArray.push(num)
        }
        if (Math.sign(num) === 0) {
            zeroArray.push(num)
        }
    })

    let posFloat = (posArray.length / lth)
    let negFloat = (negArray.length / lth)
    let zeroFloat = (zeroArray.length / lth)
    
    // console.log(posFloat.toFixed(6))
    // console.log(negFloat.toFixed(6))
    // console.log(zeroFloat.toFixed(6))
}

// Birthday Candles
// Shouldnt work every time because of the max but passed all Test Cases
function birthdayCakeCandles(candles) {
    candles.sort((a,b) => a - b)
    
    const max = candles[candles.length - 1]
    
    return candles.filter(cH => cH === max ).length
}

//miniMaxSum 
// const arr = [1,2,3,4,5]
function miniMaxSum(arr) {
    let minSum = 0 
    let maxSum = 0 
    arr.sort()
    
    for(let i = 0; i < arr.length-1; i++ ){
        minSum += arr[i]
    }
    for(let i = 1; i < arr.length; i++ ){
        maxSum += arr[i]
    }

    //console.log(minSum, maxSum)
}

//Grading Students
// Not quit finished Problem with rounding 
function gradingStudents(grades) {
    let roundedGrades = []
    
    for(let i = 0; i < grades.length; i++){
        
        if (grades[i] < 40){
            roundedGrades.push(grades[i])
        }
        if (grades[i]+2 === Math.ceil(grades[i]/5)*5 ){
            roundedGrades.push(grades[i])
        }
    }

}

//Spelling Bee Launch 
const words = ["aaaa", "asas", "able", "ability", "actt", "actor", "access"];
const puzzles = [
  "aboveyz",
  "abrodyz",
  "abslute",
  "absoryz",
  "actresz",
  "gaswxyz"
]

const findNumOfValidWords = (words, puzzles) => {
    var sum;
    return puzzles.map(puzzle => {
      sum = 0;
      return words.reduce(
        (sum, nextWord) => sum + isValid(nextWord, puzzle),
        false
      );
    });
  };

  const isValid = (word, puzzle) => {
    let conditionOne = word.match(puzzle[0]) !== null ? true : false;
    let conditionTwo = word.split("").every(letter => puzzle.match(letter));
    return conditionOne & conditionTwo;
  };

console.log(findNumOfValidWords(words, puzzles))
