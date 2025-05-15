let user = {
    name : "john",
    token : "jfksfdakfdijfdjk",
    email : "john@gmail.com",

}
// localStorage.setItem("user-object", user);


const user1 = [
    {
        name :"ramesh",
        age : 25,
        address : "kathmandu",
        email : "ramesh@gmail.com",
        password :"psdsods"

    },
    {
        name :"hari",
        age : 26,
        address : "kathmandu",
        email : "Hari@gmail.com",
        password :"dsods"
        
    }
];

const registerUser = (name)=>{
    const user = user1.find((a)=>{
        return a.name.toLowerCase === name.toLowerCase 
    })


}

let  maskedAccountNumber= (acNumber)=>{
     const mask = maskedAccountNumber.fiter((acNumber)=>{
        return acNumber.lenghth
     })
}
let phoneNumber = 98923829329

function maskedPhoneNumber(phoneNumber){
    let lastfour = phoneNumber.toString().slice(-4);
    let maskedpart = "x".repeat(phoneNumber.toString().length-4);
    return maskedpart+lastfour
}

console.log(

    maskedPhoneNumber(phoneNumber)
);

