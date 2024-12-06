let promise= new promise((resolve,reject)=>{
    resolve("promise fullfilled ")
})
//handler for promise resolve
promise.then((data)=>
{
    console.log(data);

})
//handler for promise reject
promise.catch(()=>{
    console.log("error");
}).finally(()=>{//finally will always get printed whether anything else works or not 
    console.log("first");
})
