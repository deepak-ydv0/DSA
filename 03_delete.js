// let data = [0,1,2,3,4,5,6,7]
// let position = 3

// for (let i = position; i < data.length-1; i++) {
//     // console.log(data[i]);
//     data[i] = data[i+1]
    
// }
// data.length = data.length - 1;
// console.log(data);

let data = [0,1,2,3,4,5,6,7]
let position = 3
// function deleteVal(){
//     for (let i = position; i < data.length; i++) {
//         data[i] = data[i+1]
        
//     }
//     data.length = data.length - 1;
//     return data
// }
//  console.log(deleteVal());

/*********************** */
data.splice(position,1)
console.log(data);


