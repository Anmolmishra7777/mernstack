let users = [
  {
    name: "ram",
    age: 20,
    phone: {
      ncell: "98xx",
      ntc: "96xx",
    },
    name: "hari",
    age: 20,
    phone: {
      ncell: "98xx",
      ntc: "96xx",
    },
    name: "sita",
    age: 22,
    phone: {
      ncell: "abcd",
      ntc: "96xx",
    },
  },
];
users[2].phone.ncell = "95XX";
console.log(users[2].phone.ncell);
