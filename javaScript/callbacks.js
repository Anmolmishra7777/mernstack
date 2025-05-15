// what is callback function
// to pass function as a parameter to another function 

function fetchData(c){
console.log("fetching data...");
setTimeout(()=>{
    c("api sucessfully fetched")
}, 2000);




}

fetchData((data)=>{
    console.log(data);
    
})

const mutateArray = (arr, action)=>{
    for(let i = 0; i< arr.length; i++){
     arr[i] = action(arr[i]);
    }
}

let array = [1,2,3,4,5]
mutateArray(array, (x)=>{
    return x *3
})


console.log("this is mutated array", array);


//promise (resolve, reject, pending)

const promise = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        reject("internal server error");
        resolve({
            data :"data from promise"
        })
    }, 5000)
});

promise.then((data)=>{
    console.log(data);
    
}).catch((error)=>{
    console.log(error);
    
})





let array2 = [1,2,3,4]
 const doubleArray =(arr,action)=>{
for(i=0;i<arr.length;i++){
   return arr[i]=action(arr[i])
}
 }

 doubleArray(array2,(action)=>{
    return action *2
 })
 console.log(array2);

 let array3 = [1,2,3,4,7,8,10,12]

  const filterArray =(arr,action)=>{

   return arr.filter(action)

 }

result = filterArray(array3, (a)=>{
    return a%2===0;
})

console.log(result);

