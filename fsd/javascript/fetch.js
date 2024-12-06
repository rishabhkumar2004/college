//fetching a api 
// let url='https://api.github.com/users/tekkenelitegaming';
// let a=fetch(url);
// a.await(data)=>{
//     console.log(data);
//     return data.json();
// }).await((data)=>
// {
//     console.log(data);
// }).catch(()=>
// {
//     console.log("error");
// }).finally(()=>
// {
//     console.log("first");
// })
let url = 'https://api.github.com/users/tekkenelitegaming';

async function fetchData() {
  try {
    let response = await fetch(url);  
    console.log(response);

    let data = await response.json();  
    console.log(data); 
  } catch (error) {
    console.log("error");  
  } finally {
    console.log("first");  
  }
}

fetchData(); 

