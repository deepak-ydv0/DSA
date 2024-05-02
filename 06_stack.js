 let data = []
 
 let currntSize = data.length
 let max = 5

 function push(newVal) {
    if (currntSize<max) {
      data[currntSize] = newVal
      currntSize++
    }else{
      console.log(`stack is full ${newVal}`);
    }

 }

 


function pop() {
   if (currntSize>0) {
      currntSize = currntSize-1;
      data.length = currntSize
   }else{
      console.log("stack is empty");
   }
}

 push(10)
 push(20)
 push(30)
 push(40)
 push(50)
 push(60)
 push(70)
 push(80)
 push(90)
 push(100)
 console.log(data);
 console.log(currntSize);
 pop()
 pop()
 pop()
 pop()
 pop()
 pop()
 
 console.log(data);