let user = { name: "a" };

let user2 = user;

user.score = 100;
console.log("user: ", user);                //user:  { name: 'a', score: 100 }

console.log("user2: ", user2);              // user2:  { name: 'a', score: 100 }

console.log(user === user2);                //true

//Cloning objects

const objToClone = { a: 1, b: 2, c: 3 };

const clone = {};

for (let key in obj) {
  console.log(key);
  clone[key] = objToClone[key];
}

console.log(clone);                          // {a: 1, b:2, c:3};
