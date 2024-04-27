let data = [10,11,12,13,14,15,16,17]
let search = 17

// for (let i = 0; i < data.length; i++) {
//     if (data[i] == search) {
//         console.log(`exist`);
//         break;
//     }
    
// }
// console.log(data.indexOf(search));


/***************** */
function searchItem() {
   for (let i = 0; i < data.length; i++) {
    if (data[i] == search) {
    
        return "Exist"
    }
    
   }
   
}
console.log(searchItem());



// console.log(data.includes(13));
