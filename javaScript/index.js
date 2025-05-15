let db_users = [
  { name: "Aarav", email: "aarav@gmail.com", password: "aarav0" },
  { name: "Aarya", email: "aarya@gmail.com", password: "aarya1" },
  { name: "Aasha", email: "aasha@gmail.com", password: "aasha2" },
  { name: "Anisha", email: "anisha@gmail.com", password: "anisha3" },
  { name: "Amit", email: "amit@gmail.com", password: "amit4" },
  { name: "Anjana", email: "anjana@gmail.com", password: "anjana5" },
  { name: "Bijay", email: "bijay@gmail.com", password: "bijay6" },
  { name: "Bikash", email: "bikash@gmail.com", password: "bikash7" },
  {
    name: "Chhiring",
    email: "chhiring@gmail.com",
    password: "chhiring8",
  },
  { name: "Dilip", email: "dilip@gmail.com", password: "dilip9" },
  {
    name: "Dipendra",
    email: "dipendra@gmail.com",
    password: "dipendra10",
  },
  { name: "Gagan", email: "gagan@gmail.com", password: "gagan11" },
  { name: "Gauri", email: "gauri@gmail.com", password: "gauri12" },
  { name: "Hari", email: "hari@gmail.com", password: "hari13" },
  {
    name: "Ishwari",
    email: "ishwari@gmail.com",
    password: "ishwari14",
  },
  { name: "Jeevan", email: "jeevan@gmail.com", password: "jeevan15" },
  { name: "Kabita", email: "kabita@gmail.com", password: "kabita16" },
  { name: "Kiran", email: "kiran@gmail.com", password: "kiran17" },
  {
    name: "Krishna",
    email: "krishna@gmail.com",
    password: "krishna18",
  },
  { name: "Laxmi", email: "laxmi@gmail.com", password: "laxmi19" },
  { name: "Manish", email: "manish@gmail.com", password: "manish20" },
  { name: "Nabin", email: "nabin@gmail.com", password: "nabin21" },
  {
    name: "Nirajan",
    email: "nirajan@gmail.com",
    password: "nirajan22",
  },
  {
    name: "Pradeep",
    email: "pradeep@gmail.com",
    password: "pradeep23",
  },
  { name: "Pragya", email: "pragya@gmail.com", password: "pragya24" },
  { name: "Rajan", email: "rajan@gmail.com", password: "rajan25" },
  { name: "Rina", email: "rina@gmail.com", password: "rina26" },
  { name: "Sabin", email: "sabin@gmail.com", password: "sabin27" },
  { name: "Sabina", email: "sabina@gmail.com", password: "sabina28" },
  { name: "Sajan", email: "sajan@gmail.com", password: "sajan29" },
  { name: "Saroj", email: "saroj@gmail.com", password: "saroj30" },
  { name: "Shanti", email: "shanti@gmail.com", password: "shanti31" },
  {
    name: "Srijana",
    email: "srijana@gmail.com",
    password: "srijana32",
  },
  { name: "Subash", email: "subash@gmail.com", password: "subash33" },
  { name: "Suman", email: "suman@gmail.com", password: "suman34" },
  { name: "Sunil", email: "sunil@gmail.com", password: "sunil35" },
  { name: "Sushil", email: "sushil@gmail.com", password: "sushil36" },
  { name: "Urmila", email: "urmila@gmail.com", password: "urmila37" },
  { name: "Yogesh", email: "yogesh@gmail.com", password: "yogesh38" },
];

// /*
// TODO:
//     create a function to check the email and password for a user

//     NOTE: we have lots of user , we have to check through each data.

// OUTPUT:
//     loginUser("yogesh@gmail.com","yogesh38") // login successful
//     loginUser("urmila@gmail.com","urmila37") // login successful
//     loginUser("urmila@gmail.com","urmila-wrong") // Invalid Credential

// */

// let isLog = false;

// function loginUser(inputEmail,inputPassword){
//     isLog = false
//             db_users.forEach(checkEligibilty=>{
//             const{email,password}=checkEligibilty;
//             if (inputEmail===email && inputPassword===password) {
//                console.log('login successful');
//             isLog= true

//             }

//         })

//     }
//     if(isLog==false){console.log(`login failed`);}
//     loginUser("urmila@gmail.com","urmila-wrong")
//     loginUser("yogesh@gmail.com","yogesh38") // login successful

//     loginUser("urmila@gmail.com","urmila37")
// login successful
// loginUser("urmila@gmail.com","urmila-wrong") // Invalid Credential

function loginUser(inputEmail, inputPassword) {
  let logger = false;
  db_users.forEach((checkEligibilty) => {
    const { email, password } = checkEligibilty;
    if (inputEmail === email && inputPassword === password) {
      logger = true;
    }
  });
  return logger;
}

