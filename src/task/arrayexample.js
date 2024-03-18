// const arr = [{ age: 12 }, { age: 15 }, { age: 12 }, { age: 16 }];
// let max = arr[0].age;

// for (i = 1; i < arr.length; i++) {
//   if (arr[i].age > arr[0].age) {
//     max = arr[i];
//   }
// }
// console.log(max);

// // ---------------------------------------------
// const arr = [{ age: 12 }, { age: 15 }, { age: 12 }, { age: 16 }];
// let max = arr[0].age;
// let count = {};

// for (let i = 0; i < arr.length; i++) {
//   if (count?.[arr[i].age]) {
//     count[arr[i].age] = count[arr[i].age] + 1;
//   } else {
//     count[arr[i].age] = 1;
//   }
// }

// console.log("Number of occurrences:", count);
// // -------------------------------------------------------
// const arr = [{ age: 12 }, { age: 15 }, { age: 12 }, { age: 16 }];
// let max = arr[0].age;

// for (i = 1; i < arr.length; i++) {
//   if (arr[i].age > arr[0].age) {
//     max = arr[i];
//   }
// }
// console.log(max.age);

// let list = [
//   { name: "Ajay", age: 12 },
//   { name: "Sanjay", age: 15 },
//   { name: "Nitin", age: 12 },
//   { name: "Vivek", age: 16 },
// ];

// let oldest = "";
// let youngest = "";
// let minAge = list[0];
// let maxAge = list[0];
// console.log(maxAge);

// for (let i = 0; i < list.length; i++) {
//   if (list[i].age > maxAge.age) {
//     maxAge = list[i];
//   }
//   if (list[i].age < minAge.age) {
//     minAge = list[i];
//   }
// }
// oldest = maxAge;
// console.log("oldest:", oldest);
// youngest = minAge;
// console.log("oldest:", youngest);

// // ---------------------------------------------

// const data = {
//   12: [
//     { name: "Ajay", age: 12 },
//     { name: "Nitin", age: 12 },
//   ],
//   15: [{ name: "Sanjay", age: 15 }],
//   16: [{ name: "Vivek", age: 16 }],
// };
// const groupData = {};
// for (age in data) {
//   if (data[age]) {
//     groupData[age] = data[age].map((obj) => obj.name);
//   }
// }

// console.log(groupData);

// // ------------------------------------------------

// // const arr = [{ age: 12 }, { age: 15 }, { age: 12 }, { age: 16 }];
// // let max = arr[0].age;
// // let count = {};

// // for (let i = 0; i < arr.length; i++) {
// //   if (count?.[arr[i].age]) {
// //     count[arr[i].age].push(arr[i]);
// //   } else {
// //     count[arr[i].age] = [arr[i]];
// //   }
// // }

// console.log("Number of occurrences:", count);

// arr = [
//   { name: "Ajay", age: 12 },
//   { name: "Sanjay", age: 15 },
//   { name: "Nitin", age: 12 },
//   { name: "Vivek", age: 16 },
// ];

// // let max = arr[0].age;

// for (i = 0; i < arr.length; i++) {
//   if (arr[i].age > 10 && arr[i].age <= 15) {
//     console.log(arr[i]);
//   }
// }

// const employees = [
//   { name: "John", salary: 50000, department: "IT" },
//   { name: "Jane", salary: 60000, department: "HR" },
//   { name: "Bob", salary: 55000, department: "IT" },
//   { name: "Sophie", salary: 75000, department: "HR" },
//   { name: "Mike", salary: 65000, department: "IT" },
//   { name: "Emily", salary: 80000, department: "HR" },
//   { name: "David", salary: 70000, department: "IT" },
// ];
// //
// const result = employees.reduce(
//   (acc, current) => {
//     if (current.department === "IT") {
//       acc.it = {
//         ...acc.it,
//         //total:0,count:0
//         total: acc.it.total + current.salary,
//         count: acc.it.count + 1,
//       };
//     }
//     if (current.department === "HR") {
//       acc.hr = {
//         ...acc.hr,
//         total: acc.hr.total + current.salary,
//         count: acc.hr.count + 1,
//       };
//     }
//     return acc;
//   },
//   {
//     it: { department: "IT", total: 0, count: 0 },
//     hr: { department: "HR", total: 0, count: 0 },
//   }
// );
// console.log(">>>>result", result);
// const avgResult = {
//   it: { department: "IT", average: result.it.total / result.it.count },
//   hr: { department: "HR", average: result.hr.total / result.hr.count },
// };
// console.log(">>>>>>>>>>>>>avgResult", avgResult);
// // result ={it:{department:'IT',totalSalary:5000,count:5},hr:{department:"HR",avg:70054}}

// const final = Object.values(avgResult).filter((item) => item.average > 65000);
// console.log(item);
// console.log(">>>final", final);
