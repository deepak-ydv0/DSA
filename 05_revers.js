let data = [12,34,543,43,54,24]

function reverse(data,start,end) {
    console.log(data);
     if (start<=end) {
        let temp = data[end]
        data[end]=data[start]
        data[start]= temp
        reverse(data,start+1,end-1)
    }
    return data
}
console.log(reverse(data,0,data.length-1));


// data = data.reverse()
// console.log(data);