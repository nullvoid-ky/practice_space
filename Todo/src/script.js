// async function showData() {
//     let api = "http://127.0.0.1:8000/calculator/";
//     let res = await fetch(api);

//     if (res.status !== 200) {
//         alert("Something went wrong 1");
//         return;
//     }

//     const method = document.getElementById("operator").value;
//     const number = document.getElementById("number").value;
//     if (number != "") {
//         api += `${method}/${number}`;
//     }
//     res = await fetch(api);
//     console.log(api);

//     if (res.status !== 200) {
//         alert("Something went wrong 2");
//         return;
//     }

//     const jsonData = await res.json();
//     cal_display = document.getElementById("calculator");
//     cal_display.innerHTML = jsonData.num;

//     console.log(jsonData);
// }
// async function clearData() {
//     let api = "http://127.0.0.1:8000/calculator/clear";
//     let res = await fetch(api);

//     if (res.status !== 200) {
//         alert("Something went wrong 1");
//         return;
//     }
//     const jsonData = await res.json();
//     cal_display = document.getElementById("calculator");
//     cal_display.innerHTML = jsonData.num;

//     console.log(jsonData);
// }
// showData();

// // async function showData() {
// //   let api = "http://127.0.0.1:8000/calculator/";
// //   const res = await fetch(api);
// //   const jsonData = res.join;
// //   console.log(jsonData);
// //   // var operation = document.getElementById("operation").value;
// //   // var number = document.getElementById("number").value;

// //   // if (number !== "" && operation !== "") {
// //   //     api += `/${operation}/${number}/`;
// //   // } else {
// //   //     // return alert("Please enter a number and select an operation");
// //   // }
// //   // const res = await fetch(api);
// //   // const jsonData = await res.json();
// //   // console.log(jsonData);
// //   // try {
// //   //     if (res.status === 200) {
// //   //         let cal_display = document.getElementById("calculator");
// //   //         cal_display.innerHTML = jsonData.num;
// //   //         console.log(jsonData);
// //   //     } else {
// //   //         alert("Something went wrong");
// //   //     }
// //   // } catch (error) {
// //   //     console.error("Error parsing JSON:", error);
// //   //     alert("An error occurred while processing the response");
// //   // }
// // }
// // showData();
// // // function clearData() {
// // //     // Add logic to clear data if needed
// // // }

// // // async function showData() {
// // //     let api = "http://127.0.0.1:8000/calculator/";
// // //     var operation = document.getElementById("operation").value;
// // //     var number = document.getElementById("number").value;
// // //     if (number != null && operation != null) {
// // //         api += `/${operation}/${number}/`;
// // //     }
// // //     const res = await fetch(api);
// // //     const jsonData = await res.json();

// // //     if (res.status !== 200) {
// // //         return alert("Something went wrong");
// // //     }

// // //     cal_display = document.getElementById("calculator");
// // //     cal_display.innerHTML = jsonData.num;
// // //     console.log(jsonData);
// // // }
// // // showData();
