

let todos = [
    {
      title : "html",
      status : true
    },
     {
      title : "front-end",
      status : true
    },
    {
      title : "mernstack",
      status : true
    },
  ]
  
  /* 
    Conditional Statemenst
  */
   
  
  
  
  // using ternary operator for checking status is completed or not

  todos.forEach(check=> {
    const title = check.title
    const status = check.status
    let mainStatus= status? "is completed":"is not completed"
    console.log(`${title} ${mainStatus} `)
    
  })
  
  let student1 = [{
    name : 'ram ',
    hasPaid : false,
    hasScholarship : true
  },
  {
    name : 'hari ',
    hasPaid : false,
    hasScholarship : false
  },{
    name : 'shyam ',
    hasPaid : false,
    hasScholarship : true
  }
  
  ]
  
  function checkEligibilty(obj){
   if(obj[1].hasPaid||obj[1].hasScholarship){
    console.log(`${obj[1].name} can give exam`);
   }
   else{
    console.log(`${obj[1].name} cannont give exam`);
   }
  }
  
  checkEligibilty(student1)




  let todo = [
    {
      title : "html",
      status : true
    },
     {
      title : "front-end",
      status : true
    },
    {
      title : "mernstack",
      status : true
    },
  ]
  
  /* 
    Conditional Statements
  */
   
  // Using ternary operator for checking if status is completed or not

  todo.forEach(check=> {
    const { a, b } = check;
    let mainStatus = b ? "is completed" : "is not completed";
    console.log(`${a} ${b}`);
  });

  
    