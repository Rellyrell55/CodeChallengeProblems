
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





var gameOfLife = function(board) {
    //Make a 2d array for all possibilities for direction (8)
    let dirs = [
        [0, -1],
        [0, 1],
        [1, 0],
        [-1, 0],
        [1, 1],
        [1, -1],
        [-1, 1],
        [-1, -1]
    ];
    // number of rows
    let r = board.length;
    
    //number of columns 
    let c = board[0].length
    
    //Creating a new board with same demetions of the input filled with 0 
    let b = new Array(r).fill(0).map(() => new Array(c).fill(0));

    //the start for looping trough both rows and coulmns 
    for (let i = 0; i < r; i++) {
        for (let j = 0; j < c; j++) {
            
            //start a count to find all the lifes
            let count = 0;
            
            //now loop through the directions 
            for (let k = 0; k < 8; k++) {
                
                //making new rows in coulmns with the re
                let i1 = i + dirs[k][0];
                let j1 = j + dirs[k][1];

                //Check for out of bounds the new board
                //if out of bounds will come back as undefined other wise incement count
                if (board[i1] && board[i1][j1] == 1) count++

            }


            // Determine if live or dead
            if (board[i][j] == 1) {
                //live cell if count is = to 3 or 2
                if (count == 2 || count == 3) {
                    b[i][j] = 1
                }
            } else {
                //dead cell
                //becomes live cell if count is = 3
                if (count == 3) {
                    b[i][j] = 1
                }
            }
        }
    }
    //must return original board so a loop to make the boards the same
    for (let i = 0; i < r; i++) {
        for (let j = 0; j < c; j++) {
            //input board is = to the values of created board 
            board[i][j] = b[i][j]
        }
    }

};

//Flight length i use for a code challenge for skilled
flightLength = 160

movieLength = [80, 110, 40]



function flightMoives(flightLength, movieLength){
    let watchable = false
    const movieObj = {}

    movieLength.forEach((movie)  => { 
        let target = flightLength - movie
        if (movieObj[target]){
            watchable = true
        }
        movieObj[movie] = "anything" 
    })
    return watchable
}

// Divisible sum pair from hacker rank
function divisibleSumPairs(n, k, ar) {
    let count = 0;
    for (let i = 0; i < ar.length; i++) {
        for (let j = i + 1; j < ar.length; j++) {

            if ((ar[i] + ar[j]) % k === 0) {
                count += 1;
            }
        }
    }
    return count;
}


// 751. IP to CIDR from leetCode
var ipToCIDR = function(ip, n) {
    const ipToLong = ip => ip.split('.')
        .reduce((acc, x) => 256 * acc + parseInt(x), 0);
    
    const longToIp = long => [24, 16, 8, 0].map(i => (long >>> i) % 256).join('.');
    const bitLength = num => Math.floor(Math.log2(num)) + 1;
    const ans = [];
    
    let long = ipToLong(ip);
    
    while (n) {
        let mask = Math.max(
            33 - bitLength(long & -long),
            33 - bitLength(n)
        );
        
        ans.push(longToIp(long) + '/' + mask);
        long += 1 << (32 - mask);
        n -= 1 << (32 - mask);
    }
    
    let temp = ans.map(a => a = a === '0.0.0.0/Infinity' ? '0.0.0.0/32' : a);

    return temp;
};