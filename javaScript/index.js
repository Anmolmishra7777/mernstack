let dbUser = [
  {
    username: 'ram12',
    password : '12345678'
  },
  {
    username: 'shyam12',
    password : '12345678'
  },{
    username: 'hari77',
    password : '987654321'
  }

]

// check in user database that username and password is correct or not
let inputuser = 'hari77'
let inputPassword= '987654321'
let c ;
dbUser.forEach(check=>{
  check.username===inputuser&&check.password===inputPassword? c=1:c=0;


})

c === 1 ? console.log('You are logged in.') : console.log('Your username or password is incorrect.');

let students = ['ram','shyam','hari']
let d = 0 ;
students.forEach(print =>{
  
  console.log(students[d]);
  console.log(d);
  d=d+1
})
//find multiplication(5)


function multiply(number,startingpoint,endpoint) {
  for(let a= startingpoint ; a<=endpoint;a++){
    console.log(`${number}*${a}=${number*a}`);
  }
  
}

multiply(5,5,10)




