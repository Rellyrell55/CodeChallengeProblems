
//Given an array of integers
//calculate the ratios of its elements that are positive, negative, and zero.
//Print the decimal value of each fraction on a new line 
//with  places after the decimal. (Float)

const array = [-4,3,-9,0,4,1] 

function plusMinus(arr) {
    let posArray = []
    let negArray = []
    let zeroArray =[]
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
    
    console.log(posFloat.toFixed(6))
    console.log(negFloat.toFixed(6))
    console.log(zeroFloat.toFixed(6))
}