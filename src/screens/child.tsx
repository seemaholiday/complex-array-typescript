import React from 'react'


type Childprops={
  arrayData: {
      AccountId:string,
      AccountName:string,
      employeInfo:
        {
          empName:string,
          empAge:number,
          salary:number,
          department:string
        }[]
        empPersonalInfo:{
        }[]
    }[]
}

export default function Childcomp({arrayData}:Childprops) {
  return (
    <div>
       {
        arrayData[0].employeInfo.map((item:any)=>
          <div>{item.empName}</div>
        )
       }
    </div>
  )
}