loginUser("yogesh@gmail.com", "yogesh38")
  ? console.log(`login successful`)
  : console.log(`invalid username or password`);

loginUser("urmila@gmail.com", "urmila-wrong")
  ? console.log(`login successful`)
  : console.log(`invalid username or password`);

loginUser("urmila@gmail.com", "urmila37")
  ? console.log(`login successful`)
  : console.log(`invalid username or password`);


// using find method

// function loginUser(inputEmail, inputPassword) {
//   return db_users.find((user) => {
//     user.email === inputEmail && user.password === inputPassword;
//   }) !== undefined;;
// }

// loginUser("yogesh@gmail.com", "yogesh38")
//   ? console.log(`login successful`)
//   : console.log(`invalid username or password`);

// loginUser("urmila@gmail.com", "urmila-wrong")
//   ? console.log(`login successful`)
//   : console.log(`invalid username or password`);

// loginUser("urmila@gmail.com", "urmila37")
//   ? console.log(`login successful`)
//   : console.log(`invalid username or password`);

let numbers = [1, 2, 3, 4, 5, 6];
let evenNumbers = [];
// numbers.forEach((check,index)=>{
//     if(check%2==0){
//    evenNumbers[evenNumbers.length]=check

//     }

// })
// console.log(evenNumbers);

let moreEvenNumbers = numbers.filter((add) => add % 2 === 0);
console.log(moreEvenNumbers);

// for(let index = 0; index<numbers.length;index++){
//     if(numbers[index]%2===0){
//         console.log(evenNumbers.length);
//         evenNumbers[evenNumbers.length]=numbers[index];

//     }
// }
// console.log(evenNumbers);

let todos = [
  {
    title: "html",
    status: true,
  },
  {
    title: "css",
    status: true,
  },
  {
    title: "js",
    status: true,
  },
  {
    title: "react",
    status: false,
  },
];

// make a new array where status is true
//   let trueStatus=[]

//   todos.forEach(checkStatus=>{
//     let{title,status}=checkStatus;
//     if(status){
//         trueStatus.push(checkStatus);
//     }
//   })
//   console.log(trueStatus);

//  USing filter Method

//   function isCompleted(todo){
//     return todo.status==true
//   }

//   let completedTodos= todos.filter(isCompleted)

//   console.log(completedTodos);
let isCompleted = todos.filter((check) => check.status == true);
console.log(isCompleted);

/* 
      array function
      - push
      - for each




   */

let users = [
  {
    name: "ram",
    cartItems: [
      {
        product: "watch",
        quantity: 1,
        rate: 1000,
      },
      {
        product: "mouse",
        quantity: 2,
        rate: 2000,
      },
    ],
  },
  {
    name: "hari",
    cartItems: [
      {
        product: "keyboard",
        quantity: 1,
        rate: 2000,
      },
    ],
  },
];

users.forEach((user) => {
  let subTotal = 0;
  let { name, cartItems } = user;
  cartItems.forEach((finalPrice) => {
    let { quantity, rate } = finalPrice;

    if (quantity > 0) {
      subTotal = subTotal + quantity * rate;
    }
  });
  console.log(`${name} has ordered of Rs ${subTotal}`);
});

let todo = [
  { title: "html", status: true },
  { title: "css", status: true },
  { title: "react", status: false },
  { title: "express", status: false },
];

let completedTodos = [];
// using filter method for status that is true
completedTodos = todo.filter((check) => check.status == true);
console.log(completedTodos);

// change status:true  to status : comleted or pending

//  todo.forEach(check=>{
//   let {title,status}=check
//   status? status= "completed":status="pending"
//     completedTodos.push({title,status})
// })
// console.log(completedTodos);

// let number = [1,2,3,4,5,6]

// let doubleNumbers= number.map(elment=> elment%2==0)

// console.log(doubleNumbers);

// use map to change status:true  to status : comleted or pending

let completedTodo = todo.map((el) => {
  el.status ? (el.status = "completed") : (el.status = "pending");
  return { ...el, status: el.status };
});

console.log(completedTodo);

let names = ["ram", "shyam", "hari", "gita"];
/*
     users= [
      {
        name:"ram",
        email:"ram@gmail.com",
        password:ram0
      },{
        name:shyam,
         email:"shyam@gmail.com",
        password:shyam0

      }
     ]



      */

let user = names.map((el, index) => ({
  name: el,
  email: `${el}@gmail.com`,
  password: `${el}${index}`,
}));

console.log(user);

setTimeout(() => {
  console.log("timout");
}, [2000]);

/*promise //network request

*/

let promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    // resolve ("data recieved")
    reject("servr error");
  }, [3000]);
}).catch((err) => {
  console.log("err", err);
});
