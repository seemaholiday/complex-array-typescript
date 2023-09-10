import React from 'react';
import Childcomp from './screens/child';
import datalist from './data.json';

// const obj={
//   name:'Seema',
//   designation:'Developer',
//   age:25
// }
// const organization=[
//   {
//     AccountId:"1",
//     AccountName:"abc",
//     employeInfo:[
//       {
//         empName:"Seema",
//         empAge:20,
//         salary:10000,
//         department:"IT"
//       },
//       {
//         empName:"Seema1",
//         empAge:22,
//         salary:20000,
//         department:"Management"
//       }
//     ],
//     empPersonalInfo:[
//       {

//       }
//     ]
//   }
// ]

function App() {
  return (
      <Childcomp arrayData={datalist}/>
  );
}

export default App;
