const promise=new Promise((resolve,reject)=>{
    setTimeout(()=>{
            // resolve({
            //     name:"gitesh",
            //     age:34
            // });
        reject("something went fail")
    },1500)
    
});

console.log("before")

promise.then((data)=>{
    console.log(data)
}).then(()=>{
    console.log("hello threre")
})
.catch((error)=>{
    console.log("error=",error)
})
console.log("after")