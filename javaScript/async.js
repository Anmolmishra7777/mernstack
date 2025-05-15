//async and await


const asyncFunction = async ()=>{
    const response = await fetch('https://jasonplaceholder.typicode.com/todos/1');
    const data = await response.jason();
    console.log("this is response from async function", data);

          

};

const asyncFunction1 = async()=>{
    try{
        const response = await fetch('https://jasonplaceholder.typicode.com/todos/1');
    const data = await response.jason();
    console.log("this is response from async function", data);

    }
    catch(err) {

        console.log("this is error from async function1",err);
        
    }
}
