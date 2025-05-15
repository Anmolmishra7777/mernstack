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

let students = ['ram','shyam',]
let d = 0 ;
students.forEach(print =>{
  
  console.log(students[d]);
  console.log(d);
  d=d+1
})
//find multiplication(5)


function multiply(obj) {
    let {number, startingpoint,endpoint}=obj
    for(let a= startingpoint ; a<=endpoint;a++){
      console.log(`${number}*${a}=${number*a}`);
    }
    
  }
  
  multiply({number:5,startingpoint:5,endpoint:10})
  // make the number of array double 
  let numbers = [1,2,3,4,5];
  
  for(let i =0 ; i<numbers.length;i++){
   numbers[i] = numbers[i]*2
   
  };
  console.log(numbers);
  
  // make the number of array double with for each
  
  numbers.forEach((num, a) => {
    numbers[a] = numbers[a]*2
  });
  console.log(numbers);


  let users = [
    {
      name: "ram",
      cartItems: [
        {
          product_id: 1,
          price: 100,
          quantity: 2,
        },
        {
          product_id: 2,
          price: 300,
          quantity: 2,
        },
        {
            product_id: 2,
            price: 0,
            quantity: 2,
          }
      ],
    },
    {
      name: "hari",
      cartItems: [
        {
          product_id: 3,
          price: 0,
          quantity: 2,
        },
        {
          product_id: 4,
          price: 0,
          quantity: 2,
        },
      ],
    },
  ];
// find user and amount of products ordered

function check(userName){
      let finalPrice = 0;
    users.forEach(checkUserName=>{
        let {name, cartItems}= checkUserName;
        const lowerCaseArrayName = name.toLowerCase();
        const lowerCaseInputName = userName.toLowerCase();

        if (lowerCaseArrayName==lowerCaseInputName){
           cartItems.forEach(add =>{
                let itemPrice = add.price
                finalPrice = finalPrice +itemPrice
            })
            console.log(`${name} has ordered of ${finalPrice}`);

           }else{
            console.log("invalid username");
           }

    })

  }

  check("hari")
  check("ram")






