import firebase from "firebase/app";
import "firebase/database";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
  apiKey: "AIzaSyCaogVeOFf22xqdXKVrfVBBK-2ooBvASJo",
  authDomain: "expensify-ac42d.firebaseapp.com",
  projectId: "expensify-ac42d",
  storageBucket: "expensify-ac42d.appspot.com",
  messagingSenderId: "339149219578",
  appId: "1:339149219578:web:dbde63e8261609c59d4b43",
  measurementId: "G-P0BP44R5L0"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.database();

export { firebase, db as default };

// db.ref("expenses")
//   .once("value")
//   .then(response => {
//     const expenses = [];
//     response.forEach(data => {
//       expenses.push({ id: data.key, ...data.val() });
//     });
//     console.log(expenses);
//   });

// db.ref("expenses").push({
//   description: "Water bill",
//   note: "",
//   amount: 500,
//   createdAt: 1602802650000
// });
// db.ref("expenses").push({
//   description: "electricity bill",
//   note: "",
//   amount: 200,
//   createdAt: 1613802500000
// });
// db.ref("expenses").push({
//   description: "rent bill",
//   note: "",
//   amount: 2000,
//   createdAt: 1613005464214
// });
//   firebase.analytics();
