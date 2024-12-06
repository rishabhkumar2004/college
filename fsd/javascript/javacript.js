function foodOrder(item, time) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(item + " is ready ");
            resolve();
        });
    });
}

foodOrder("burger",2000).then(()=> {
    foodOrder("chicken",3000).then(()=>
    {
        console.log("order completed")
    })

})
