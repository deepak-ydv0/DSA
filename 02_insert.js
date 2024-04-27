// let data = [0,1,2,3,4,5,6,7,8,9]
// let newEle = 60;
// let position = 2;

// for (let i = data.length-1; i >=0; i--) {
//     // console.log(i);
//     // console.log(data[i]);
//     if (i>= position) {
//         data[i+1] =data[i]

//         if (i == position) {
//             data[i] = newEle
           
//         }
//     }
    
// }
// console.log(data);

/********** */
let data = [0,1,2,3,4,5,6,7,8,9]
let position = 3
let newEle = 100 
function insert() {
    for (let i = data.length -1; i >= 0; i--) {
        if (i >= position) {
            data[i+1] = data[i]
            if (i == position) {
               data[i] = newEle;
            }
        }
        
    }  
    return data  
}
console.log(insert());
/*******/ 
data.splice(2,0,2000)
console.log(data);
