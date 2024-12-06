 let url = 'https://api.github.com/users';

async function fetchData() {
  try {
    response = await fetch(url);  
    
    data = await response.json();  
    console.log(data);
    
    
    document.getElementById('user-info').innerText = data.login;
    
  } catch (error) {
    document.getElementById('user-info').innerText = error.message;
  } finally {
    console.log("first");  
  }
}

fetchData();
