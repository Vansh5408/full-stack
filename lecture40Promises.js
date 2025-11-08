// 1st method 
/*const promiseOne= new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Async task is complete");
        resolve();
    })
})
promiseOne.then(function(){
    console.log("promises is complete"); 
})
  

// 2nd method 
new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Async task 2 is complete");
        resolve();
    })
}).then(function(){
    console.log("promises 2 is complete");
    
})

//task of promises

new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({
            userName:"vansh",
            email:"chai@example.com;"
        })
    },1000)
}).then(function(user){
    console.log(user);
})

//2nd task promises

new Promise((resolve,reject)=>{
    let error = false;
    if(!error){
        resolve({
             userName:"vansh",
            email:"chai@example.com;"
        })
    }
    else{
        reject('error is coming ')
    }
})
.then((user)=>{
    console.log(user); 
    return user.userName;
})
.then((userName)=>{
    console.log(userName);
})
.catch((error)=>{
    console.log(error);  
})
.finally(()=>{
    console.log("promises  is either resolve or not ");
})


//3rd task is promises 

const fivepromise =  new Promise((resolve,reject)=>{
    let error = false;
    if(!error){
        resolve({
            user:"java script",
            password:1234
        })
    }
    else{
        reject('error in java script ')
    }
})

async function consumerPromises() {
    try{
        console.log(await fivepromise);
    }
    catch(error){
        console.log(error);
    }
}
consumerPromises();

// 4th task in promises 

async function fetchData() {
   try {
    let response = await fetch('https://jsonplaceholder.typicode.com/users');
    let data = await response.json();
    console.log(data);
  } 
  catch (error) {
    console.error('Error fetching data:', error);
   }
}
fetchData();   */

//5th task use of then and catch 

fetch('https://jsonplaceholder.typicode.com/users')
.then((response2)=>{
    return response2.json();
})
.then((data)=>{
    console.log(data)
})
.catch((error)=>{
    console.log(error)
})