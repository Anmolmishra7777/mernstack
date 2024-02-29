

let topics = [
  {
    title: "variable",
    status: "completed",
  },
  {
    title: "array",
    status: "completed",
  },
  {
    title: "object",
    status: "completed",
  },
  {
    title: "function",
    status: "pending",
  },
  {
    title: "loop",
    status: "pending",
  },
];

topics.forEach((topics) => {
  const title = topics.title;
  const status = topics.status;
  console.log(`${title} is ${status}`);
});

function result(topics, title) {
  console.log(`${topics} is ${title}`);
}
result(topics[0].title, topics[0].status);

input6 = 20;
function add(input1, input2) {
  let input6 = input1 + input2;
  return input6;
}
add(12, 13);

function double(input1, input2){
    let result = input1 + input2;
return result;

};
function sum(input1,input2) {
    console.log(`sum is ${input1+input2}`);
    
}

sum(double(20,30),double(30,40));

let blogs = [
  {
    title: "Basic Computer  Training in Nepal",
    created_at: "2024-03-22T15:14:31.944539+05:45",
  },
  {
    title: "Exploring Video Editing Opportunities",
    created_at: "2024-01-22T14:51:41.401510+05:45",
  },
  {
    title: "Mastering Adobe Illustrator at Mindrisers",
    created_at: "2024-02-22T14:49:45.524809+05:45",
  },
];
let date = blogs[0].created_at;
function time(timeAt) {
let samaya = timeAt.substring(0,10)
return samaya
  
}
samaya = time(date);


